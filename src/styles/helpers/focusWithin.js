import { useState, useEffect } from "react";

const useFocusWithin = ref => {
  const [focused, setFocused] = useState(false);
  const [hadMouseEvent, setMouseEvent] = useState(false);
  const [hadKeyboarEvent, setKeyboardEvent] = useState(false);
  const [hasFocusWithin, setFocusWithin] = useState(false);
  useEffect(() => {
    if (ref && ref.current) {
      const focusHandler = ref.current.onfocus;
      const blurHandler = ref.current.onblur;
      const clickHandler = ref.current.onclick;
      const mouseUpHandler = ref.current.onmouseup;
      const mouseDownHablder = ref.current.onmousedown;
      const doubleClickHandler = ref.current.ondoubleClick;
      const keyDownHandler = ref.current.onkeydown;
      const keyPressHandler = ref.current.onkeypress;
      const keyUpHandler = ref.current.onkeyup;
      ref.current.onfocus = evt =>
        setFocused(true) || (focusHandler && focusHandler(evt));
      ref.current.onblur = evt =>
        setFocused(false) ||
        setKeyboardEvent(false) ||
        setFocused(false) ||
        setMouseEvent(false) ||
        (blurHandler && blurHandler(evt));
      ref.current.onclick = evt =>
        setMouseEvent(true) ||
        setKeyboardEvent(false) ||
        (clickHandler && clickHandler(evt));
      ref.current.onmouseup = evt =>
        setMouseEvent(true) ||
        setKeyboardEvent(false) ||
        (mouseUpHandler && mouseUpHandler(evt));
      ref.current.onmousedown = evt =>
        setMouseEvent(true) ||
        setKeyboardEvent(false) ||
        (mouseDownHablder && mouseDownHablder(evt));
      ref.current.ondoubleClick = evt =>
        setMouseEvent(true) ||
        setKeyboardEvent(false) ||
        (doubleClickHandler && doubleClickHandler(evt));
      ref.current.onkeydown = evt =>
        setKeyboardEvent(true) ||
        setMouseEvent(false) ||
        (keyDownHandler && keyDownHandler(evt));
      ref.current.onkeypress = evt =>
        setKeyboardEvent(true) ||
        setMouseEvent(false) ||
        (keyPressHandler && keyPressHandler(evt));
      ref.current.onkeyup = evt =>
        setKeyboardEvent(true) ||
        setMouseEvent(false) ||
        (keyUpHandler && keyUpHandler(evt));
    }
  }, []);
  useEffect(() => {
    if (focused && !hadMouseEvent && hadKeyboarEvent) {
      setFocusWithin(true);
    } else {
      setFocusWithin(false);
    }
  }, [focused, hadMouseEvent, hadKeyboarEvent]);

  return hasFocusWithin;
};
export default useFocusWithin;
