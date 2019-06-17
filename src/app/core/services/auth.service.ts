import { Injectable } from '@angular/core';
import { UserInfo } from '../../shared/models/UserInfo'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: UserInfo;

  constructor() { }

  getAuthorizationToken() {
    return 'some-auth-token';
  }

  getUser():UserInfo {
    return this.user;
  }

  isAuthenticated():boolean {
    // Check to see if user is authenticated
    // Based on your application apply a logic to check if user is authenticated
    return true;
  }
}
