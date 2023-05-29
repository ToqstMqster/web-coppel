import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandmarkComponent } from './views/customer/landmark/landmark.component';
import { HomeComponent } from './views/customer/home/home.component';
import { ReportRecord1Component } from './views/customer/report-record1/report-record1.component';
import { ReportRecord2Component } from './views/customer/report-record2/report-record2.component';
import { ReportRecord3Component } from './views/customer/report-record3/report-record3.component';
import { Reportfollowup1Component } from './views/customer/reportfollowup1/reportfollowup1.component';
import { Reportfollowup2Component } from './views/customer/reportfollowup2/reportfollowup2.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DatepickerComponent } from './views/customer/datepicker/datepicker.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MenuListaComponent } from './views/employee/menu-lista/menu-lista.component';
import { CapturaDatosComponent } from './views/employee/captura-datos/captura-datos.component';
import { SideBarComponent } from './views/employee/side-bar/side-bar.component';
import { LogInComponent } from './views/employee/log-in/log-in.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'rr1', component: ReportRecord1Component},
  { path: 'rr2', component: ReportRecord2Component},
  { path: 'rr3', component: ReportRecord3Component},
  { path: 'rf1', component: Reportfollowup1Component},
  { path: 'rf2', component: Reportfollowup2Component},
  { path: 'ml', component: MenuListaComponent},
  { path: 'cd', component: CapturaDatosComponent},
  { path: 'li', component: LogInComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    LandmarkComponent,
    HomeComponent,
    ReportRecord1Component,
    ReportRecord2Component,
    ReportRecord3Component,
    Reportfollowup1Component,
    Reportfollowup2Component,
    DatepickerComponent,
    MenuListaComponent,
    CapturaDatosComponent,
    SideBarComponent,
    LogInComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    NgbModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
