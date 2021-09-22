import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Expense } from 'src/app/models/expense';
import { ExpenseService } from 'src/app/services/expense.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(private expenseService:ExpenseService,
    private router:Router) { }
      expenses:Expense[];
  ngOnInit(): void {
    this.getExpenses();
  }
  getExpenses(){
    this.expenseService.getExpenseList().subscribe(data=>{
      this.expenses=data;
      console.log(this.expenses);
    })
  }

}
