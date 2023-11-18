// product-modify.component.ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../product.service';

/**
 * Component for modifying and adding new products.
 */
@Component({
  selector: 'pm-product-modify',
  templateUrl: './product-modify.component.html',
  styleUrls: ['./product-modify.component.scss'],
})
export class ProductModifyComponent {
  /**
   * Form group for the product modification form.
   */
  productForm: FormGroup;

  /**
   * Constructs the ProductModifyComponent.
   * @param fb FormBuilder for creating the productForm.
   * @param productService Service for managing product data.
   */
  constructor(private fb: FormBuilder, private productService: ProductService) {
    // Initialize the productForm with form controls and validators.
    this.productForm = this.fb.group({
      productName: ['', [Validators.required, Validators.minLength(2)]],
      description: ['', [Validators.maxLength(255)]],
      price: ['', [Validators.required, Validators.min(0)]],
      // Add more fields as needed
    });
  }

  /**
   * Handles the submission of the product modification form.
   * If the form is valid, adds the new product to the productService and resets the form.
   */
  submitProduct() {
    if (this.productForm.valid) {
      // Get the values from the form.
      const newProduct = this.productForm.value;

      // Add the new product to the productService.
      this.productService.addProduct(newProduct);

      // Reset the form for further entries.
      this.productForm.reset();
    }
  }
}
