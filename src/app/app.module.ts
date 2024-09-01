import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ProductComponent } from './product/product.component';
import { RandomQuoteComponent } from './random-quote/random-quote.component';
import { RandomNumberComponent } from './random-number/random-number.component';
import { RandomNameComponent } from './random-name/random-name.component';
import { FormsModule } from '@angular/forms';
import { JungleComponent } from './input1/jungle/jungle.component';
import { ZooComponent } from './input1/zoo/zoo.component';
import { SettingsComponent } from './input2/settings/settings.component';
import { ProfileComponent } from './input2/profile/profile.component';
import { UsersComponent } from './input3/users/users.component';
import { User1Component } from './input3/user1/user1.component';
import { User2Component } from './input3/user2/user2.component';
import { User3Component } from './input3/user3/user3.component';
import { Users4Component } from './input3/user4/users4.component';
import { EmployeeComponent } from './employee/employee.component';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    ForgotPasswordComponent,
    ProductComponent,
    RandomQuoteComponent,
    RandomNumberComponent,
    RandomNameComponent,
    JungleComponent,
    ZooComponent,
    SettingsComponent,
    ProfileComponent,
    UsersComponent,
    User1Component,
    User2Component,
    User3Component,
    Users4Component,
    EmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
