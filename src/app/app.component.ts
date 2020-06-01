import { Component } from '@angular/core';
import {AccountService} from 'src/app/services/account.service';
import{User} from 'src/app/_modlels/user'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  user: User;

  constructor(private accountService: AccountService) {
      this.accountService.user.subscribe(x => this.user = x);
  }

  logout() {
      this.accountService.logout();
  }
}
