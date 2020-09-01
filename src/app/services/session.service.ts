import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  
  constructor(private http: HttpClient) { }

  public activeSession() {
    const helper = new JwtHelperService();
    const token = sessionStorage.getItem('token');

    // const decodedToken = helper.decodeToken(myRawToken);
    // const expirationDate = helper.getTokenExpirationDate(myRawToken);

    const isExpired = helper.isTokenExpired(token); 
    console.log('getTokenExpirationDate', helper.getTokenExpirationDate(token));
    console.log('isExpired', isExpired);
    return !isExpired;
  }

  public login(username: string, password: string): Promise<any> {
    if (username === 'falemparte' && password === 'Banmedica01') {
      return this.http.post(`${environment.serve}api/${environment.api_v1}test/superheroes`, {}).toPromise();
    }
    return undefined;
  }

  public setToken(token: string) {
    sessionStorage.setItem('token', token);
  }

}
