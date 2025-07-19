import { Dimensions } from "react-native";

const dim = Dimensions.get('window');


export const SCREEN_HEIGHT = dim.height;
export const SCREEN_WIDTH = dim.width;
console.log('SCREEN_WIDTH:: ', SCREEN_WIDTH);

const STANDARD_SCREEN_DIMENSIONS = { height: 812, width: 375 };

export const RfW = (value) => {
  return SCREEN_WIDTH * (value / STANDARD_SCREEN_DIMENSIONS.width);
};

export const RfH = (value) => {
  return SCREEN_HEIGHT * (value / STANDARD_SCREEN_DIMENSIONS.height);
};