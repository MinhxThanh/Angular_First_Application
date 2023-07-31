import { Injectable } from '@angular/core';
import {Category} from "./common/category";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  url = 'http://localhost:3000/categories'
  constructor(private httpClient : HttpClient) {
  }

  getAll(){
    return this.httpClient.get(this.url)
  }

  getById(id: string){
    return this.httpClient.get(this.url + '/' + id)
  }

  save(category: Category){
    return this.httpClient.post(this.url, category)
  }

  update(id: string, category : Category){
    return this.httpClient.put(this.url + '/' + id, category)
  }

  delete(id: string){
    return this.httpClient.delete(this.url + '/' + id)
  }
}
