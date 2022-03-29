import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, Input, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data/data.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LabelComponent } from '../../label/label.component';
import { LabelService } from 'src/app/services/label/label.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnDestroy {

  mobileQuery: MediaQueryList;
  isExpanded = false;
  private _mobileQueryListener: () => void;
  LabelList: any

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private data: DataService, private router: Router, public dialog: MatDialog, private labelservice: LabelService) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
    this.getlabel();
    console.log(this.LabelList);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
  search(event: any) {
    console.log(event.target.value);
    this.data.sendData(event.target.value);

  }
  getlabel() {
    this.labelservice.getlabels().subscribe((response: any) => {
      console.log(response);
      this.LabelList = response;
      console.log(this.LabelList);
    });
  }
  logout() {
    localStorage.removeItem('token')
    this.router.navigateByUrl("/login");
    console.log("logged out");

  }
  Edit(LabelList: any) {
    let dialogRef = this.dialog.open(LabelComponent, { data: LabelList });
    dialogRef.afterClosed().subscribe(result => {
      console.log(result.data);
    })
  }

}
