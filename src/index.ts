const adminList = [1, 2];

export const isAdmin = (userId: number) => {
  return adminList.includes(userId);
};
