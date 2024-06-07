import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LoginModel } from './models/auth/login.model';
import { HttpService } from './http.service';
import { RegisterModel } from './models/auth/register.model';
import * as jwt_decode from 'jwt-decode';

interface MetaData {
  accessToken: string;
  refreshToken: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private _http: HttpService) {}
  private loggedIn = new BehaviorSubject<boolean>(false);
  loggedIn$ = this.loggedIn.asObservable();
  accessToken: string = '';

  setLoggedIn(): void {
    return this.loggedIn.next(sessionStorage.getItem('authorize') != null);
  }

  isLoggedIn(): boolean {
    return this.loggedIn.getValue();
  }

  login(model: LoginModel) {
    return this._http.post('user/login', model);
  }

  register(model: RegisterModel) {
    return this._http.post('user/register', model);
  }

  jwtToSession(data: any): void {
    this.accessToken = data.accessToken;

    const jwtMetadata: MetaData = {
      accessToken: this.accessToken,
      refreshToken: data.refreshToken,
    };

    sessionStorage.setItem('authorize', JSON.stringify(jwtMetadata));
    this.setLoggedIn();
  }

  getUsername() {
    var info = jwt_decode.jwtDecode(this.accessToken) as any;

    var name =
      info['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name'];

    return name;
  }

  clearSession(): void {
    sessionStorage.removeItem('authorize');
    this.setLoggedIn();
  }
}
