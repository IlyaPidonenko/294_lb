import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private categories: any[] = [];

  addCategory(category: any) {
    this.categories.push(category);
  }

  getCategories() {
    return this.categories;
  }
}
