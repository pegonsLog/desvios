import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DesviosModule } from './desvios/desvios.module';
import { LoginModule } from './login/login.module';
import { AngularMaterialModule } from './shared/angular-material/angular-material.module';
import { HeaderComponent } from './shared/header/header.component';
import { SharedModule } from './shared/shared.module';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    AngularMaterialModule,
    LoginModule,
    DesviosModule,


  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
