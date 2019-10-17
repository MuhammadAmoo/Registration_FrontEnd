import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/sections/navbar/navbar.component';
import { FooterComponent } from './components/sections/footer/footer.component';
import { AddComponent } from './components/Driver/add-driver/add.component';
import { ListComponent } from './components/Driver/list-driver/list.component';
import { EditComponent } from './components/Driver/edit-driver/edit.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    AddComponent,
    ListComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
