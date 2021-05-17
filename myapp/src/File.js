import React, { Component } from 'react';

const File = (props) => {
        const { price,name,qty }=props.product;
        const { product }=props;
        return(
            <div className="cart-item">          
            <div className="left-block">
                <img className="img" src={product.img}/>
            </div>
            <div className="right-block">
                <div id="c">{name}</div>
                <div id="a">Rs {price} </div>
                <div id="b">Qty: {qty}</div>
            <div className="car-item-actions">
                <img 
                alt="increase" 
                className="action-icons" 
                src="https://image.flaticon.com/icons/png/128/992/992651.png"
                onClick={() => props.onIncreaseQuantity(props.product)} 
                />
                <img 
                alt="decrease" 
                className="action-icons" 
                src="https://image.flaticon.com/icons/png/128/992/992683.png" 
                onClick={() => props.onDecreaseQuantity(props.product)}
                />
                <img 
                alt="delete" 
                className="action-icons" 
                src="https://image.flaticon.com/icons/png/128/3096/3096687.png"
                onClick={() => props.onDeleteProduct(product.id)} 
                />
            </div>
            </div>
            </div>
        )
    }
export default File