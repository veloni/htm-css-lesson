import React, { useEffect, useState} from 'react';

const BoxAllProducts = () => {

  return (
    

    productList.id.map((item,index) => (
      <div className={"box-product" + " " + `${productList.id[index].classProduct}` + " " + `${productList.id[index].id}`}>
           <img className="product-item-img" src="img/stul2.png" alt="альтернативный текст"></img>
              <span className="product-description-text"> {productList.id[index].product} </span>
              <span className="product-price"> {productList.id[index].price} </span>
              <button className="buy-item" height="50px" width="170px">
                <span className="buy">
                  Купить
                </span>
              </button>
            </div>
            ))


    );
  };


export default BoxAllProducts;