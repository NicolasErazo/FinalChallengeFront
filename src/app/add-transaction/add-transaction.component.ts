import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Login } from '../login/login';
import { LoginService } from '../login/login.service';
import { Products } from '../products/products';
import { ProductsService } from '../products/products.service';
import { Transactions } from '../transactions/transactions';
import { TransactionsService } from '../transactions/transactions.service';

@Component({
  selector: 'app-add-transaction',
  templateUrl: './add-transaction.component.html',
  styleUrls: ['./add-transaction.component.css'],
})
export class AddTransactionComponent implements OnInit {
  product: Products = new Products();

  transaction: Transactions = new Transactions();

  products: Products[];
  users: Login[];
  idProduct: any;

  constructor(
    private transactionService: TransactionsService,
    private productService: ProductsService,
    private router: Router,
    private route: ActivatedRoute,
    private userService: LoginService
  ) { }

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe((c) => (this.products = c));
    this.userService.getUsers().subscribe((c) => (this.users = c));

    //Account number validation
    this.route.paramMap.subscribe((params: ParamMap) => {this.idProduct = params.get('idProduct')});
    console.log(this.idProduct);
  }

  createTransaction(): void {
    if (this.transaction.typeOfTransaction == 'withdrawal' && this.transaction.userCreator != null) {
      this.transaction.typeOfMovement = 'credit';
      this.route.paramMap.subscribe((params: ParamMap) => {
        this.transactionService
          .createTransaction(this.transaction, Number(params.get('idProduct')))
          .subscribe(
            (res) => {
              this.router.navigate([
                'clients' + '/' + Number(params.get('idClient')) + '/products',
              ]),
                Swal.fire('Transaction Made!','Successful request!','success');
            },
            (err) => {
              // Entra aquí si el servicio entrega un código http de error EJ: 404,

              if (err.status == 500) {
                Swal.fire('¡Incorrect Information!','Fill all the fields','error');
              }

              if (err.status == 406) {
                Swal.fire('Transaction not allowed!', 'Ok?', 'error');
              }

              if (err.status == 403) {
                Swal.fire('¡Incorrect Information!', 'Fill all the fields', 'error');
              }
            }
          );
      });
    } else if (this.transaction.typeOfTransaction == 'consignment' && this.transaction.userCreator != null) {
      this.transaction.typeOfMovement = 'debit';
      this.route.paramMap.subscribe((params: ParamMap) => {
        this.transactionService
          .createTransaction(this.transaction, Number(params.get('idProduct')))
          .subscribe(
            (res) => {
              this.router.navigate([
                'clients' + '/' + Number(params.get('idClient')) + '/products',
              ]),
                Swal.fire('Transaction Made!','Successful request!','success');
            },
            (err) => {
              // Entra aquí si el servicio entrega un código http de error EJ: 404,

              if (err.status == 500) {
                Swal.fire('¡Incorrect Information!','Fill all the fields','error');
              }

              if (err.status == 400) {
                Swal.fire('Select a valid value!', 'Ok?', 'error');
              }

              if (err.status == 406) {
                Swal.fire('Transaction not allowed!', 'Ok?', 'error');
              }

              if (err.status == 403) {
                Swal.fire('¡Incorrect Information!', 'Fill all the fields', 'error');
              }
            }
          );
      });
    } else if (this.transaction.typeOfTransaction == 'transfer' && this.transaction.userCreator != null) {
      this.transaction.typeOfMovement = 'credit';
      this.route.paramMap.subscribe((params: ParamMap) => {
        this.transactionService
          .createTransaction(this.transaction, Number(params.get('idProduct')))
          .subscribe(
            (res) => {
              this.router.navigate(['clients' + '/' + Number(params.get('idClient')) + '/products',
              ]),
              (this.transaction.typeOfMovement = 'debit');
              this.route.paramMap.subscribe((params: ParamMap) => {
                this.transactionService
                  .createTransaction(this.transaction, this.product.id)
                  .subscribe((res) => {
                    this.router.navigate(['clients' +'/' +Number(params.get('idClient')) +'/products',]),
                      Swal.fire('Transaction Made!','Successful request!','success');
                  });
              });
            },
            (err) => {
              // Entra aquí si el servicio entrega un código http de error EJ: 404,

              if (err.status == 500) {
                Swal.fire('¡Incorrect Information!','Fill all the fields','error');
              }

              if (err.status == 406) {
                Swal.fire('Transaction not allowed!', 'Ok?', 'error');
              }

              if (err.status == 403) {
                Swal.fire('¡Incorrect Information!', 'Fill all the fields', 'error');
              }

            }
          );
      });
    } else if (this.transaction.typeOfTransaction == null) {
      this.route.paramMap.subscribe((params: ParamMap) => {
        this.transactionService
          .createTransaction(this.transaction, Number(params.get('idProduct')))
          .subscribe(
            (res) => { },
            (err) => {
              // Entra aquí si el servicio entrega un código http de error EJ: 404,

              if (err.status == 403) {
                Swal.fire('¡Incorrect Information!','Fill all the fields','error');
              }

            }
          );
      });
    } else {
      Swal.fire('¡Incorrect Information!', 'Fill all the fields', 'error');
    }
  }
}
