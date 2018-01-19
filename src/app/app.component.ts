import { UserService } from './user.service';
import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private auth: AuthService, private userService: UserService, router: Router) {
    // redirect after login
    auth.user$.subscribe(user => {
      if (!user) return;

      userService.save(user); // save user everytime he/she logs in

      let returnUrl = localStorage.getItem('returnUrl');
      if (!returnUrl) return;
      
      localStorage.removeItem('returnUrl');
      router.navigateByUrl(returnUrl);
    });
  }
}
