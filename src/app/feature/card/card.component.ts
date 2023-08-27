import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() item = {
    title: "",
    subtitle: "",
    image: "",
    alt: "Not found",
    description: ""
  }

  constructor() { }

  ngOnInit(): void {
  }

}
