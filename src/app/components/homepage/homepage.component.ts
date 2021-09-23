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
  cashInflow: Number = 0;
  cashOutflow: Number = 0;
  balance: Number = 0;

  ngOnInit(): void {
    this.getExpenses();
    this.getIncome();
  }

  getExpenses() {
    this.expenseService.getExpenseList().subscribe((data) => {
      this.expenses = data;
      this.calculateOutflow();
      this.balance = +this.cashInflow - +this.cashOutflow;
    });
  }

  getIncome() {
    this.incomeService.getIncomeList().subscribe((data) => {
      this.income = data;
      console.log(this.income);
      this.calculateInflow();
      this.balance = +this.cashInflow - +this.cashOutflow;
    });
  }

  calculateInflow() {
    var date = new Date();
    var firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
    var lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    var filteredIncome = this.income.filter((inc) => {
      var date = new Date(inc.created_on);
      return date >= firstDay && date <= lastDay;
    });
    filteredIncome.forEach((inc) => {
      this.cashInflow = +this.cashInflow + +inc.amount;
    });
  }

  calculateOutflow() {
    var date = new Date();
    var firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
    var lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    var filteredExpense = this.expenses.filter((exp) => {
      var date = new Date(exp.expense_date);
      return date >= firstDay && date <= lastDay;
    });

    filteredExpense.forEach((exp) => {
      this.cashOutflow = +this.cashOutflow + +exp.amount;
    });
  }
}
