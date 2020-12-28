import HueBar from "./HueBar";
import ColorPane from "./ColorPane";
import ColorPicker from "./index";
export default {
  title: "ColorPicking",
  component: ColorPicker,
};

export const hueBar = () => <HueBar />;
export const colorPane = () => <ColorPane onChange={() => {}} />;
export const colorPicker = () => (
  <ColorPicker
    config={{ hsl: true, rgb: true, hex: true, rgbArray: true, hslArray: true }}
    onChange={() => {}}
  />
);
