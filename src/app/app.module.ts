
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { StarComponent } from './star/star.component';
import {RouterModule, Routes} from "@angular/router";
import * as path from "path";
import { DashboardComponent } from './dashboard/dashboard.component';
import {AuthGuard} from "./routes/auth-guard";
import {AdminRoutes} from "./routes/admin.routing";
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { CatygoryAddComponent } from './category-add/catygory-add.component';
import {HttpClientModule} from "@angular/common/http";
import { CategoryListComponent } from './category-list/category-list.component';
import { SharedComponent } from './modules/shared/shared.component';

const routes: Routes = [
  {path: 'product-list', component: ProductListComponent},
  {path: 'product-detail/:id/:name/:rating', component: ProductDetailComponent},
  {path: '', redirectTo: 'product-list', pathMatch: "full"},
  {path: 'login', component: LoginComponent},
  {path: 'product-add', component: ProductAddComponent},
  {path: '**', component: NotFoundComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductDetailComponent,
    StarComponent,
    DashboardComponent,
    NotFoundComponent,
    LoginComponent,
    ProductAddComponent,
    CatygoryAddComponent,
    CategoryListComponent,
    SharedComponent
  ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        AdminRoutes,
        HttpClientModule,
        RouterModule.forRoot(routes)
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
