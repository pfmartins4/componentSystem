declare namespace ColorsSpaces {
  export interface ColorSpaces {
    RGBA: RGBA;
    HSLA: HSLA;
    HEX: string;
  }
  export interface HSLA {
    array: HSLAArray | HSLArray;
    string: string;
  }
  export interface RGBA {
    array: RGBAArray | RGBArray;
    string: string;
  }
  export type HSLAArray = [number, number, number, number];
  export type HSLArray = [number, number, number];
  export type RGBAArray = [number, number, number, number];
  export type RGBArray = [number, number, number];
}

/* export default ColorSpaces; */
