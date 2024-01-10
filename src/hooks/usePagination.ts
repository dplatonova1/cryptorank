import { useState } from "react";

export const usePagination = (initialSize = 5) => {
  const [pagination, setPagination] = useState({
    pageSize: initialSize,
    pageIndex: 0,
  });
  const { pageSize, pageIndex } = pagination;

  return {
    limit: pageSize,
    onPaginationChange: setPagination,
    pagination,
    skip: pageSize * pageIndex,
  };
};
