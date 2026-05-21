import { Component } from '@angular/core';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.css']
})
export class ProductInfoComponent {

  productName: string = 'Laptop';
  productPrice: number = 55000;

  productImage: string =
    'https://images.unsplash.com/photo-1496181133206-80ce9b88a853';

  review: string = '';

  addToCart(product: string) {
    alert(product + ' added to cart!');
  }
}