import { Component, OnInit} from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './store/models/app-state.model';
import { Observable } from 'rxjs';
import { ShoppingItem } from './store/models/shopping-item.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // title = 'ngrx-shopping-list';
  shoppingItems$: Observable<Array<ShoppingItem>>;

  constructor(private store: Store<AppState>) { }

  ngOnInit(){
    this.shoppingItems$  = this.store.select(store => store.shopping);
    console.log("data:",this.shoppingItems$);
  }
}
