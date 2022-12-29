import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import Swal from 'sweetalert2';
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

  constructor(
    private transactionService: TransactionsService,
    private productService: ProductsService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.productService
        .getAllProductsByClient(Number(params.get('idClient')))
        .subscribe((res) => {
          this.products = res;
        });
    });
  }

  createTransaction(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.transactionService
        .createTransaction(this.transaction, Number(params.get('idProduct')))
        .subscribe(
          (res) => {
            this.router.navigate([
              'clients' + '/' + Number(params.get('idClient')) + '/products',
            ]),
              Swal.fire('Transaction Made!', 'Successful request!', 'success');
          },
          (err) => {
            // Entra aquí si el servicio entrega un código http de error EJ: 404,

            if (err.status == 500) {
              Swal.fire(
                '¡Incorrect Information!',
                'Fill all the fields',
                'error'
              );
            }

            if (err.status == 400) {
              Swal.fire('Select a valid value!', 'Ok?', 'error');
            }

            if (err.status == 406) {
              Swal.fire('Transactions are not allowed on a canceled product!', 'Ok?', 'error');
            }
          }
        );
      console.log(params.get('idClient'));
    });
  }


}
