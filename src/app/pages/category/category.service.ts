// category.service.ts
import { Injectable } from '@angular/core';

/**
 * Service for managing categories.
 */
@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  /**
   * Array to store the categories.
   */
  private categories: any[] = [];

  /**
   * Adds a new category to the list of categories.
   * @param category The category object to be added.
   */
  addCategory(category: any) {
    this.categories.push(category);
  }

  /**
   * Retrieves the list of all categories.
   * @returns An array containing all categories.
   */
  getCategories() {
    return this.categories;
  }
}
