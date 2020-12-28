import React, { useState, useCallback, useRef } from "react";
import Pane, { BlackPane, WhitePane, ThumbNail } from "./styles";
import debounce from "helpers/debounce";

const calculateLighteness = (xPosition, yPosition, container) => {
  const height = container.clientHeight;
  const offsetLeft = container.offsetLeft;
  const offsetTop = container.offsetTop;
  const relativeX = xPosition - offsetLeft;
  const relativeY = yPosition - offsetTop;
  if (relativeY >= height) {
    return 0;
  }
  const xAxis = Math.min(relativeX, height);
  const yAxis = Math.min(relativeY, height);
  const hip_ = Math.sqrt(Math.pow(xAxis, 2) + Math.pow(yAxis, 2));
  const cos = xAxis / hip_;
  const sen = yAxis / hip_;
  const hip = Math.sqrt(
    Math.pow(2 * height * cos, 2) + Math.pow(height * sen, 2)
  );
  return 100 - Math.round((100 * hip_) / hip);
};

const ColorPane = ({ hue, onChange, className }) => {
  const ref = useRef(null);
  const [xPosition, setXPosition] = useState(0);
  const [yPosition, setYPosition] = useState(0);

  const handleMouseDown = useCallback(evt => {
    evt.preventDefault();
    const [x, y] = getPosition(evt.clientX, evt.clientY);
    setXPosition(x);
    setYPosition(y);
    const lightness = calculateLighteness(
      evt.clientX,
      evt.clientY,
      ref.current
    );
    onChange({ target: evt.target, lightness, saturation: x });
    document.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mousemove", handleMouseMove, { passive: true });
  });
  const handleMouseMove = debounce(evt => {
    getPosition(evt.clientX, evt.clientY);
    const [x, y] = getPosition(evt.clientX, evt.clientY);
    const lightness = calculateLighteness(
      evt.clientX,
      evt.clientY,
      ref.current
    );
    setXPosition(x);
    setYPosition(y);
    onChange({ target: evt.target, lightness, saturation: x });
  });
  const handleMouseUp = useCallback(evt => {
    evt.preventDefault();
    document.removeEventListener("mouseup", handleMouseUp);
    document.removeEventListener("mousemove", handleMouseMove);
  });
  const getPosition = useCallback((absoluteX, absoluteY) => {
    const { width, height, left, top } =
      ref && ref.current && ref.current.getBoundingClientRect();
    let relativeX = ((absoluteX - left) / width) * 100;
    relativeX = relativeX < 0 ? 0 : relativeX > 100 ? 100 : relativeX;
    let relativeY = ((absoluteY - top) / height) * 100;
    relativeY = relativeY < 0 ? 0 : relativeY > 100 ? 100 : relativeY;
    return [relativeX, relativeY];
  });
  return (
    <Pane
      color={`hsl(${hue}, ${100}%, ${50}%)`}
      ref={ref}
      onMouseDown={handleMouseDown}
      className={className}
    >
      <ThumbNail xPosition={xPosition} yPosition={yPosition} />
      <WhitePane />
      <BlackPane />
    </Pane>
  );
};

export default ColorPane;
