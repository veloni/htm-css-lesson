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
    if (!checkEndAnimation) { return; }

    setCheckEndAnimation(false);
    centerImage.current.classList.add('img-slider');
    rightImage.current.classList.add('img-slider');

    centerImage.current.classList.add('move-slider-img-left');
    centerImage.current.style.opacity = '0';

    rightImage.current.style.opacity = '1';
    rightImage.current.classList.add('move-slider-img-left');

    setTimeout(
      () => removeMoveImitation(rightImage.current, 'move-slider-img-left', -1, 1, 4),
      750
    );    
  }

  const moveRightImage = () => {
    if (!checkEndAnimation) { return; }

    setCheckEndAnimation(false);
    centerImage.current.classList.add('img-slider');
    leftImage.current.classList.add('img-slider');

    centerImage.current.classList.add('move-slider-img-right');
    
    centerImage.current.style.opacity = '0';
    leftImage.current.style.opacity = '1';

    leftImage.current.classList.add('move-slider-img-right');

    setTimeout(
      () => removeMoveImitation(leftImage.current, 'move-slider-img-right', 1, 4, 1),
      750,
    );
  };

  const removeMoveImitation = (
    sideElement,
    directionClass,
    direction, 
    condition, 
    twoCondition,
  ) => {
    centerImage.current.style.opacity = '1';
    sideElement.style.opacity = '0';

    centerImage.current.classList.remove('img-slider', directionClass);
    sideElement.classList.remove('img-slider', directionClass);

    changeImagePosition(direction, condition, twoCondition);
    setCheckEndAnimation(true);
  };  

  const changeImagePosition = (direction, condition, twoCondition) => {
    setCenterImgSliderState(imgCenterSliderState === condition ? twoCondition : imgCenterSliderState + direction * 1);
    setLeftImgSliderState(imgLeftSliderState === condition ? twoCondition : imgLeftSliderState + direction * 1);
    setRightImgSliderState(imgRightSliderState === condition ? twoCondition : imgRightSliderState + direction * 1);
  };

  return (
    <div className="slider-box">
      <button 
        className="button-slider left-arrow"
        onMouseUp={() => moveLeftImage()}
      />
      <div className="box-image-slider">
        <img 
          ref={leftImage}
          width="650"
          height="650"
          className="img-slider left-image-slider"
          src={`./img/item-${imgLeftSliderState}.png`}
        />
        <img 
          ref={centerImage}
          width="650"
          height="650"
          className="img-slider center-image-slider"
          src={`./img/item-${imgCenterSliderState}.png`}
        />
        <img 
          ref={rightImage}
          width="650"
          height="650"
          className="img-slider right-image-slider"
          src={`./img/item-${imgRightSliderState}.png`}
        />
      </div>
      <button 
        className="button-slider right-arrow"
        onMouseUp={(e) => moveRightImage()}
      />
    </div>
  )
};

export default Slider;

