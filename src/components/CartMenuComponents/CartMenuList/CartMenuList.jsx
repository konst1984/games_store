import React from 'react';
import {useSelector} from "react-redux";

import CartMenuItem from "../CartMenuItem/CartMenuItem";
import cl from "../CartMenu/CartMenu.module.scss";
import cn from "../CartMenu/CartMenu.module.scss";

const columns = ['name', 'quantity','amount'];

const CartMenuList = () => {

  const allItemsInCart = useSelector(state => state.cart.cartList);
  const renderCartItems = allItemsInCart.map((item) => (
    <CartMenuItem key = {item.id} {...item} classname = {cl.grid} />
  ))

  return (
    <div className = {cn.orders}>
      <div className = {cn.grid}>
        {columns.map(col => <span key={col}>{col}</span>)}
      </div>
      {renderCartItems}
    </div>
  );
};

export default CartMenuList;