import { Component } from '@angular/core';
import {Product} from "../common/product";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent{
  filterValue:string = ''

  products: Product[] = [
    new Product('P09', 'Cat', 3.5),
    new Product('P010', 'Dog', 4.5),
    new Product('P12', 'Tiger', 4.3),
    new Product('P15', 'Laptop', 4),
    new Product('P16', 'Bee', 3)
  ]

  filter(){
    var list: Product[] = [
      new Product('P09', 'Cat', 3.5),
      new Product('P010', 'Dog', 4.5),
      new Product('P12', 'Tiger', 4.3),
      new Product('P15', 'Laptop', 4),
      new Product('P16', 'Bee', 3)
    ]
    this.products =  list.filter(item => item.productName.includes(this.filterValue))
  }

  changeStarRating($event: string) {
    console.log(`Message Rating: ${$event}`)
  }
}
