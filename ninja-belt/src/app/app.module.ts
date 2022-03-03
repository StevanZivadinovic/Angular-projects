import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';//importovano routingComponents
import { AppComponent } from './app.component';
// import { NavbarComponent } from './navbar/navbar.component';

import { FormsModule } from '@angular/forms';//ovo dodajes da bi [(ngModel)] radio
// import { DirectoryComponent } from './directory/directory.component';



@NgModule({
  declarations: [
    AppComponent,
    routingComponents//dodato umesto ovog dole
    // NavbarComponent,
    // DirectoryComponent
    //umesto ove dve komponente ubacuje se routing komponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
