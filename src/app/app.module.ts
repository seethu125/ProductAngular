import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AuthService } from './auth/auth.service';
import { ServiceComponent } from './components/service/service.component';
import { BookingComponent } from './components/booking/booking.component';
@NgModule({
  declarations: [
    AppComponent,
    ServiceComponent,
    BookingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
      AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
