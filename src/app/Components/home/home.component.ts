import { Component } from '@angular/core';
import { iProduct } from '../../Models/i-product';
import { ProductsService } from '../../products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
prodotti:iProduct[]=[];
arrFavorites: iProduct[] = [];
favCount:number = 0;

constructor(private productSvc:ProductsService){}

ngOnInit(){
  this.productSvc.getAll().subscribe({
    next:data=> {
      this.prodotti = data
      console.log(this.prodotti)},

      error:err=>console.error(err),

      complete:()=>console.log('complete')
  })
}

}
