import { Component } from '@angular/core';

    @Component({
      selector: 'app-credit-card-form',
      templateUrl: './credit-card-form.component.html',
      styleUrls: ['./credit-card-form.component.css']
    })
    export class CreditCardFormComponent {
      cardNumber = '';
      expiryDate = '';
      cvv = '';

      submitForm() {
        localStorage.setItem('cardNumber', this.cardNumber);
        localStorage.setItem('expiryDate', this.expiryDate);
        localStorage.setItem('cvv', this.cvv);
        console.log('Credit Card Form Submitted:', this.cardNumber, this.expiryDate, this.cvv);
      }
    }
