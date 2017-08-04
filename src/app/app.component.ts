import { LoginService } from './careplan/service/login.service';
import { Component, OnInit } from '@angular/core';
import { BaseRequestOptions, RequestOptions, Http } from '@angular/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [LoginService]
})

export class AppComponent implements OnInit {
  static didOneDayPass(fromMillis: number): boolean {
    return (Date.now() - fromMillis) > (24 * 60 * 60 * 1000);
  }

  constructor (private loginService: LoginService, private router: Router) {}

  ngOnInit() {
    this.loginService.me().subscribe(response => {
      localStorage.setItem('patient', JSON.stringify(response));
      this.router.navigate(['/issues']);
    });
  }
}
