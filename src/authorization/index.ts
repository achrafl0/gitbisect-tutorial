const adminList = [1, 2, 4];

export const isAdmin = (userId: number) => {
  return adminList.includes(userId);
};
