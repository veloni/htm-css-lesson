import React, { useState } from 'react';

const BoxAllProducts = () => {
  const [dataItemsState, setDataItemsState] = useState(productList);

  const giveData = () =>{
    setDataItemsState([...sortingData]);
  }

  return (
    <div className="box-products">
      <button 
        className="dn trigger-filter"
        onClick={() => giveData()}
      />
      {dataItemsState && dataItemsState.map((item) => (
        <div className="box-product">
          <span className="find-id dn">
            {item.id}
          </span>
          <img 
            className="product-item-img" 
            src={`img/photoBase/${item.img}`}
            alt="альтернативный текст"
          />
          <span className="product-description-text">
            {item.product}
          </span>
          <span className="product-price">
            {item.price} Р
          </span>
          <button 
            className="buy-item" 
            height="50px" 
            width="170px"
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

