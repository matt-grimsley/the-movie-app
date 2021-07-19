import { Component, OnInit } from '@angular/core';
import { SubscribableOrPromise, Subscription } from 'rxjs';
import { User } from '../shared/user.model';
import { UserService } from '../shared/user.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    collapsed = true;
    user: User;
    userSub: Subscription;

    constructor(private userService: UserService) {}

    ngOnInit(): void {
        this.userSub = this.userService.userSubject.subscribe((user) => {
            this.user = user;
        });
    }

    logout() {
      this.userService.logout();
    }
}
