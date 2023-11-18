import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

// Importiere deine Komponenten


import { CategoryRoutingModule } from './category-routing.module';
import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryModifyComponent } from './category-modify/category-modify.component';
import { CategoryDetailComponent } from './category-detail/category-detail.component';



@NgModule({
  declarations: [
    CategoryListComponent,
    CategoryModifyComponent,
    CategoryDetailComponent,
    CategoryModifyComponent,

  ],
  imports: [
    CommonModule,
    CategoryRoutingModule,
    ReactiveFormsModule,
  ]
})
export class CategoryModule { }
