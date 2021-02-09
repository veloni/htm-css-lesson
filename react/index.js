import React from 'react';
import ReactDOM from 'react-dom';
import BoxAllProducts from './src/BoxAllProducts';
import BoxOrder from './src/Order';
import Basket from './src/Basket';
import FilterProducts from './src/FilterProducts';
import Slider from './src/Slider';
import RenderBasketFirst from './src/RenderBasket'


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
    ReactDOM.render(<RenderBasketFirst/>, document.querySelector('.render-react-basket'));
  
}

const RenderFilter = () => {
    ReactDOM.render( <FilterProducts/>, document.querySelector('.box-filter-up-price'));
}


Render();
RenderSlider();
RenderBasket();
RenderFilter(); 
/* RenderOrder(); */
