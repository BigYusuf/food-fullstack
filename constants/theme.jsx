import { Dimensions } from "react-native";

const { width, height } = Dimensions.get('screen');

export const COLORS = {
    primary: "#F52D56",
    title: "#072f4a",
    white: "#fff",
    lightGrey: "#d3d6d6",
    grey: "#c1c0c9",
    blue: "#087bb6",
};

export const SIZES = {
    h1: 22,
    h2: 20,
    h3: 18,
    h4: 16,
    h5: 14,
    h6: 12,
    width,
    height,
};