import { Component } from '@angular/core';
import { productCategories } from '../productCategories';

@Component({
  selector: 'app-category',
  templateUrl: './product-category.component.html',
  styleUrl: './product-category.component.css'
})
export class ProductCategoryComponent {
  productCategories = [...productCategories];
}
