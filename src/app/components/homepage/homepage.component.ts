import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Expense } from 'src/app/models/expense';
import { ExpenseService } from 'src/app/services/expense.service';
import { IncomeService } from 'src/app/services/income.service';
import { Income } from 'src/app/models/income';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent implements OnInit {
  constructor(
    private expenseService: ExpenseService,
    private incomeService: IncomeService,
    private router: Router
  ) {}
  expenses: Expense[];
  income: Income[];
  ngOnInit(): void {
    this.getExpenses();
    this.getIncome();
  }
  getExpenses() {
    this.expenseService.getExpenseList().subscribe((data) => {
      this.expenses = data;
      console.log(this.expenses);
    });
  }

  getIncome() {
    this.incomeService
      .getIncomeList()
      .subscribe((data) => (this.income = data));
  }
}
