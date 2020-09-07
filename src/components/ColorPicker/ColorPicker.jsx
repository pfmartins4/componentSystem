import React, { useEffect, useState } from "react";
import ColorPane from "./ColorPane";
import HueBar from "./HueBar";
import Wrapper from "./styles";
import Checker from "./Checker";
import rgb2Hsl, {
  parseHSLArray,
  parseRGBArray,
  parseHsl,
  parseRgb,
  parseHex,
} from "/styles/helpers/coloring";
import { hsl2Rgb } from "../../styles/helpers/coloring";
const ColorPicker = ({ className, hex, hsla, rgba, onChange, config }) => {
  const [hue, setHue] = useState(0);
  const [saturation, setSaturation] = useState(100);
  const [lightness, setLightnes] = useState(100);
  const [alpha, setAlpha] = useState(1);

  useEffect(() => {
    if (hsla) {
      const [hue, saturation, lightness, alpha] = parseHSLArray(hsla);
      setHue(hue);
      setSaturation(saturation);
      setLightnes(lightness);
      setAlpha(alpha);
    } else if (rgba || hex) {
      const [hue, saturation, lightness, alpha] = rgb2Hsl(
        ...parseRGBArray(rgba || hex)
      );
      setHue(hue);
      setSaturation(saturation);
      setLightnes(lightness);
      setAlpha(alpha);
    }
  }, []);

  useEffect(() => {
    const evt = {};
    let rgbArray;
    if (config.rgb || config.hex || config.rgbAray) {
      rgbArray = hsl2Rgb(hue, saturation, lightness, alpha);
    }
    if (config.hsl) {
      evt.hsl = parseHsl([hue, saturation, lightness, alpha]);
    }
    if (config.rgb) {
      evt.rgb = parseRgb(rgbArray);
    }
    if (config.hex) {
      evt.hev = parseHex(rgbArray);
    }
    if (config.hslArray) {
      evt.hslArray = [hue, saturation, lightness, alpha];
    }
    if (config.rgbArray) {
      evt.rgbArray = rgbArray;
    }
    onChange(evt);
  }, [hue, saturation, lightness, alpha]);

  const handleHueChange = evt => {
    setHue(evt.hue);
  };

  const handlePaneChange = evt => {
    setLightnes(evt.lightness);
    setSaturation(evt.saturation);
  };
  return (
    <Wrapper className={className}>
      <ColorPane
        className="colorPane"
        hue={hue}
        saturation={saturation}
        lightness={lightness}
        onChange={handlePaneChange}
      />
      <HueBar
        className="hueBar"
        hue={hue}
        onChange={evt => handleHueChange(evt)}
      />
      <Checker
        className="checker"
        color={parseHsl([hue, saturation, lightness, alpha])}
      />
    </Wrapper>
  );
};

export default ColorPicker;

ColorPicker.defaultProps = {
  hex: "#FFFFFFFF",
  hsla: "hsla(0, 100%, 100%, 1)",
  rgba: "rgba(255, 255, 255, 1)",
  onChange: evt => evt,
};
