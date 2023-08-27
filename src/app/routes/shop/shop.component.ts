import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {

  items = [
    {
      title: "Shiba Inu 1",
      subtitle: "Dog Breed",
      image: "https://material.angular.io/assets/img/examples/shiba2.jpg",
      alt: "Not found",
      description: "The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan."
    },
    {
      title: "Shiba Inu 2",
      subtitle: "Dog Breed",
      image: "https://material.angular.io/assets/img/examples/shiba2.jpg",
      alt: "Not found",
      description: "The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan."
    },
    {
      title: "Shiba Inu 3",
      subtitle: "Dog Breed",
      image: "https://material.angular.io/assets/img/examples/shiba2.jpg",
      alt: "Not found",
      description: "The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan."
    },
    {
      title: "Shiba Inu 4",
      subtitle: "Dog Breed",
      image: "https://material.angular.io/assets/img/examples/shiba2.jpg",
      alt: "Not found",
      description: "The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan."
    },
    {
      title: "Shiba Inu 1",
      subtitle: "Dog Breed",
      image: "https://material.angular.io/assets/img/examples/shiba2.jpg",
      alt: "Not found",
      description: "The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan."
    },
    {
      title: "Shiba Inu 2",
      subtitle: "Dog Breed",
      image: "https://material.angular.io/assets/img/examples/shiba2.jpg",
      alt: "Not found",
      description: "The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan."
    },
    {
      title: "Shiba Inu 3",
      subtitle: "Dog Breed",
      image: "https://material.angular.io/assets/img/examples/shiba2.jpg",
      alt: "Not found",
      description: "The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan."
    },
    {
      title: "Shiba Inu 4",
      subtitle: "Dog Breed",
      image: "https://material.angular.io/assets/img/examples/shiba2.jpg",
      alt: "Not found",
      description: "The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan."
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
