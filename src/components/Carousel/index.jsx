import { useEffect, useState, useRef } from "react";
import './style.css'

const colors = ["#0088FE", "#00C49F", "#FFBB28", "#00C49F",];
const delay = 2500;
const length = 4

const Carousel =()=> {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);


  const handleNext = () => {
    const newIndex = index + 1;
    setIndex(newIndex >= length ? 0 : newIndex);
    };
/* al activar el movimiento es automatico
  /*const resetTimeout=()=> {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

   useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === colors.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]); */

  return (
    <div className="slideshow">
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {colors.map((backgroundColor, index) => (
          <div
            className="slide"
            key={index}
            style={{ backgroundColor }}
          ></div>
        ))}
      </div>

      <div className="slideshowDots">
        {colors.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? " active" : ""}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
              
          </div>
          <button onClick={()=>handleNext()}>
        <span>+</span>
      </button>
    </div>
  );
}

export default Carousel
//https://tinloof.com/blog/how-to-build-an-auto-play-slideshow-with-react#the-trick

 

//https://www.makeuseof.com/react-js-interactive-carousel-build/