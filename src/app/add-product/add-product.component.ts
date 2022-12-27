import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Clients } from '../clients/clients';
import { Products } from '../products/products';
import { ProductsService } from '../products/products.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit{
  product:Products = new Products();
  client:Clients = new Clients();
  activatedRoute: any;

  constructor(private productService: ProductsService, private router:Router,private route: ActivatedRoute ){}
  
  ngOnInit(): void {
    this.data();
  }

  createProduct():void{
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.productService.createProduct(this.product, Number(params.get('id'))).subscribe(
        res=>{this.router.navigate(['clients'+'/'+Number(params.get('id'))+'/products']),
        Swal.fire('Product Created!', 'Successful request!', 'success');},
      (err) => {
        // Entra aquí si el servicio entrega un código http de error EJ: 404,

        if (err.status == 500) {
          Swal.fire('¡Incorrect Information!', 'Fill all the fields', 'error');
        }

        if (err.status == 400) {
          Swal.fire('Select a valid value!', 'Ok?', 'error');
        }
      }
    );
    console.log(params.get('id'))
      });
  }

  data(): void {
    this.route.params.subscribe((e: any) => {
      let idClient = e['id'];
      let idProduct = e['idProduct'];
      if (idProduct) {
        this.productService
          .getProductOfClientById(idClient,idProduct)
          .subscribe((r) => (this.product = r));
      }
    });
  }
  
  update():void{
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.productService.updateProduct(this.product, Number(params.get('id'))).subscribe(
        res=>{this.router.navigate(['clients'+'/'+Number(params.get('id'))+'/products']),
        Swal.fire('Product Updated!', 'Successful request!', 'success');},
        (err) => {
          // Entra aquí si el servicio entrega un código http de error EJ: 404,
          
          if (err.status == 400) {
            Swal.fire('Select a valid value!', 'Ok?', 'error');
          }
        }
    );
    console.log(params.get('idProduct'))
      });
  }
}
