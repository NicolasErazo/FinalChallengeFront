import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddClientComponent } from './add-client/add-client.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ClientsComponent } from './clients/clients.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
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
  },
  {
    path:'addClient',
    component:AddClientComponent
  },
  {
    path:'clients/:id',
    component:AddClientComponent
  },
  {
    path:'clients/:id/products',
    component:ProductsComponent
  },
  {
    path:'clients/:id/products/addProduct',
    component:AddProductComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
