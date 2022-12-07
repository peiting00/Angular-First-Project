import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../products';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent {

  /** indicates property value (product) pass in from component parent*/
  @Input() product: Product | undefined;
  /** @Output() notify = new EventEmitter<String>*/
  @Output() notification = new EventEmitter<String>;

  onNotify(){
    this.notification.emit();
  }
}
