import React, { useEffect, useState, useRef } from 'react';

const BoxOrder = () => {
    const boxOrderRef = useRef(null);
    window.boxOrderRefWindow = boxOrderRef;

    return (

        <div ref={boxOrderRef} class="container-order">
            <div className="box-order">
                <span className="text-order-title">
                    Оформление заказа
                </span>

                <div className="container-main-order">
                    <div className="container-busket-order">
                        <span className="text-order-title">
                            Ваш заказ
                        </span>
                    </div>
                    <div className="container-details-order">
                        <span className="text-order-title">
                            Оформление заказа
                        </span>
                    </div>
                </div>
                <div className="order-bottom">

                </div>
            </div>

        </div>
    );
};

export default BoxOrder;

