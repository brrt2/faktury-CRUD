import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { UzytkownikComponent } from './components/uzytkownik/uzytkownik.component';


@NgModule({
  declarations: [
    AppComponent,
    UzytkownikComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
