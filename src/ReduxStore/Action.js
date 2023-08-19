export const searchFunction = (searchInput) => {
  return { type: "search", payload: { searchTitle: searchInput } };
};
