
import {FC, useReducer, PropsWithChildren, useEffect} from 'react';
import Cookie from 'js-cookie';

import { ICartItem } from '../interfaces/Cart'
import {CartContext, cartReducer } from './';

export interface CartState {
    cart: ICartItem[];
}

const Cart_INITIAL_STATE: CartState = {
    cart: []
}

export const CartProvider: FC<PropsWithChildren> = ({ children }) => {

    const [state, dispatch] = useReducer(cartReducer , Cart_INITIAL_STATE)

    // Effect
    useEffect(() => {
        try {
            const cookieProducts = Cookie.get('cart') ? JSON.parse( Cookie.get('cart')! ): []
            dispatch({ type: '[Cart] - LoadCart from Cookies | storage', payload: cookieProducts });
        } catch (error) {
            dispatch({ type: '[Cart] - LoadCart from Cookies | storage', payload: [] });
        }
    }, []);


    useEffect(() => {
        Cookie.set('cart', JSON.stringify(state.cart))
        sessionStorage.setItem('cart', JSON.stringify(state.cart))
    }, [state.cart])
    



    const addProductToCart = ( item: ICartItem ) => {
        const itemInCart =  state.cart.some( i => i.id === item.id);
        if(!itemInCart ) return dispatch({ type: '[Cart] - Update items in cart', payload: [...state.cart, item]})
        
        const itemInCartButDifferentType = state.cart.some( i => i.id === item.id && i.type === item.type);
        if(!itemInCartButDifferentType ) return dispatch({ type: '[Cart] - Update items in cart', payload: [...state.cart, item]})
        
        // Acumular 
        const updatedItems =  state.cart.map( i => {
            if(i.id !== item.id) return i;
            if(i.type !== item.type) return i;

            //Acumular la cantidad
            i.quantity += item.quantity;
            return i;
        });

        dispatch({ type: '[Cart] - Update items in cart', payload: updatedItems })

        //console.log("🚀 ~ file: CartProvider.tsx:21 ~ addProductToCart ~ item", item)

    }

    return (
        <CartContext.Provider value = {{
            ...state,

            //Methods
            addProductToCart
        }}>
            {children}
        </CartContext.Provider>
    )
}