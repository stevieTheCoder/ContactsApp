import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';
import { Router } from '@angular/router';
import { MatSidenav } from '@angular/material';

const SMALL_WIDTH_BREAKPOINT = 720;

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

  isScreenSmall: Observable<boolean>;
  users: Observable<User[]>;

  constructor(breakpoints: BreakpointObserver, private userService: UserService, private router: Router) {
    this.isScreenSmall =
    breakpoints.observe(`(max-width: ${SMALL_WIDTH_BREAKPOINT}px)`)
    .pipe(map(breakpoint => breakpoint.matches));
  }

  @ViewChild(MatSidenav, {static: false}) sidenav: MatSidenav;

  ngOnInit() {
    this.users = this.userService.users;
    this.userService.loadAll();

    this.router.events.subscribe(() => {
      this.isScreenSmall.subscribe(isSmall => {
        if (isSmall) {
          this.sidenav.close();
        }
      });
    });
   }
}
