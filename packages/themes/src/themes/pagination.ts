import { colors } from "../colors";
import { Colors } from "../types";

const lightPaginationColors: Colors = {
  border: colors.grey[300],
  background: "", // colors.transparent,
  icons: colors.black,
  text: colors.black,
};

const darkPaginationColors: Colors = {
  border: colors.white,
  background: "", // colors.transparent,
  icons: colors.white,
  text: colors.white,
};

export const paginationColors = {
  light: lightPaginationColors,
  dark: darkPaginationColors,
};
