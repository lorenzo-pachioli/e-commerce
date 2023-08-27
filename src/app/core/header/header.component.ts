import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { removeItem, resetCart } from 'src/app/state/actions/state.actions';
import { store } from 'src/app/state/reducers/state.reducer';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  store$: Observable<store> = new Observable<store>;
  constructor(private store: Store<{ store: store }>) {
    this.store$ = store.select('store');
  }

  ngOnInit(): void {
  }

  remove() {
    this.store.dispatch(removeItem({ item: 'Shiba Inu 3' }));
  }

  reset() {
    this.store.dispatch(resetCart());
  }
}
