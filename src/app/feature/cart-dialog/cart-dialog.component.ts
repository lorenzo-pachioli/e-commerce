import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { removeItem, resetCart } from 'src/app/state/actions/state.actions';
import { store } from 'src/app/state/reducers/state.reducer';

@Component({
  selector: 'app-cart-dialog',
  templateUrl: './cart-dialog.component.html',
  styleUrls: ['./cart-dialog.component.scss']
})
export class CartDialogComponent {

  store$: Observable<store> = new Observable<store>;
  @Input() cartList = [];

  constructor(private store: Store<{ store: store }>) {
    this.store$ = store.select('store');
  }

  remove(id: number) {
    this.store.dispatch(removeItem({ id }));
  }
}
