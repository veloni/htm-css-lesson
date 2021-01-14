
import React, { useEffect, useState } from 'react';

const FilterProducts = () => {
   
    const [firstPointX, setFirstPointX] = useState(0);
    const [isMoving, setIsMoving] = useState(false);

    return (
        <div className="box-filter-products">
            <button className="sort-ascending-order">
                Сортировка по возрастанию
            </button>

            <div class="box-filter-price">
                <div class="box-input">
                    <input className="input-price">

                    </input>

                    <input className="input-price">
                    
                    </input>
                </div>

                <div className="line-price">
                    <div className="into-line-price">
                        <div 
                            onMouseDown={(e) => setIsMoving(true)} 
                            onMouseUp={(e) => setIsMoving(false)}
                            onMouseMove={(e) => isMoving &&  setFirstPointX(e.clientX - 1700)}

                            style={
                                {
                                    marginLeft: `${firstPointX}px`
                                }
                            }
                            className="first-point-line"
                        >

                        </div>

                        <div className="true-into-line-price">
                            
                        </div>

                        <div className="end-point-line">

                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default FilterProducts;

