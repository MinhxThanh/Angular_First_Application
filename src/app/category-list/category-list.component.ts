import {Component, OnInit} from '@angular/core';
import {Category} from "../common/category";
import {HttpClient} from "@angular/common/http";
import {CategoryService} from "../category.service";

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit{
  categories: Category[] = []
  constructor(private httpClient : HttpClient, private categoryService : CategoryService) {
  }
  ngOnInit(): void {
    this.getListCategory()
  }

  getListCategory(){
    this.categoryService.getAll().subscribe(data =>{
      this.categories = data as Category[]
    })
  }
}
