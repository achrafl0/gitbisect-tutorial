const adminList = [1, 2, 4, 8, 16];

export const isUserAdmin = (userId: number) => {
  return adminList.includes(userId);
};
