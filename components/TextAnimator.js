import { useEffect, useRef } from "react";
import Typed from "typed.js";

export const TextAnimator = ({
  text,
  textSize,
  breakText,
  extraStyle = "",
}) => {
  const contRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const options = {
      //Get the text to animate it, it come like a array
      strings: text,
      typeSpeed: 90,
      backSpeed: 90,
      //when the animation finish, it set to the line none for don't show it anymore
      onComplete: () => (contRef.current.nextSibling.style.display = "none"),
    };

    textRef.current = new Typed(contRef.current, options);

    return () => {
      textRef.current.destroy();
    };
  }, []);
  return (
    <>
      <div className={`type-wrap font-bold ${extraStyle} ${textSize}`}>
        <span
          // set to all the element inside this color to blue, this is for the spans on the text we set

          className="TitleAnimeColor"
          style={breakText ? { whiteSpace: "normal" } : {}}
          ref={contRef}
        />
      </div>
    </>
  );
};
TextAnimator.defaultProps = {
  breakText: false,
};
