import React from 'react'
import { useCart } from 'react-use-cart'

type Props = {}

function CartTest({}: Props) {

    const {
        isEmpty,
        totalUniqueItems,
        items,
        updateItemQuantity,
        removeItem,
      } = useCart();
    
      console.log(items)

  return (
    <>
        <ul>
            {items.map((item) => {
                return (
                <li key={item.id}>{item.name}</li>
            )})}
        </ul>
    </>
  )
}

export default CartTest