import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import Swal from 'sweetalert2';

import { Products } from './products';
import { ProductsService } from './products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  products: Products[];

  constructor(
    private productService: ProductsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
      this.route.paramMap.subscribe((params: ParamMap) => {
        this.productService
          .getAllProductsByClient(Number(params.get('id')))
          .subscribe((c) => (this.products = c)
          );
      });
  }

  alert(): void{
    Swal.fire('Transaction Made!', 'Successful request!', 'success');
  }

}


/* if(true){
  console.log(this.products);
  
} */