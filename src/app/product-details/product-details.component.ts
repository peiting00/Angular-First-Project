import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product, products } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  product: Product | undefined;

  /** Inject ActivatedRoute
    specific to each component that loads, contain information about the route and parameter
   */
  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}

  addToCart(product: Product) {
    this.cartService.add(product);
    window.alert(
      'Your product ' + product.name + ' has been added to the cart!'
    );
  }

  ngOnInit() {
    //current product id
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));

    //search correspond product
    this.product = products.find(
      (product) => product.id === productIdFromRoute
    );
  }
}
