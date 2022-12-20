import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Transactions } from './transactions';
import { TransactionsService } from './transactions.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit{
  transactions:Transactions[];

  constructor(private transactionService: TransactionsService, private route: ActivatedRoute){}

  ngOnInit(): void {    
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.transactionService.getAllTransactionsByProduct(Number(params.get('idTransaction'))).subscribe(
        d => this.transactions = d
      );
    });
  }
}
