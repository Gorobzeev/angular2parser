import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  showMenu = true;

  constructor(private router: Router) {
  }

  ngOnInit() {
    // listenging to routing navigation event
    this.router.events.subscribe(event => this.modifyMenu(event));
  }

  modifyMenu(location) {
    // alert(location.url)
    this.showMenu = location.url !== '/login';
  }
}
