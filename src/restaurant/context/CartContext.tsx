

import  { createContext } from 'react';

import {ICartItem} from '../interfaces/Cart'


interface ContextProps {
    cart: ICartItem[];

    //Methods
    addProductToCart: (item: ICartItem) => void; 
}

export const CartContext = createContext({} as ContextProps)