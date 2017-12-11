import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CarouselModule } from 'ngx-bootstrap';


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
import { NewMaterialComponent } from './new-material/new-material.component';
import { AlertModule } from 'ngx-bootstrap/alert';
import { HttpModule } from '@angular/http';
// import flash messages
import { FlashMessagesModule } from 'angular2-flash-messages';
import { PipePipe } from './user/pipe.pipe';
import { HomeComponent } from './home/home.component';
import { UserTemplateComponent } from './user-template/user-template.component';
import { CustomerTemplateComponent } from './customer-template/customer-template.component';
import { ItermsTemplateComponent } from './iterms-template/iterms-template.component';
import { DepositeTemplateComponent } from './deposite-template/deposite-template.component';
import { MaterialTemplateComponent } from './material-template/material-template.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'dashboard', component: DashboardComponent, children: [
      { path: 'contentDashboard', component: DashComponent },
      {
        path: 'deposit-iterm', component: DepositItermComponent, children: [
          { path: 'depositeT', component: DepositeTemplateComponent },
          { path: 'newDeposite', component: NewDepositeComponent },
        ]
      },
      {
        path: 'iterm', component: ItermComponent, children: [
          { path: 'itermT', component: ItermsTemplateComponent },
          { path: 'newIterms', component: NewItermsComponent },
        ]
      },
      {
        path: 'cleaning-materials', component: ClearningMaterialComponent, children: [
          { path: 'materialT', component: MaterialTemplateComponent },
          { path: 'newMaterial', component: NewMaterialComponent }
        ]
      },
      {
        path: 'user', component: UserComponent, children: [
          // { path: '', redirectTo: '/userT', pathMatch: 'full' },
          { path: 'userT', component: UserTemplateComponent },
          { path: 'newUser', component: NewUserComponent },
        ]
      },
      {
        path: 'customer', component: CustomerComponent, children: [
          { path: 'customerT', component: CustomerTemplateComponent },
          { path: 'newCustomer', component: NewCustomerComponent },

        ]
      }
    ]
  }
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
    NewDepositeComponent,
    NewMaterialComponent,
    PipePipe,
    HomeComponent,
    UserTemplateComponent,
    CustomerTemplateComponent,
    ItermsTemplateComponent,
    DepositeTemplateComponent,
    MaterialTemplateComponent

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    FlashMessagesModule.forRoot(),
    AlertModule.forRoot(),
    HttpModule,
    BsDropdownModule.forRoot(),
    CarouselModule.forRoot()
  ],
  providers: [ServicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
