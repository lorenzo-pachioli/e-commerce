import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CartDialogComponent } from 'src/app/feature/cart-dialog/cart-dialog.component';
import { removeItem, resetCart } from 'src/app/state/actions/state.actions';
import { store } from 'src/app/state/reducers/state.reducer';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  store$: Observable<store> = new Observable<store>;
  cartLength = 0;
  constructor(private store: Store<{ store: store }>, public dialog: MatDialog) {
    this.store$ = store.select('store');
  }

  openDialog(): void {
    this.dialog.open(CartDialogComponent, {
      width: '400px'
    });
  }

  ngOnInit(): void {
    this.store$.subscribe(e => {
      console.log(e);

      this.cartLength = 0;
      e.cart.map(item => this.cartLength = this.cartLength + item.quantity);
    });
  }

  remove() {
    this.store.dispatch(removeItem({ id: 3 }));
  }

  reset() {
    this.store.dispatch(resetCart());
  }
}
