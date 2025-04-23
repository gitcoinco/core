export const isPoolManager = (address?: string, managers?: string[]) => {
  if (managers && address) {
    return managers.includes(address.toLowerCase());
  } else {
    return false;
  }
};
