import { CartState } from './';
import {ICartItem} from '../interfaces/Cart';

type CartActionType = 
    | { type: '[Cart] - LoadCart from Cookies | storage', payload: ICartItem[] }
    | { type: '[Cart] - Update items in cart', payload: ICartItem[] }


export const cartReducer = ( state: CartState, action: CartActionType): CartState => {

    switch (action.type) {
        case '[Cart] - LoadCart from Cookies | storage':
            return {
                ...state,
                cart: [...action.payload]
            }

        case '[Cart] - Update items in cart':
            return {
                ...state,
                cart: [ ...action.payload ]
            }

        default: 
            return state
    }

}