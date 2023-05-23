import React from 'react'
import { useCart } from 'react-use-cart'

type Product = {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

type Props = {}

function Landing({}: Props) {

  const { addItem } = useCart();

  const products = [
    {
      id: "1",
      name: "Malm",
      price: 9900,
      quantity: 1
    },
    {
      id: "2",
      name: "Nordli",
      price: 16500,
      quantity: 5
    },
    {
      id: "3",
      name: "Kullen",
      price: 4500,
      quantity: 1
    },
  ];

  return (
    <div>
      <h5>Products:</h5>
      <ul>
        {products.map((product) => {
          return (
              <li key={product.id}>{product.name} <button onClick={() => addItem(product)}>addItem</button></li>
          )
        })}
      </ul>
    </div>
  )
}

export default Landing