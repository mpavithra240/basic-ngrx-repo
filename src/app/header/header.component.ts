import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../app.state';
import { logout } from '../state/auth.actions';
import { isAuthenticated } from '../state/auth.selector';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isAuthenticate: Observable<boolean>;
  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.isAuthenticate = this.store.select(isAuthenticated);
    console.log(this.isAuthenticate);
  }

  onLogout(event: Event) {
    event.preventDefault();
    this.store.dispatch(logout());
  }
}