import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  email: String;
  token: String;
  constructor() {}

  ngOnInit() {
    const parseData = JSON.parse(localStorage.getItem('currentUser'));
    console.log('user - ' + JSON.parse(localStorage.getItem('currentUser')).email);
    this.token = parseData.token;
    this.email = parseData.email;
  }

}
