// app-routing.module.ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Define the routes for different components and lazy-loaded modules
const routes: Routes = [
  {
    path: "auth/login",
    // Lazy load the LoginComponent when the route is activated
    loadChildren: () => import('./pages/auth/login/login.component').then(v => v.LoginComponent)
  },
  {
    path: "auth/register",
    // Lazy load the RegisterComponent when the route is activated
    loadChildren: () => import('./pages/auth/register/register.component').then(v => v.RegisterComponent)
  },
  {
    path: "categories",
    // Lazy load the CategoryModule when the route is activated
    loadChildren: () => import("./pages/category/category.module").then(v => v.CategoryModule)
  },
  {
    path: "products",
    // Lazy load the ProductModule when the route is activated
    loadChildren: () => import("./pages/product/product.module").then(v => v.ProductModule)
  }
];

@NgModule({
  // Configure the RouterModule with the defined routes
  imports: [RouterModule.forRoot(routes)],
  // Export the configured RouterModule to be used in the main AppModule
  exports: [RouterModule]
})
export class AppRoutingModule { }
