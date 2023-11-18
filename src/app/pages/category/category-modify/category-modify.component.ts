// category-modify.component.ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategoryService } from '../category.service';

/**
 * Component for modifying and adding new categories.
 */
@Component({
    selector: 'pm-category-modify',
    templateUrl: './category-modify.component.html',
    styleUrls: ['./category-modify.component.scss'],
})
export class CategoryModifyComponent {
    /**
     * Form group for the category modification form.
     */
    categoryForm: FormGroup;

    /**
     * Success message to be displayed when a category is created successfully.
     */
    successMessage: string = '';

    /**
     * Constructs the CategoryModifyComponent.
     * @param fb FormBuilder for creating the categoryForm.
     * @param categoryService Service for managing category data.
     */
    constructor(private fb: FormBuilder, private categoryService: CategoryService) {
        // Initialize the categoryForm with form controls and validators.
        this.categoryForm = this.fb.group({
            categoryName: ['', [Validators.required, Validators.minLength(2)]],
            description: ['', [Validators.maxLength(255)]],
            // Add more fields as needed
        });
    }

    /**
     * Handles the submission of the category modification form.
     * If the form is valid, adds the new category to the categoryService,
     * displays a success message, and resets the form.
     */
    submitCategory() {
        if (this.categoryForm.valid) {
            // Get the values from the form.
            const newCategory = this.categoryForm.value;

            // Add the new category to the categoryService.
            this.categoryService.addCategory(newCategory);

            // Display success message.
            this.successMessage = 'Category created successfully!';

            // Reset the form for further entries.
            this.categoryForm.reset();
        }
    }
}
