import { NgModule } from '@angular/core';
    import { BrowserModule } from '@angular/platform-browser';
    import { FormsModule, ReactiveFormsModule } from '@angular/forms';

    import { AppComponent } from './app.component';
    import { ProductSelectionComponent } from './product-selection/product-selection.component';
    import { CreditCardFormComponent } from './credit-card-form/credit-card-form.component';
    import { ReviewOrderComponent } from './review-order/review-order.component';
    import { ConfirmationComponent } from './confirmation/confirmation.component';

    @NgModule({
      declarations: [
        AppComponent,
        ProductSelectionComponent,
        CreditCardFormComponent,
        ReviewOrderComponent,
        ConfirmationComponent
      ],
      imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule
      ],
      providers: [],
      bootstrap: [AppComponent]
    })
    export class AppModule { }
