// category.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

// Import your components
import { CategoryRoutingModule } from './category-routing.module';
import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryModifyComponent } from './category-modify/category-modify.component';
import { CategoryDetailComponent } from './category-detail/category-detail.component';

/**
 * NgModule that declares and configures the components related to category management.
 * This module encapsulates functionality related to categories.
 */
@NgModule({
  /**
   * Declarations of all components belonging to the CategoryModule.
   */
  declarations: [
    CategoryListComponent,
    CategoryModifyComponent,
    CategoryDetailComponent,
    CategoryModifyComponent, // Note: This line seems redundant, check if it's intentional
  ],

  /**
   * Imports necessary modules for the CategoryModule.
   */
  imports: [
    CommonModule,
    CategoryRoutingModule,
    ReactiveFormsModule,
  ],
})
export class CategoryModule { }
