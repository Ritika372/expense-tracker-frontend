import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddIncomeComponent } from './components/add-income/add-income.component';
import { ExpenseModalComponent } from './components/expense-modal/expense-modal.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: 'home', component: HomepageComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'addexpense', component: ExpenseModalComponent },
  {path: "login" , component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
