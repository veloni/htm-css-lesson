import React , { useEffect, useState }  from 'react';

const BoxAllProductsTwo = () => {
   let sortingOrder = productList;
  let sorting = sortingOrder.id;

  sorting.sort(function(a,b) {
      let x = parseInt(a.price.replace(/\D/g,''));
      let y = parseInt(b.price.replace(/\D/g,''));
      return x < y ? -1 : x > y ? 1 : 0;
  });

  testData = sorting; 
  
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