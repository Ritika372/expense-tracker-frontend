import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Oauthdto } from '../models/oauthdto';

@Injectable({
  providedIn: 'root'
})
export class OauthLoginService {
  private baseurl =
  'http://localhost:8080/v1/users';
  constructor(private httpclient:HttpClient) { }
  getUser(userDto:Oauthdto): Observable<any> {
    const params=new HttpParams()
    .set('idtoken',userDto.idToken)
    .set('email',userDto.email)
    .set('firstname',userDto.firstName)
    .set('lastname',userDto.lastName);

    return this.httpclient.get(this.baseurl,{params:params});
  }
}
