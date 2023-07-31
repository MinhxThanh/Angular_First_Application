import { Component } from '@angular/core';
import {Product} from "../common/product";
import {NgForm} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {
  product: Product
  constructor(private route: ActivatedRoute) {
    this.product = new Product('', '', 0);
    if (route.snapshot.params['id'])
      this.product = new Product(route.snapshot.params['id'], route.snapshot.params['name'], route.snapshot.params['rating'])
  }

  changeProductDetail(detailForm: NgForm) {
    console.log(detailForm.value)

    this.product.productCode = detailForm.value.productCode
    this.product.productCode = this.product.productCode.toUpperCase()

    this.product.productName = detailForm.value.productName.toUpperCase()
  }
}
