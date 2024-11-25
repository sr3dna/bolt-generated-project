import { Component } from '@angular/core';

    @Component({
      selector: 'app-review-order',
      templateUrl: './review-order.component.html',
      styleUrls: ['./review-order.component.css']
    })
    export class ReviewOrderComponent {
      selectedProduct: any;
      cardNumber = '';
      expiryDate = '';
      cvv = '';

      constructor() {
        this.selectedProduct = JSON.parse(localStorage.getItem('selectedProduct') || '{}');
        this.cardNumber = localStorage.getItem('cardNumber') || '';
        this.expiryDate = localStorage.getItem('expiryDate') || '';
        this.cvv = localStorage.getItem('cvv') || '';
      }

      submitForm() {
        console.log('Order Submitted:', this.selectedProduct, this.cardNumber, this.expiryDate, this.cvv);
      }
    }
