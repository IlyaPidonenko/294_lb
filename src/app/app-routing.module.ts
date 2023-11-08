import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "auth/login",
    loadComponent: () => import('./pages/auth/login/login.component').then(v => v.LoginComponent)
  },
  {
    path: "categories",
    loadChildren: () => import("./pages/category/category.module").then(v => v.CategoryModule)
  },
  {
    path: "products",
    loadChildren: () => import("./pages/product/product.module").then(v => v.ProductModule)
  }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


