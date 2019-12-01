import React from "react";
import "./CartIcon.scss";
import {connect} from 'react-redux';
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { toggleCartHidden } from "../../redux/actions/cartAction";

const CartIcon = ({ toggleCartHidden }) => {
  return (
    <div className='cart-icon' onClick={toggleCartHidden}>
      <ShoppingIcon className='shopping-icon'/>
      <span className='item-count'>0</span>
    </div>
  );
};

export default connect(null,{toggleCartHidden})(CartIcon);
