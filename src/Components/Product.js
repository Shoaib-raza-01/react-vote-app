import React, { useState } from 'react'
import ProductList from './ProductList'
import seed from"../seed/seed";

function Product() {

  const clickHandler = (prodectId) => {
    console.log(prodectId + " was fired " + seed[prodectId].votes);
    // prodectId.votes
  }
  
  // const [currVote , setCurrVote] = useState([])

  return (
      seed.sort((a, b) => {
          return b.votes - a.votes
      }).map((product) => {
         return <ProductList
          id ={product.id}
          title = {product.title}
          description ={product.description}
          url = {product.url}
          vote = {product.votes}
          avatar = {product.submitterAvatarUrl}
          productImage = {product.productImageUrl}
          onVote = {clickHandler}
        />
    })
  );
}

export default Product
