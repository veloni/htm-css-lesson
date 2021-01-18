import React, { useEffect, useState } from 'react';

const BoxAllProducts = () => {

  const [dataState, setDataState] = useState(null);


 


const testat = () =>{
  setDataState([...testData]);
/*   console.log(dataState);
  console.log(testData); 
  console.log(productList); */
}


  return (
    <div className="box-products">
      <button 
        className="dn trigger-filter"
        onClick={() => testat() }
      />
            
      {dataState && dataState.map((item, index) => (
        <div className="box-product">
          <img className="product-item-img" src="img/stul2.png" alt="альтернативный текст"></img>
          <span className="product-description-text"> {item.product}  </span>
          <span className="product-price"> {item.price} </span>
          <button className="buy-item" height="50px" width="170px">
            <span className="buy">
              Купить
                    </span>
          </button>
        </div>
      ))}
    </div>
  );
};

export default BoxAllProducts;

