import React, { Component } from 'react';

const Navbar = (props) => {   
        return( 
          <div className="nav">
              <div className="cartIconContainer">
                  <img className="cartIcon" src="https://image.flaticon.com/icons/png/128/679/679701.png" alt="cart-icon" />
                  <span className="cartCount">{props.count}</span>
              </div>
              </div>
        )
    }
export default Navbar