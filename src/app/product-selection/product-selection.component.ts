import { Component } from '@angular/core';

    @Component({
      selector: 'app-product-selection',
      templateUrl: './product-selection.component.html',
      styleUrls: ['./product-selection.component.css']
    })
    export class ProductSelectionComponent {
      products = [
        { name: 'Product 1', price: 10 },
        { name: 'Product 2', price: 20 }
      ];
      selectedProduct: any;

      selectProduct(product: any) {
        this.selectedProduct = product;
      }
    }
