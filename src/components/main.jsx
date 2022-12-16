import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../scss/app.scss';
function Main() {
  const navigate = useNavigate();
  let appRef = useRef();
  let mainTextRef = useRef();
  let buttonRef = useRef();
  let naviRef = useRef();
  let clicked = false;
  let navi = false;

  function handleResize() {
    console.log(window.outerHeight, window.outerWidth);
  }

  function handleClick(e) {
    console.log(e);
    if (!e.path.includes(buttonRef.current)) {
      clicked
        ? appRef.current.classList.remove('clicked')
        : appRef.current.classList.add('clicked');
      clicked = !clicked;
    }
  }
  function handleNaviClick(e) {
    e.stopPropagation();
    if (navi) {
      naviRef.current.classList.remove('active');
      buttonRef.current.style.transform = 'translateX(0)';
      navi = !navi;
    } else {
      naviRef.current.classList.add('active');
      buttonRef.current.style.transform = 'translateX(-300px)';
      navi = !navi;
    }
  }

  useEffect(() => {
    appRef.current.addEventListener('click', handleClick);
    window.onresize = handleResize;
  }, []);
  return (
    <div className="app" ref={appRef}>
      <div className="main">
        <header className="header">
          <p className="main-text" ref={mainTextRef}>
            мосточки
          </p>
          <p className="desc-text">—</p>
          <p className="desc-text">деревянные тротуары.</p>
        </header>
        <div className="quote">
          <p>
            среди современных многоэтажных домов, <br></br>сохранились еще уголки города с
            деревянными мосточками.
          </p>
        </div>
      </div>
      <div className="navigationContainer">
        <div className="navigation" ref={naviRef}>
          <button
            className="buttonInNavi"
            onClick={(e) => {
              e.stopPropagation();
              navigate('/information');
            }}>
            больше о мосточках
          </button>
          <button
            className="buttonInNavi"
            onClick={(e) => {
              e.stopPropagation();
              navigate('/photo');
            }}>
            фотографии
          </button>
        </div>
        <button className="naviButton" onClick={handleNaviClick} ref={buttonRef}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="70"
            height="70"
            fill="#ffffff"
            class="bi bi-list"
            viewBox="0 0 16 16">
            <path
              fill-rule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Main;
