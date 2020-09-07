import React, { useEffect, useState, useRef, useCallback } from "react";
import Bar, { HueThumbNail } from "./styles";
import debounce from "/helpers/debounce";
const HueBar = ({ className, hue, onChange }) => {
  const [position, setPosision] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    setPosision(hue);
  }, []);

  const handleMouseDown = debounce(evt => {
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
    const position = getPosition(
      evt.clientY,
      ref && ref.current && ref.current.offsetTop,
      ref && ref.current && ref.current.offsetHeight
    );
    setPosision(position);
    onChange({ target: evt.target, hue: getHueFromPosition(position) });
  });

  const getPosition = (currentPosition, elementPosition, elementHeight) =>
    Math.min(Math.max(currentPosition - elementPosition, 0), elementHeight) /
    elementHeight;
  const getHueFromPosition = position => parseInt(360 * position);
  const getPositionFromHue = hue => hue / 360;
  const handleMouseMove = debounce(
    useCallback(evt => {
      evt.preventDefault();
      const position = getPosition(
        evt.clientY,
        ref && ref.current && ref.current.offsetTop,
        ref && ref.current && ref.current.offsetHeight
      );

      setPosision(position);
      onChange({ target: evt.target, hue: getHueFromPosition(position) });
    })
  );
  const handleMouseUp = useCallback(evt => {
    evt.preventDefault();
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
    const position = getPosition(
      evt.clientY,
      ref && ref.current && ref.current.offsetTop,
      ref && ref.current && ref.current.offsetHeight
    );

    setPosision(position);
    onChange({ target: evt.target, hue: getHueFromPosition(position) });
  });
  return (
    <>
      <Bar
        ref={ref}
        className={className}
        position={position}
        onMouseDown={handleMouseDown}
      >
        <HueThumbNail position={position * 100} />
      </Bar>
    </>
  );
};

export default HueBar;
