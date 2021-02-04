import React from 'react';
import ReactDOM from 'react-dom';
import BoxAllProducts from './src/BoxAllProducts';
import BoxOrder from './src/order';
import Basket from './src/basket';
import FilterProducts from './src/FilterProducts';
import Slider from './src/slider';

const Render = () => {

    ReactDOM.render( <BoxAllProducts/>, document.querySelector('.box-products'));
}

const RenderSlider = () => {

    ReactDOM.render( <Slider/>, document.querySelector('.slider'));
}

const RenderOrder = () => {
    ReactDOM.render( <BoxOrder/>, document.querySelector('.order-wrapper'));
}

const RenderBasket = () => {
    ReactDOM.render( <Basket/>, document.querySelector('.box-basket'));
}

const RenderFilter = () => {
    ReactDOM.render( <FilterProducts/>, document.querySelector('.box-filter-up-price'));
}


Render();
RenderSlider();
RenderBasket();
RenderFilter(); 
RenderOrder();
