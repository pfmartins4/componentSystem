const hsl2String = ([hue, saturation, lightness, alpha]) =>
  alpha
    ? `hsla(${hue}, ${saturation}%, ${lightness}%, ${alpha})`
    : `hsl(${hue}, ${saturation}%, ${lightness}%)`;

export default hsl2String;
