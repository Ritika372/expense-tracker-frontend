import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenValidationService {
  private baseurl="https://oauth2.googleapis.com/tokeninfo?id_token=";
  constructor(private httpClient:HttpClient) { }
  
  getValidator(idToken:String): Observable<any>{
    return this.httpClient.get(`${this.baseurl}${idToken}`
    ,{responseType:'text',  observe: 'response'})
  }
}




