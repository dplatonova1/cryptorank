import {
  PaginationContainer,
  PaginationButton,
  PaginationInput,
  PaginationParameters,
  PaginationSelect,
} from "./styles";
import { Table } from "@tanstack/react-table";
import type { Currency } from "../../types";
import { pageSizes } from "../../utils/consts";
interface PaginationProps {
  table: Table<Currency>;
  pageCount: number;
}

export const Pagination = (props: PaginationProps) => {
  const { table, pageCount } = props;
  return (
    <PaginationContainer>
      <PaginationButton
        onClick={() => table.setPageIndex(0)}
        disabled={!table.getCanPreviousPage()}
      >
        {"<<"}
      </PaginationButton>
      <PaginationButton
        onClick={() => table.previousPage()}
        disabled={!table.getCanPreviousPage()}
      >
        {"<"}
      </PaginationButton>
      <PaginationButton
        onClick={() => table.nextPage()}
        disabled={!table.getCanNextPage()}
      >
        {">"}
      </PaginationButton>
      <PaginationButton
        onClick={() => table.setPageIndex(table.getPageCount() - 1)}
        disabled={!table.getCanNextPage()}
      >
        {">>"}
      </PaginationButton>
      <PaginationParameters>
        <div>Page</div>
        <strong>
          {table.getState().pagination.pageIndex + 1} of {pageCount}
        </strong>
      </PaginationParameters>
      <PaginationParameters>
        Go to page:
        <PaginationInput
          type="number"
          defaultValue={table.getState().pagination.pageIndex + 1}
          onChange={(e) => {
            const page = e.target.value ? Number(e.target.value) - 1 : 0;
            table.setPageIndex(page);
          }}
        />
      </PaginationParameters>
      <PaginationSelect
        value={table.getState().pagination.pageSize}
        onChange={(e) => {
          table.setPageSize(Number(e.target.value));
        }}
      >
        {pageSizes.map((pageSize) => (
          <option key={pageSize} value={pageSize}>
            Show {pageSize}
          </option>
        ))}
      </PaginationSelect>
    </PaginationContainer>
  );
};

export default Pagination;
