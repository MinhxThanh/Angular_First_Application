import { Component } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent {
  productForm: FormGroup

  constructor(private fb: FormBuilder) {
    this.productForm = new FormGroup({
      'name': new FormControl(null, [Validators.required, Validators.minLength(5)]),
      'code': new FormControl('123-123', [Validators.required, Validators.minLength(5)]),
      'listImage': this.fb.array([])
    })
  }

  newImage(): FormGroup{
    return this.fb.group({
      'imageName': '',
      'link': ''
    })
  }

  onSubmit() {
    // if (!this.productForm.valid)
    //   return console.log('Invalid value!')
    console.log(this.productForm.value)
  }

  addImage(){
    this.listImage.push(this.newImage())
    // (<FormArray> this.productForm.get('listImage')).push(new FormControl(null, Validators.required))
  }

  removeImage(i : number){
    this.listImage.removeAt(i)
  }

  get listImage() : FormArray{
    return this.productForm.get('listImage') as FormArray;
  }
}
