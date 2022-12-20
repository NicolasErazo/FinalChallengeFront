import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Transactions } from '../transactions/transactions';
import { TransactionsService } from '../transactions/transactions.service';

@Component({
  selector: 'app-add-transaction',
  templateUrl: './add-transaction.component.html',
  styleUrls: ['./add-transaction.component.css']
})
export class AddTransactionComponent {

  transaction:Transactions = new Transactions();

  constructor(private transactionService: TransactionsService, private router:Router,private route: ActivatedRoute ){}

  createProduct():void{
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.transactionService.createProduct(this.transaction, Number(params.get('idProduct'))).subscribe(
        res=>this.router.navigate(['clients'+'/'+Number(params.get('idClient'))+'/products'])
    );
    console.log(params.get('idClient'))
      });
  }
}
