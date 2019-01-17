import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

authStatus: boolean;
  constructor(private autoservice: AuthService, private router : Router) { }

  ngOnInit() {
    this.authStatus = this.autoservice.IsAuth;
  }

  OnSignIn() {
    this.autoservice.signIn().then(
      () => {
        console.log('Sign in successfull');
        this.authStatus = this.autoservice.IsAuth;
        this.router.navigate(['appareils'])
      }
    )
  }

  OnSignOut() {
    this.autoservice.signout();
    console.log('Sign out successfull');
    this.authStatus = this.autoservice.IsAuth;
  }
}
