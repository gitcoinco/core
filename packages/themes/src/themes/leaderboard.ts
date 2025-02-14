import { colors } from "../colors";
import { Colors } from "../types";

const lightLeaderboardColors: Colors = {
  border: colors.grey[300],
  gradientFrom: colors.purple[50],
  gradientTo: colors.white,
  ranksDefaultBg: "", // colors.transparent,
  ranksDefaultText: colors.black,
  ranks1stBg: colors.purple[500],
  ranks1stText: colors.white,
  ranks2ndBg: colors.purple[300],
  ranks2ndText: colors.white,
  tableIcons: colors.black,
  tableHeaders: colors.black,
  tableItemsText: colors.black,
  paginationHoverBorder: colors.grey[300],
  paginationHoverBg: "", // colors.transparent,
  paginationIcons: colors.black,
  paginationText: colors.black,
  projectInfoLink: colors.moss[500],
  projectInfoDescription: colors.black,
  projectInfoIcons: colors.grey[900],
};

const darkLeaderboardColors: Colors = {
  border: colors.grey[900],
  gradientFrom: colors.purple[900],
  gradientTo: colors.black,
  ranksDefaultBg: "", // colors.transparent,
  ranksDefaultText: colors.white,
  ranks1stBg: colors.purple[300],
  ranks1stText: colors.black,
  ranks2ndBg: colors.purple[500],
  ranks2ndText: colors.black,
  tableIcons: colors.white,
  tableHeaders: colors.white,
  tableItemsText: colors.white,
  paginationHoverBorder: colors.grey[900],
  paginationHoverBg: "", // colors.transparent,
  paginationIcons: colors.white,
  paginationText: colors.white,
  projectInfoLink: colors.moss[300],
  projectInfoDescription: colors.white,
  projectInfoIcons: colors.grey[300],
};

export const leaderboardColors = {
  light: lightLeaderboardColors,
  dark: darkLeaderboardColors,
};
