const rgb2Hsl = (_r, _g, _b) => {
  const red = Math.min(_r / 255, 1)
  const green = Math.min(_g / 255, 1)
  const blue = Math.min(_b / 255, 1)
  const value = Math.max(red, green, blue)
  const minimum = Math.min(red, green, blue)
  const chroma = value - minimum
  let lightness = (value + minimum) / 2
  let hue
  let saturation
  if (chroma === 0) {
    hue = 0
  } else {
    switch (value) {
      case red: {
        hue = 60 * ((green - blue) / chroma)
        break
      }
      case green: {
        hue = 60 * (2 + (blue - red) / chroma)
        break
      }
      case blue: {
        hue = 60 * (4 + (red - green) / chroma)
        break
      }
    }
  }
  if (chroma === 0) {
    saturation = 0
  } else {
    saturation = chroma / (1 - Math.abs(2 * lightness - 1))
  }
  hue = parseFloat(hue.toFixed(1))
  hue = hue < 0 ? hue + 360 : hue
  lightness = parseFloat(lightness.toFixed(3)) * 100
  saturation = parseFloat(saturation.toFixed(3)) * 100
  return [hue, saturation, lightness]
}

const checkColorType = color => {
  const isHex = color.match(/\#/)
  const isHsl = color.match(/hsl/)
  const isRgb = color.match(/(rgb)/)
  return isHex ? "hex" : isHsl ? "hsl" : isRgb ? "rgb" : undefined
}

const parseRGBArray = color => {
  const isRgb = color.match(/(rgb)/)
  const isHex = color.match(/\#/)
  let rgbValues
  if (isRgb) {
    rgbValues = color
      .replace(/rgb|\(|\)/gm, "")
      .split(",")
      .map(val => parseInt(val.trim()))
    return rgbValues
  }
  if (isHex) {
    rgbValues = color
      .replace("#", "")
      .match(/.{2}/g)
      .map(val => parseInt(val, 16))
    return rgbValues
  }
}

const parseHSLArray = color => {
  let hslValues = color
    .replace(/hsl|\(|\)|%/gm, "")
    .split(",")
    .map(val => parseInt(val.trim()))
  return hslValues
}

const lighten = (amount, color) => {
  const colorType = checkColorType(color)
  let hslValues
  if (colorType === "rgb" || colorType === "hex") {
    const rgbValues = parseRGBArray(color)
    hslValues = rgb2Hsl(...rgbValues)
  } else {
    hslValues = parseHSLArray(color)
  }
  const lightness = Math.min(hslValues[2] + amount, 100)
  return parseHsl([hslValues[0], hslValues[1], lightness])
}

const darken = (amount, color) => {
  const colorType = checkColorType(color)
  let hslValues
  if (colorType === "rgb" || colorType === "hex") {
    const rgbValues = parseRGBArray(color)
    hslValues = rgb2Hsl(...rgbValues)
  } else {
    hslValues = parseHSLArray(color)
  }
  const lightness = Math.max(hslValues[2] - amount, 0)
  return parseHsl([hslValues[0], hslValues[1], lightness])
}

const parseHsl = hslArray => {
  return `hsl(${hslArray[0]}, ${hslArray[1]}%, ${hslArray[2]}%)`
}

export default rgb2Hsl
export { parseRGBArray, parseHSLArray, lighten, darken }
