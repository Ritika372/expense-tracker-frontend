import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Expense } from '../models/expense';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ExpenseService {
  private baseurl="http://localhost:8080/v1/users/61476a99de84567deac549ed/expenses";
  constructor(private httpClient: HttpClient) { }
  getExpenseList(): Observable<Expense[]>{
    return this.httpClient.get<Expense[]>(`${this.baseurl}`);
  }
}
