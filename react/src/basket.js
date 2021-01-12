import React, { useEffect, useState } from 'react';

const Basket = () => {


    return (

        <table className="table-basket-border">
            <tr className="table-basket-border table-title">
                <th className="column-delete "></th>
                <th className="column-img"></th>
                <th className="column-name-product">Наименование товара</th>
                <th className="column-price">Цена за шт.</th>
                <th className="column-quanity-product">Количество</th>
                <th className="column-end-price">Цена</th>
            </tr>

            <tr className="table-basket-border container-product-basket">
                <td> </td>
                <td>3,5</td>
                <td>36</td>
                <td>23</td>
                <td>23</td>
                <td>23</td>
                </tr>
        </table>

    );
};


export default Basket;