import React from 'react';
import {useSelector} from "react-redux";

import {Button} from "../../Buttons/Button";
import { selectTotalPrice} from "store/cart/cartSlice";
import {currency} from "constants/currency";

import cn from './MakingOrder.module.scss'
import usePaymentContext from "../PaymentForm/hooks/usePaymentContext";


const TotalPrice = () => {

  const totalPrice = useSelector(selectTotalPrice);

  return (
    <p className = {cn["total-price"]}>
      <span className = {cn.price}>
           Total price: {totalPrice} {currency}
      </span>
    </p>
  )
}


const MakingOrder = () => {

  const {isShowPaymentForm, setIsShowPaymentForm} = usePaymentContext()

  const length = useSelector(state => state.cart.cartList.length);

  return (

    <>
      {length ?
        <>
          <div className = {cn.wrapper}>
            <TotalPrice />
            <Button classname = "order-button" onClick = {() => setIsShowPaymentForm(!isShowPaymentForm)} ariaLabel='place an order'>place on order</Button>
          </div>
        </> : null
      }
    </>
  );
};

export default MakingOrder;