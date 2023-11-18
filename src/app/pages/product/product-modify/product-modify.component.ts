// product-modify.component.ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../product.service';

@Component({
  selector: 'pm-product-modify',
  templateUrl: './product-modify.component.html',
  styleUrls: ['./product-modify.component.scss'],
})
export class ProductModifyComponent {
  productForm: FormGroup;

  constructor(private fb: FormBuilder, private productService: ProductService) {
    this.productForm = this.fb.group({
      productName: ['', [Validators.required, Validators.minLength(2)]],
      description: ['', [Validators.maxLength(255)]],
      price: ['', [Validators.required, Validators.min(0)]],
      // Add more fields as needed
    });
  }

  submitProduct() {
    if (this.productForm.valid) {
      const newProduct = this.productForm.value;
      this.productService.addProduct(newProduct);
      this.productForm.reset();
    }
  }
}
