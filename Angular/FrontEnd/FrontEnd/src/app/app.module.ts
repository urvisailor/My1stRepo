import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';

import { FormsModule } from '@angular/forms';
import { EmpServiceService } from './emp-service.service';
import { HttpClientModule} from '@angular/common/http';




@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    EmpServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
