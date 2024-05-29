import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { iProduct } from './Models/i-product';
import { Observable, Observer, map } from 'rxjs';
import { iJsonImp } from './Models/i-json-imp';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  apiUrl: string = 'https://dummyjson.com/products'
  prodotti:iProduct[]=[];
  arrFavorites: iProduct[] = []


  constructor(private http:HttpClient) { }

  getAll(): Observable<iProduct[]> {
    return this.http.get<iJsonImp>(this.apiUrl).pipe(
      map((res:iJsonImp)=> res.products)
    )
  }

  //Fav
  addToFav(prod:iProduct) {
    const found = this.arrFavorites.find(f => f.id === prod.id)
    if (!found) {
      this.arrFavorites.push(prod)
    }}

}
