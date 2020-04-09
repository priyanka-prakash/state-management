// import { ShoppingActionTypes, ShoppingAction } from '../actions/shopping.actions';
import { ShoppingItem } from '../models/shopping-item.model';
import { shoppingAction, ShoppingActionTypes } from '../actions/shopping.actions';

const initialState: Array<ShoppingItem> = [
  {
    id: "1775935f-36fd-467e-a667-09f95b917f6d",
    name: 'Fanta',
  },
  {
    id: "1775935f-36fd-467e-a667-19f95b917f6d",
    name: 'Coke',
  }
];

export function ShoppingReducer (
  state: Array <ShoppingItem> = initialState, 
  action:shoppingAction, ){
        switch (action.type ){
            case ShoppingActionTypes.ADD_ITEM:
                return [...state, action.payload];//previousstate and payload
            case ShoppingActionTypes.DELETE_ITEM:
              return state.filter(item => item.id !== action.payload);
            default: 
                return state; 
        }

}