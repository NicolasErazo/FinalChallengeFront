import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddClientComponent } from './add-client/add-client.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AddTransactionComponent } from './add-transaction/add-transaction.component';
import { ClientsComponent } from './clients/clients.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ProfileComponent } from './profile/profile.component';
import { TransactionsComponent } from './transactions/transactions.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'clients',
    component: ClientsComponent,
  },
  {
    path: 'creator',
    component: ProfileComponent,
  },
  {
    path: 'addClient',
    component: AddClientComponent,
  },
  {
    path: 'clients/:id',
    component: AddClientComponent,
  },
  {
    path: 'clients/:id/products',
    component: ProductsComponent,
  },
  {
    path: 'clients/:id/products/addProduct',
    component: AddProductComponent,
  },
  {
    path: 'clients/:id/products/:idProduct',
    component: AddProductComponent,
  },
  {
    path: 'clients/:idClient/products/:idProduct/transactions',
    component: TransactionsComponent,
  },
  {
    path: 'clients/:idClient/products/transactions/:idProduct/add',
    component: AddTransactionComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
