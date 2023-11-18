// product-routing.module.ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductModifyComponent } from './product-modify/product-modify.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

const routes: Routes = [
  {
    path: 'product-list',
    component: ProductListComponent,
  },
  {
    path: 'product-modify',
    component: ProductModifyComponent,
  },
  {
    path: 'edit/:id',
    component: ProductModifyComponent,
  },
  {
    path: ':id',
    component: ProductDetailComponent,
  },
];

/**
 * The module to handle routing for the product-related components.
 */
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductRoutingModule {}
