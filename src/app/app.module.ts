import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DepositItermComponent } from './deposit-iterm/deposit-iterm.component';
import { ItermComponent } from './iterm/iterm.component';
import { ClearningMaterialComponent } from './clearning-material/clearning-material.component';
import { DashComponent } from './dash/dash.component';
import { ServicesService } from './services.service';
import { UserComponent } from './user/user.component';
import { CustomerComponent } from './customer/customer.component';
import { NewUserComponent } from './new-user/new-user.component';
import { NewCustomerComponent } from './new-customer/new-customer.component';
import { FormsModule } from '@angular/forms';
import { NewItermsComponent } from './new-iterms/new-iterms.component';
import { NewDepositeComponent } from './new-deposite/new-deposite.component';
const routes: Routes = [
  { path: 'dashboard', component: DashComponent },
  { path: 'deposit-iterm', component: DepositItermComponent },
  { path: 'iterm', component: ItermComponent },
  { path: 'cleaning-materials', component: ClearningMaterialComponent },
  { path: 'user', component: UserComponent },
  { path: 'customer', component: CustomerComponent },
  { path: 'newUser', component: NewUserComponent },
  { path: 'newCustomer', component: NewCustomerComponent },
  { path: 'newIterms', component: NewItermsComponent },
  { path: 'newDeposite', component: NewDepositeComponent },




];
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    DepositItermComponent,
    ItermComponent,
    ClearningMaterialComponent,
    DashComponent,
    UserComponent,
    CustomerComponent,
    NewUserComponent,
    NewCustomerComponent,
    NewItermsComponent,
    NewDepositeComponent

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [ServicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
