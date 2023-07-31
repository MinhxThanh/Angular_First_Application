import {RouterModule, Routes} from "@angular/router";
import {DashboardComponent} from "../dashboard/dashboard.component";
import {AuthGuard} from "./auth-guard";
import {CatygoryAddComponent} from "../category-add/catygory-add.component";
import {CategoryListComponent} from "../category-list/category-list.component";

const routes: Routes = [
  {path: 'admin', component: DashboardComponent, canActivate: [AuthGuard]},
  {path: 'category', component: CatygoryAddComponent},
  {path: 'category/:id', component: CatygoryAddComponent},
  {path: 'category-list', component: CategoryListComponent},
]

export const AdminRoutes = RouterModule.forChild(routes)
