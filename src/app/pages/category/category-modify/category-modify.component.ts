import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategoryService } from '../category.service';

@Component({
    selector: 'pm-category-modify',
    templateUrl: './category-modify.component.html',
    styleUrls: ['./category-modify.component.scss'],
})
export class CategoryModifyComponent {
    categoryForm: FormGroup;
    successMessage: string = '';

    constructor(private fb: FormBuilder, private categoryService: CategoryService) {
        this.categoryForm = this.fb.group({
            categoryName: ['', [Validators.required, Validators.minLength(2)]],
            description: ['', [Validators.maxLength(255)]],
            // Add more fields as needed
        });
    }

    submitCategory() {
        if (this.categoryForm.valid) {
            const newCategory = this.categoryForm.value;
            this.categoryService.addCategory(newCategory);
            this.successMessage = 'Category created successfully!';
            // Weitere Logik oder Rücksetzen des Formulars hier, wenn nötig
            this.categoryForm.reset();
        }
    }
}
