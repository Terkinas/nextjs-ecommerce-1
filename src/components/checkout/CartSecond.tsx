import React from 'react'
import { useCart } from 'react-use-cart'

type Props = {}

const CartSecond = (props: Props) => {

    const {
        isEmpty,
        totalUniqueItems,
        items,
        updateItemQuantity,
        removeItem,
      } = useCart();

  return (
    <div>
        <h5>CartSecond:</h5>
        <ul>
            {items.map((item) => {
                return (
                    <li key={item.id}>{item.name}</li>
                )
            })}
        </ul>
    </div>
  )
}

export default CartSecond