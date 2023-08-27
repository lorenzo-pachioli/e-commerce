import { Component, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  loading = true;
  list: Array<any> = [
    {
      name: 'Home',
      icon: 'dashboard',
      link: 'home',
    },
    {
      name: 'Shop',
      icon: 'savings',
      link: 'shop',
    },
    {
      name: 'About-us',
      icon: 'receipt_long',
      link: 'about-us',
    },
    {
      name: 'Contact',
      icon: 'balance',
      link: 'contact',
    }
  ];
  optional = '';

  constructor() { }

  ngOnInit(): void {
  }

}
