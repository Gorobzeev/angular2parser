import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../../_services/authentication.service';

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.css']
})
export class PublicComponent implements OnInit {

  constructor(public authService: AuthenticationService) { }

  ngOnInit() {
  }

}
