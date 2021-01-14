import React , { useEffect, useState }  from 'react';

const BoxAllProductsTwo = () => {

  return (
    
    productList.id.map((item,index) => (
      <div className={"box-product" + " " + `${testData[index]["classProduct"]}`}>
           <img className="product-item-img" src="img/stul2.png" alt="альтернативный текст"></img>
              <span className="product-description-text"> {testData[index]["product"]} </span>
              <span className="product-price"> {testData[index]["price"] + " р"} </span>
              <button className={"buy-item" + " " + `${testData[index]["id"]}`} height="50px" width="170px">
                <span className="buy">
                  Купить
                </span>
              </button>
            </div>
      ))
    );
  };



export default BoxAllProductsTwo;