export const calculatePaginationData = (count, page, perPage) => {
  const totalPages = Math.ceil(count / perPage);
  const hasNextPage = page < totalPages;
  const hasPereviousPage =
    page > 1 && (page < totalPages || page === totalPages);
  return {
    page,
    perPage,
    totalItems: count,
    totalPages,
    hasNextPage,
    hasPereviousPage,
  };
};
