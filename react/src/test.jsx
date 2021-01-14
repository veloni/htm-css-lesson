import React from 'react';

const BoxAllProducts = (data) => {

  return (
    
    productList.id.map((item,index) => (
      <div className={"box-product" + " " + `${productList.id[index].classProduct}`}>
           <img className="product-item-img" src="img/stul2.png" alt="альтернативный текст"></img>
              <span className="product-description-text"> {productList.id[index].product} </span>
              <span className="product-price"> {productList.id[index].price + " р"} </span>
              <button className={"buy-item" + " " + `${productList.id[index].id}`} height="50px" width="170px">
                <span className="buy">
                  Купить
                </span>
              </button>
            </div>
      ))
    );
  };


export default BoxAllProducts;