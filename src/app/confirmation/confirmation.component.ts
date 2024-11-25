import { Component } from '@angular/core';

    @Component({
      selector: 'app-confirmation',
      templateUrl: './confirmation.component.html',
      styleUrls: ['./confirmation.component.css']
    })
    export class ConfirmationComponent {
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
        console.log('Order Confirmed:', this.selectedProduct, this.cardNumber, this.expiryDate, this.cvv);
      }
    }
