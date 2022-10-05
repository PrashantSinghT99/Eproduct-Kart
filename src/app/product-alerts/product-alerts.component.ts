import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../products';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css'],
})
export class ProductAlertsComponent implements OnInit {
  
  //input in child from parent class
  @Input() product!: Product;
  //outputting for notify for product-list component
  @Output() notify = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
}
