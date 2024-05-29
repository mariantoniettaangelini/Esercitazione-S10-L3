import { Component, OnInit } from '@angular/core';
import { iProduct } from '../../Models/i-product';
import { ProductsService } from '../../products.service';


@Component({
  selector: 'app-fav-product',
  templateUrl: './fav-product.component.html',
  styleUrl: './fav-product.component.scss'
})
export class FavProductComponent implements OnInit {
  favs!: iProduct[]

  constructor(public productSvc:ProductsService){}
  ngOnInit(): void {
    this.productSvc.arrFavorites.subscribe((favs:iProduct[])=> {
      this.favs = favs;
    })
    }

}
