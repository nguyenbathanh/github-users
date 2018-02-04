import {Component, OnInit, OnDestroy, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import {AppServices} from './services/app.services';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public selectedUser: any = null;
  public userList = [];
  public asyncStatus = {
    loadUserList: false,
    loadUser: false
  }

  constructor(private appServices: AppServices) {
  }

  public ngOnInit() {
    this.appServices.getAllUsers().then((response: any) => {
      this.userList = response;
    });
  }

  public showUser(user: any) {
    this.asyncStatus.loadUser = true;
    this.appServices.getUser(user.login).then((response: any) => {
      this.selectedUser = response;
      this.asyncStatus.loadUser = false;
    });
  }

  public backToList() {
    this.selectedUser = null;
  }

}
