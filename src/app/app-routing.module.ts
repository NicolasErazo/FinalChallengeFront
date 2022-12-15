import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientsComponent } from './clients/clients.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'clients',
    component:ClientsComponent
  },
  {
    path:'creator',
    component:ProfileComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
