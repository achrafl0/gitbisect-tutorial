export const isPowerOf2 = (n: number) => {
  const log2 = Math.log2(n);
  return Math.floor(log2) === log2;
};

export const isUserAdmin = (userId: number) => {
  return isPowerOf2(userId);
};
