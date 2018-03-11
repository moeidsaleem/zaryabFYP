//angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, OnInit } from '@angular/core';
import {RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
//primeng
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { InputTextModule, ButtonModule, DataTableModule, DialogModule, GalleriaModule, ChartModule } from 'primeng/primeng';
// Components
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component'
import { AuthComponent } from './auth/auth.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { WebrtcService } from './webrtc.service';
import { LearnmoreComponent } from './learnmore/learnmore.component';
import { PricingComponent } from './pricing/pricing.component';
import { DemoComponent } from './demo/demo.component';
import { AboutComponent } from './about/about.component';
import { JoinComponent } from './join/join.component';

//Atrix Meeting
// This will have landing page, in dashboard=> profile, host, join,
/* I will do the routing as follow 
-- landing page 
-- Login/ Signup 
----Dashboard
   -- Host Meeting 
   -- Join Meeting 


*/

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    AuthComponent,
    DashboardComponent,
    LearnmoreComponent,
    PricingComponent,
    DemoComponent,
    AboutComponent,
    JoinComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    DataTableModule,
    HttpModule,
    InputTextModule, 
    DialogModule,
    ButtonModule,
    GalleriaModule,
    ChartModule,
    RouterModule.forRoot([
      { 
         path:'',
         redirectTo:'demo',
         pathMatch: 'full'
      }, 
      { path: 'home',  component : LandingComponent},
      { path:'features', component:LearnmoreComponent},
      { path:'demo', component:DemoComponent},
      { path:'pricing', component:DemoComponent},
      { path:'demo', component:DemoComponent},
      { path:'about', component:AboutComponent},
      { path:'demo/:id', component:JoinComponent},
   ])
  ],
  providers: [WebrtcService],
  bootstrap: [AppComponent]
})

export class AppModule{


  
 }
