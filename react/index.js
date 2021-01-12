import React from 'react';
import ReactDOM from 'react-dom';
import Test from './src/test';
import Basket from './src/basket';

 const Render = () => {
    ReactDOM.render( <Test/>, document.querySelector('.box-products'));
}

const RenderBasket = () => {
    ReactDOM.render( <Basket/>, document.querySelector('.box-basket'));
}



Render();
RenderBasket();