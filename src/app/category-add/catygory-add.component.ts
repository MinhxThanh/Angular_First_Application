import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Category} from "../common/category";
import {ActivatedRoute} from "@angular/router";
import {CategoryService} from "../category.service";

@Component({
  selector: 'app-catygory-add',
  templateUrl: './catygory-add.component.html',
  styleUrls: ['./catygory-add.component.css']
})
export class CatygoryAddComponent implements OnInit{
  category: Category
  id!: string
  constructor(private htpClient: HttpClient, private route: ActivatedRoute, private categoryService : CategoryService) {
    this.category = new Category(0,'')
    if (route.snapshot.params['id'])
      this.id = route.snapshot.params['id']
  }

  ngOnInit(): void {
    if (this.id != null)
      this.getCategoryById()
  }

  save(){
    this.categoryService.save(this.category).subscribe(data =>{
      console.log(data)
      console.log('save success!')
    })
  }

  update(){
    this.categoryService.update(this.id, this.category).subscribe(data =>{
      console.log("Update Success!")
      console.log(data)
    })
  }

  // Function to delete a category
  delete() {
    // Call the delete method in the categoryService and subscribe to the response
    this.categoryService.delete(this.id).subscribe(data => {
      // Create a new instance of Category with default values
      this.category = new Category(0, '');
      // Log a success message to the console
      console.log("Delete successful!");
    });
}

  getCategoryById(){
    this.categoryService.getById(this.id).subscribe(data =>{
      this.category = data as Category
    })
  }

}
