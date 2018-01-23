import { AppUser } from '../../shared/models/app-user';
import { UserService } from '../../shared/services/user.service';
import { AuthService } from '../../shared/services/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AdminAuthGuard implements CanActivate{

  constructor(private auth: AuthService, private userService: UserService) { }

  canActivate(): Observable<boolean>{
    return this.auth.appUser$
      .map(appUser => appUser.isAdmin); 
  }

}
