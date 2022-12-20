import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Clients } from '../clients/clients';
import { Products } from '../products/products';
import { ProductsService } from '../products/products.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  product:Products = new Products();
  client:Clients = new Clients();

  constructor(private productService: ProductsService, private router:Router,private route: ActivatedRoute ){}

  createProduct():void{
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.productService.createProduct(this.product, Number(params.get('id'))).subscribe(
        res=>this.router.navigate(['clients'+'/'+Number(params.get('id'))+'/products'])
    );
    console.log(params.get('id'))
      });
  }

}
