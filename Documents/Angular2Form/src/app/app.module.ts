import { OverviewComponent } from './overview/overview.component';
import { RouteGuardService } from './route-guard.service';
import { AppRoutes } from './app.routes';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { firebaseConfig } from './angularFire.config';
import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';

@NgModule({
  declarations: [
    AppComponent,
    OverviewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AppRoutes
  ],
  providers: [RouteGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
