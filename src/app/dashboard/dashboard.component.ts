import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  idToken = null;
  uid = null;

  constructor(public authService: AuthService) { }

  ngOnInit() {
    this.idToken = this.authService.getToken();
    this.uid = this.authService.getUid();
    console.log(this.idToken);
  }

}
