import React, { useEffect, useState } from 'react';

const BoxAllProducts = () => {

const [dataState, setDataState] = useState(productList);

const giveData = () =>{
  setDataState([...testData]);
}

  return (
    <div className="box-products">
      <button 
        className="dn trigger-filter"
        onClick={() => giveData() }
      />
            
      {dataState && dataState.map((item, index) => (
        <div className="box-product">
          <span className="find-id dn">
              {item.id}
            </span>
          <img className="product-item-img" src="img/stul2.png" alt="альтернативный текст"></img>
          <span className="product-description-text"> {item.product}  </span>
          <span className="product-price"> {item.price} </span>
          <button className="buy-item" height="50px" width="170px"
                  onClick={(e) => console.log(123)}
          >
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

