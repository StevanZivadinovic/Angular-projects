import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DirectoryComponent } from './directory/directory.component';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [
  {path:'navbar', component:NavbarComponent},
  {path:'directory', component:DirectoryComponent}

];//dodato

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [NavbarComponent,DirectoryComponent]//dodato
