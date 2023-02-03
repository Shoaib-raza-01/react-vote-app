import React, { useState } from 'react'
import ProductList from './ProductList'
import seed from "../seed/seed";

function Product() {
  
  const [products ,setProducts] = useState(seed)

  const clickHandler = (productId) => {

    // take copy of state into a variable
    let updatedProducts = [...products];
    
    // update the copy of state
    updatedProducts = updatedProducts.map((productObj) => {
      if (productObj.id === productId) {
        return { ...productObj, votes: productObj.votes + 1 }
      } else {
        return productObj;
      }
    })

    setProducts(updatedProducts);
    
    // setCurrVote({
    //   ...currVote,
    //   votes : data.votes + 1
    // })
    // console.log(currVote)

    // seed.find((prod) => {

    //   if (prod.id === productId) {
    //     // currVote = prod.votes 
    //     return setCurrVote({
    //       ...currVote,
    //       votes : prod.votes + 1
    //     })
    //     // return console.log(currVote)
    //   }else{
    //     return console.log(currVote)
    //   }
    // })
  }



  return (
    products.sort((a, b) => {
      return b.votes - a.votes
    }).map((product) => {
      return <ProductList
        key={product.id}
        prodKey={product.key}
        id={product.id}
        title={product.title}
        description={product.description}
        url={product.url}
        vote={product.votes}
        avatar={product.submitterAvatarUrl}
        productImage={product.productImageUrl}
        onVote={clickHandler}
      />
    })
  );
}

export default Product
