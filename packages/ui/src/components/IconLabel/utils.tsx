import { match } from "ts-pattern";

export function getEvaluation(percent: number, isLoading?: boolean) {
  if (isLoading) {
    return { message: "", variant: "loading" };
  }
  percent = Math.min(Math.max(percent, 0), 100);
  if (percent >= 60) {
    return { message: `Approve (${percent}%)`, variant: "ai-evaluation-a" };
  } else if (percent >= 40) {
    return { message: `Uncertain (${percent}%)`, variant: "ai-evaluation-u" };
  } else {
    return { message: `Reject (${percent}%)`, variant: "ai-evaluation-r" };
  }
}

export const getFormattedLink = (platform?: string, link?: string) => {
  // TODO: evaluate need of ts-pattern vs switch
  // TODO: evaluate naming based on implementation
  // TODO: evaluate need of moving to lib
  return match(platform)
    .with("github", () => link?.split(".com/")[1])
    .with("twitter", () => `@${link?.split(".com/")[1]}`)
    .otherwise(() => link);
};
