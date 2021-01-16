import React from 'react';

const BoxAllProducts = (data) => {
 data = pushData;
  return (
  
    productList.id.map((item,index) => (
      <div className={`box-product ${eval(data+"classProduct")}`}>
           <img className="product-item-img" src="img/stul2.png" alt="альтернативный текст"></img>
              <span className="product-description-text"> {eval(data+"product")} </span>
              <span className="product-price"> {eval(data+"price")+ " р"} </span>
              <button className={"buy-item" + " " + `${eval(data+"id")}`} height="50px" width="170px">
                <span className="buy">
                  Купить
                </span>
              </button>
            </div>
      ))
    );
  };

export default BoxAllProducts;

