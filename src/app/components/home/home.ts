import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';

import { UserDataService } from '../../services/user-data-service';
import { Inbox } from './inbox/inbox';
import { Search } from './search/search';
import { Observable } from 'rxjs';
import { User } from '../../models/user-data';

@Component({
  selector: 'app-home',
  imports: [AsyncPipe, Inbox, Search],
  templateUrl: './home.html',
})
export class Home {
  private userDataService: UserDataService = inject(UserDataService);

  protected currentUser$: Observable<User> = this.userDataService.getCurrentUser();
}
