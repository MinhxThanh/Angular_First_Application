export class Product {
  productCode: string;
  productName: string;
  starRating: number
  constructor(productCode: string, productName: string, starRating: number) {
    this.productCode = productCode;
    this.productName = productName
    this.starRating = starRating
  }
}
