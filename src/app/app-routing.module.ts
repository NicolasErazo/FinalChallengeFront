import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddClientComponent } from './add-client/add-client.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AddTransactionComponent } from './add-transaction/add-transaction.component';
import { ClientsComponent } from './clients/clients.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './login/auth.guard';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';
import { ProfileComponent } from './profile/profile.component';
import { TransactionsComponent } from './transactions/transactions.component';

const routes: Routes = [
  {
    path: '', redirectTo: "/login", pathMatch: "full"
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'clients',
    component: ClientsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'creator',
    component: ProfileComponent,
  },
  {
    path: 'addClient',
    component: AddClientComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'clients/:id',
    component: AddClientComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'clients/:id/products',
    component: ProductsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'clients/:id/products/addProduct',
    component: AddProductComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'clients/:id/products/:idProduct',
    component: AddProductComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'clients/:idClient/products/:idProduct/transactions',
    component: TransactionsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'clients/:idClient/products/transactions/:idProduct/add',
    component: AddTransactionComponent,
    canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
