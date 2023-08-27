import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { addItem } from 'src/app/state/actions/state.actions';
import { store } from 'src/app/state/reducers/state.reducer';

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
  store$: Observable<store> = new Observable<store>;

  constructor(private store: Store<{ store: store }>) {
    this.store$ = store.select('store');
  }

  ngOnInit(): void {
  }

  increment() {
    this.store.dispatch(addItem({ item: this.item.title }));
  }

}
