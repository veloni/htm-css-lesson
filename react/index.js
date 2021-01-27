import React from 'react';
import ReactDOM from 'react-dom';
import Test from './src/test';
import BoxOrder from './src/order';
import Basket from './src/basket';
import FilterProducts from './src/filterProducts';
import Slider from './src/slider';

const Render = () => {

    ReactDOM.render( <Test/>, document.querySelector('.box-products'));
}

const RenderSlider = () => {

    ReactDOM.render( <Slider/>, document.querySelector('.slider'));
}

const RenderOrder = () => {

    ReactDOM.render( <BoxOrder/>, document.querySelector('.order-wrapper'));
}


/* const reRender = () => {
    pushData = "testData[0][index].";
    
}

const reRenderDataDescending = () => {
    pushData = "tesDataDescending[0][index].";
 */
/* }
 */
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


// RenderFilterPrice(); 

Render();
RenderSlider();
RenderBasket();
RenderFilter(); 
RenderOrder();
