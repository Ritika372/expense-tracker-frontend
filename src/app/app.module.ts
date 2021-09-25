import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AddIncomeComponent } from './components/add-income/add-income.component';
import { ExpenseModalComponent } from './components/expense-modal/expense-modal.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import {SocialAuthServiceConfig} from 'angularx-social-login';
import {SocialLoginModule,GoogleLoginProvider} from 'angularx-social-login';


@NgModule({
  declarations: [AppComponent, NavbarComponent, HomepageComponent, AddIncomeComponent,ExpenseModalComponent, LoginComponent, RegisterComponent ],
  imports: [HttpClientModule, BrowserModule, AppRoutingModule, FormsModule,
    SocialLoginModule],
  providers: [
    {
    provide:'SocialAuthServiceConfig',
    useValue:{
      autoLogin: false,
      providers:[
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider('1095845763452-cn4jebbhe2ge08jtm36fgp1pld2u2m2n.apps.googleusercontent.com')
        }
      ],
      onError: (err) => {
        console.error(err);
      }
    }  as SocialAuthServiceConfig
  }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}


