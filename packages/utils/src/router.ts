export const modularRedirect = (
  redirectLink?: string,
  redirect?: boolean,
  chainId?: string,
  roundId?: string,
) => {
  let link = redirectLink;
  if (!link) {
    return;
  }
  if (chainId && roundId) {
    link = link.replace("{chainId}", chainId).replace("{roundId}", roundId);
  } else if (chainId) {
    link = link.replace("{chainId}", chainId);
  } else if (roundId) {
    link = link.replace("{roundId}", roundId);
  }
  if (redirect) {
    window.open(link, "_blank");
  } else {
    window.location.href = link;
  }
};
