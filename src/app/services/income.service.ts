import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Income } from '../models/income';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class IncomeService {
  private baseurl =
    'http://localhost:8080/v1/users/614763699e85b82ee95e6d69/income';

  constructor(private httpClient: HttpClient) {}

  getIncomeList(): Observable<Income[]> {
    return this.httpClient.get<Income[]>(this.baseurl);
  }

  addIncome(income: Income): Observable<Object> {
    return this.httpClient.post(this.baseurl, income);
  }
}
