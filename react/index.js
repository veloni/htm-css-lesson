import React from 'react';
import ReactDOM from 'react-dom';
import Test from './src/test';

import Basket from './src/basket';
import FilterProducts from './src/filterProducts';


const Render = () => {
    pushData = "productList.id[index].";
    ReactDOM.render( <Test/>, document.querySelector('.box-products'));
}

const reRender = () => {
    pushData = "testData[0][index].";
    ReactDOM.render( <Test/>, document.querySelector('.box-products'));
}

const RenderBasket = () => {
    ReactDOM.render( <Basket/>, document.querySelector('.box-basket'));
}

const RenderFilter = () => {
    ReactDOM.render( <FilterProducts/>, document.querySelector('.box-filter-up-price'));
}

/* const RenderFilterPrice = () => {
    ReactDOM.render( <FilterPrice/>, document.querySelector('.box-filter-price'));
}
 */

window.ReRender = reRender;

/* RenderFilterPrice(); */
Render();
RenderBasket();
RenderFilter(); 

