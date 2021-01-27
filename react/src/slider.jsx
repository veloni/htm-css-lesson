import React, { useEffect, useState, useRef } from 'react';

const Slider = () => {

  const leftImage = useRef(null);
  const centerImage = useRef(null);
  const rightImage = useRef(null);

  const [imgCenterSliderState, setCenterImgSliderState] = useState(1);
  const [imgLeftSliderState, setLeftImgSliderState] = useState(2);
  const [imgRightSliderState, setRightImgSliderState] = useState(4);
  const [checkEndAnimation, setCheckEndAnimation] = useState(true);

  const moveLeftImage = () => {

    if (checkEndAnimation) {
      setCheckEndAnimation(false);
      centerImage.current.classList.add('img-slider');
      rightImage.current.classList.add('img-slider');

      centerImage.current.classList.add('move-slider-img-left');
      centerImage.current.style.opacity = "0";

      rightImage.current.style.opacity = "1";
      rightImage.current.classList.add('move-slider-img-left');

      setTimeout(
        () => removeMoveImitation(),
        1000
      );

      const removeMoveImitation = () => {
        centerImage.current.style.opacity = "1";
        rightImage.current.style.opacity = "0";

        centerImage.current.classList.remove('img-slider');
        rightImage.current.classList.remove('img-slider');

        centerImage.current.classList.remove('move-slider-img-left');
        rightImage.current.classList.remove('move-slider-img-left');

        changeImg(imgCenterSliderState, setCenterImgSliderState);
        changeImg(imgLeftSliderState, setLeftImgSliderState);
        changeImg(imgRightSliderState, setRightImgSliderState);
        setCheckEndAnimation(true);
      }

      const changeImg = (state, setstate) => {
        if (state === 1) {
          setstate(4);
        }
        else {
          setstate(state - 1);
        }
      }
    }
    else {
      alert("Братиш помедлейней");
    }
  }

  const moveRightImage = () => {
    if (checkEndAnimation) {
      setCheckEndAnimation(false);
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

      const removeMoveImitation = () => {
        centerImage.current.style.opacity = "1";
        leftImage.current.style.opacity = "0";

        centerImage.current.classList.remove('img-slider');
        leftImage.current.classList.remove('img-slider');

        centerImage.current.classList.remove('move-slider-img-right');
        leftImage.current.classList.remove('move-slider-img-right');

        changeImg(imgCenterSliderState, setCenterImgSliderState);
        changeImg(imgLeftSliderState, setLeftImgSliderState);
        changeImg(imgRightSliderState, setRightImgSliderState);
        setCheckEndAnimation(true);
      }

      const changeImg = (state, setstate) => {
        if (state === 4) {
          setstate(1);
        }
        else {
          setstate(state + 1);
        }
      }
    }
    else {
      alert("Братиш помедленей")
    }
  }
  
  return (

    <div className="slider-box">
      <button className="button-slider left-arrow"
        onMouseUp={(e) => moveLeftImage()}>

      </button>
      <div className="box-image-slider">

        <img ref={leftImage}
          className="img-slider left-image-slider"
          src={"./img/item-" + imgLeftSliderState + ".png"}></img>

        <img ref={centerImage}
          className="img-slider center-image-slider"
          src={"./img/item-" + imgCenterSliderState + ".png"}></img>

        <img ref={rightImage}
          className="img-slider right-image-slider"
          src={"./img/item-" + imgRightSliderState + ".png"}></img>

      </div>
      <button className="button-slider right-arrow"
        onMouseUp={(e) => moveRightImage()}>

      </button>
    </div>

  )
};

export default Slider;

