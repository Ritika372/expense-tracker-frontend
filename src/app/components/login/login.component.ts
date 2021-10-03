import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import {SocialAuthService} from 'angularx-social-login';
import {SocialUser,GoogleLoginProvider} from 'angularx-social-login';
import { Oauthdto } from 'src/app/models/oauthdto';
import { OauthLoginService } from 'src/app/services/oauth-login.service';
import { TokenValidationService } from 'src/app/services/token-validation.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [
    './login.component.css',
  ],
})
export class LoginComponent implements OnInit {
temp:any;
  user:SocialUser;
 check:Boolean;
 idToken:String;
 userdto:Oauthdto;
  constructor(private authService: SocialAuthService,
    private tokenValidation:TokenValidationService,
    private oauthLogin:OauthLoginService) {}

  ngOnInit(): void {
    this.authService.authState.subscribe((user)=>
    {
      this.user=user;
      console.log(this.user.email);
      console.log(this.user);
      this.idToken=user.idToken;
      this.check=this.validateUser(this.idToken);
    });
  }
validateUser(idToken): Boolean{

  this.tokenValidation.getValidator(idToken).subscribe(data=>{
    console.log(data.status);
    if(data.status==200)
    {
      this.userdto.idToken=this.user.idToken;
      this.userdto.email=this.user.email;
      this.userdto.firstName=this.user.firstName;
      this.userdto.lastName=this.user.lastName;
      this.getUserDetails(this.userdto);
    }
  },
  (error) => {
    console.log("Here");
      console.log(error.error);
  });
 
  return true;
}
getUserDetails(userDto){
  this.oauthLogin.getUser(userDto).subscribe(data=>{
    console.log(data);
  })
}
  signInWithGoogle() : any
  {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
   
  }


}
