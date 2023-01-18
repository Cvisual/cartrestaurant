import React from 'react'
import { useEffect } from 'react';
import { CartProvider } from '../context/CartProvider';

const withCart = (Component: any) => {
  const WrappedComponent = () => {
    // useEffect(()=> {
    //   console.log("desde with cart")
    // })
    
    return (    
      <CartProvider>
        <Component />   
      </CartProvider> 
    )
  }

  return WrappedComponent
  
}

export default withCart;