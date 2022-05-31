import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css'],
})
export class CatalogueComponent implements OnInit {
  products = [
    {
      icon: 'fa fa-taxi',
      title: 'Taxi',
      price: 100,
    },
    {
      icon: 'fa fa-fighter-jet',
      title: 'Jet',
      price: 200,
    },
    {
      icon: 'fa fa-wrench',
      title: 'Wrench',
      price: 300,
    },
    {
      icon: 'fa fa-television',
      title: 'TV',
      price: 400,
    },
    {
      icon: 'fa fa-tree',
      title: 'Tree',
      price: 500,
    },
    {
      icon: 'fa fa-taxi',
      title: 'Mastercard',
      price: 600,
    },
    {
      icon: 'fa fa-cc-mastercard',
      title: 'Mastercard',
      price: 700,
    },
    {
      icon: 'fa fa-headphones',
      title: 'Headphoes',
      price: 800,
    },
  ];

  title = 'x';

  constructor() {}

  ngOnInit() {}
}
