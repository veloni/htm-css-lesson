import React from 'react';
import ReactDOM from 'react-dom';
import Test from './src/test';
import ReRender from './src/test1';
import Basket from './src/basket';
import FilterProducts from './src/filterProducts';


const Render = () => {
    ReactDOM.render( <Test/>, document.querySelector('.box-products'));
}

const reRender = () => {
    ReactDOM.render( <ReRender/>, document.querySelector('.box-products'));
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

