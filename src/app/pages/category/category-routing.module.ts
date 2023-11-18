// category-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryModifyComponent } from './category-modify/category-modify.component';
import { CategoryDetailComponent } from './category-detail/category-detail.component';

/**
 * Defines the routes for the CategoryModule.
 */
const routes: Routes = [
  {
    path: 'category-list',
    component: CategoryListComponent,
  },
  {
    path: 'category-modify',
    component: CategoryModifyComponent,
  },
  {
    path: 'edit/:id',
    component: CategoryModifyComponent,
  },
  {
    path: ':id',
    component: CategoryDetailComponent,
  },
];

/**
 * NgModule that sets up the routes for the CategoryModule.
 */
@NgModule({
  /**
   * Configures the router module with the defined routes.
   */
  imports: [RouterModule.forChild(routes)],

  /**
   * Exports the configured router module to make the routes available for the CategoryModule.
   */
  exports: [RouterModule],
})
export class CategoryRoutingModule { }
