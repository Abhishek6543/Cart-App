import React, { Component } from 'react';
import File from './File';

const Cart = (props) => {
    
       const { products } = props;
       return(
           <div className="cart">
               {products.map((product) => {
                   return <File 
                   product = {product} 
                   key={product.id} 
                   onIncreaseQuantity={props.onIncreaseQuantity} 
                   onDecreaseQuantity={props.onDecreaseQuantity} 
                   onDeleteProduct={props.onDeleteProduct}
                   />
               } 
               
               )}
           </div>
       )
   }
export default Cart