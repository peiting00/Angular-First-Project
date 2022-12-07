import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  items = this.cartService.getItems();
  total = this.cartService.getTotal();

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder,
  ) {}

  /** group() to set multiple property in building up a form */
  checkoutForm = this.formBuilder.group({
    name:'',
    address:''
  });

  onSubmit():void{
    //process checkout data
    this.items = this.cartService.clear();
    console.warn('Your order has been submitted',this.checkoutForm.value);
    this.checkoutForm.reset();
  }
}
