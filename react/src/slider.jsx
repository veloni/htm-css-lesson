
import React, { useEffect, useState, useRef } from 'react';

const Slider = () => {

  const leftImage = useRef(null);
  const centerImage = useRef(null);
  const rightImage = useRef(null);

  const [imgCenterSliderState, setCenterImgSliderState] = useState(1);
  const [imgLeftSliderState, setLeftImgSliderState] = useState(2);
  const [imgRightSliderState, setRightImgSliderState] = useState(4);

  const moveLeftImage = () => {
    
    centerImage.current.classList.add('img-slider');
    rightImage.current.classList.add('img-slider');

    centerImage.current.classList.add('move-slider-img-left');
    centerImage.current.style.opacity = "0";

    rightImage.current.style.opacity = "1";
    rightImage.current.classList.add('move-slider-img-left');

    setTimeout(
      () => removeMoveImitation(), 
      2000
    );

    const removeMoveImitation = () =>{
      centerImage.current.style.opacity = "1";
      rightImage.current.style.opacity = "0";

      centerImage.current.classList.remove('img-slider');
      rightImage.current.classList.remove('img-slider');

      centerImage.current.classList.remove('move-slider-img-left');
      rightImage.current.classList.remove('move-slider-img-left');

      changeImg(imgCenterSliderState,setCenterImgSliderState);
      changeImg(imgLeftSliderState,setLeftImgSliderState);
      changeImg(imgRightSliderState,setRightImgSliderState);

    }

     const changeImg = (state, setstate) =>{
        if (state === 1)
        {
          setstate(4);
        }
        else{
          setstate(state-1);
        }
      }
  }

  const moveRightImage = () => {
    
    centerImage.current.classList.add('img-slider');
    leftImage.current.classList.add('img-slider');

    centerImage.current.classList.add('move-slider-img-right');
    centerImage.current.style.opacity = "0";

    leftImage.current.style.opacity = "1";
    leftImage.current.classList.add('move-slider-img-right');

    setTimeout(
      () => removeMoveImitation(), 
      2000
    );

    const removeMoveImitation = () =>{
      centerImage.current.style.opacity = "1";
      leftImage.current.style.opacity = "0";

      centerImage.current.classList.remove('img-slider');
      leftImage.current.classList.remove('img-slider');

      centerImage.current.classList.remove('move-slider-img-right');
      leftImage.current.classList.remove('move-slider-img-right');

      changeImg(imgCenterSliderState,setCenterImgSliderState);
      changeImg(imgLeftSliderState,setLeftImgSliderState);
      changeImg(imgRightSliderState,setRightImgSliderState);

    }

     const changeImg = (state, setstate) =>{
        if (state === 4)
        {
          setstate(1);
        }
        else{
          setstate(state+1);
        }
      }
  }






 

  return (

    <div className="slider-box">
      <button className="button-slider"
               onMouseUp={(e) => moveLeftImage()}>
        Налево
      </button>
      <div className="box-image-slider">
 
       <img ref={leftImage} 
             className="img-slider left-image-slider" 
             src={"./img/table-" + imgLeftSliderState + ".png"}></img>
     
        <img  ref={centerImage}
              className="img-slider center-image-slider" 
              src={"./img/table-" + imgCenterSliderState + ".png"}></img>

        <img  ref={rightImage}
              className="img-slider right-image-slider" 
              src={"./img/table-" + imgRightSliderState + ".png"}></img>

      </div>
      <button className="button-slider"
                onMouseUp={(e) => moveRightImage()}>
        Направо
      </button>
    </div>

  )
};

export default Slider;

