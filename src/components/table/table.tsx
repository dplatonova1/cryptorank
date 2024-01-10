import React from "react";
import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  flexRender,
  SortingState,
} from "@tanstack/react-table";
import {
  NameCellImage,
  NameCellStyled,
  NameStyled,
  Pagination,
  PaginationButton,
  PaginationInput,
  PaginationParameters,
  PaginationSelect,
  SymbolStyled,
  TableData,
  TableHeader,
  TableRow,
  TableStyled,
} from "./styles";
import { Currency } from "../currency-card/types";
import { calculateHistoricalPrice } from "../../utils/utils";

export const TableComponent: React.FC<{ data: Currency[] }> = ({ data }) => {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const columns = React.useMemo(
    () => [
      {
        header: "Name",
        accessorKey: "name",
        cell: (row: any) => {
          return (
            <NameCellStyled>
              <NameCellImage
                src={row.row.original.images["16x16"]}
              ></NameCellImage>
              <NameStyled>
                {row.row.original.name}{" "}
                <SymbolStyled>{row.row.original.symbol}</SymbolStyled>
              </NameStyled>
            </NameCellStyled>
          );
        },
      },
      {
        header: "Price USD",
        accessorKey: "values.USD.price",
        cell: (info: any) => {
          return `$ ${info.getValue().toFixed(2)}`;
        },
      },
      {
        header: "Circulating Supply",
        accessorKey: "circulatingSupply",
        cell: (info: any) => {
          return `${info.row.original.symbol} ${Intl.NumberFormat("en", {
            notation: "compact",
          }).format(info.getValue())}`;
        },
      },
      {
        header: "Market Cap",
        accessorKey: "values.USD.marketCap",
        cell: (info: any) => {
          return `$ ${Intl.NumberFormat("en", { notation: "compact" }).format(
            info.getValue()
          )}`;
        },
      },
      {
        header: "Category",
        accessorKey: "category",
      },
      {
        header: "Historical change / 24h",
        accessorKey: "historicalChange24h",
        cell: (info: any) =>
          calculateHistoricalPrice(
            info.row.original.values.USD.percentChange24h,
            info.row.original.values.USD.price
          ),
      },
      {
        header: "Historical change / week",
        accessorKey: "historicalChange7d",
        cell: (info: any) =>
          calculateHistoricalPrice(
            info.row.original.values.USD.percentChange7d,
            info.row.original.values.USD.price
          ),
      },
      {
        header: "Historical change / month",
        accessorKey: "historicalChange30d",
        cell: (info: any) =>
          calculateHistoricalPrice(
            info.row.original.values.USD.percentChange30d,
            info.row.original.values.USD.price
          ),
      },
      {
        header: "Historical change / 3 month",
        accessorKey: "historicalChange3m",
        cell: (info: any) =>
          calculateHistoricalPrice(
            info.row.original.values.USD.percentChange3m,
            info.row.original.values.USD.price
          ),
      },
      {
        header: "Historical change / 6 month",
        accessorKey: "historicalChange6m",
        cell: (info: any) =>
          calculateHistoricalPrice(
            info.row.original.values.USD.percentChange6m,
            info.row.original.values.USD.price
          ),
      },
    ],
    []
  );

  const tableInstance = useReactTable({
    columns,
    data,
    state: {
      sorting,
    },
    onSortingChange: setSorting,
    initialState: { pagination: { pageSize: 5 } },
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  return (
    <>
      <TableStyled>
        <thead>
          {tableInstance.getHeaderGroups().map((headerGroup: any) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header: any) => (
                <TableHeader key={header.id} colSpan={header.colSpan}>
                  {header.isPlaceholder ? null : (
                    <div
                      {...{
                        onClick: header.column.getToggleSortingHandler(),
                      }}
                    >
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                      {{
                        asc: " 🔼",
                        desc: " 🔽",
                      }[header.column.getIsSorted() as string] ?? null}
                    </div>
                  )}
                </TableHeader>
              ))}
            </TableRow>
          ))}
        </thead>
        <tbody>
          {tableInstance.getRowModel().rows.map((row) => (
            <TableRow key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <TableData key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </TableData>
              ))}
            </TableRow>
          ))}
        </tbody>
      </TableStyled>
      <Pagination>
        <PaginationButton
          onClick={() => tableInstance.setPageIndex(0)}
          disabled={!tableInstance.getCanPreviousPage()}
        >
          {"<<"}
        </PaginationButton>
        <PaginationButton
          onClick={() => tableInstance.previousPage()}
          disabled={!tableInstance.getCanPreviousPage()}
        >
          {"<"}
        </PaginationButton>
        <PaginationButton
          onClick={() => tableInstance.nextPage()}
          disabled={!tableInstance.getCanNextPage()}
        >
          {">"}
        </PaginationButton>
        <PaginationButton
          onClick={() =>
            tableInstance.setPageIndex(tableInstance.getPageCount() - 1)
          }
          disabled={!tableInstance.getCanNextPage()}
        >
          {">>"}
        </PaginationButton>
        <PaginationParameters>
          <div>Page</div>
          <strong>
            {tableInstance.getState().pagination.pageIndex + 1} of{" "}
            {tableInstance.getPageCount()}
          </strong>
        </PaginationParameters>
        <PaginationParameters>
          Go to page:
          <PaginationInput
            type="number"
            defaultValue={tableInstance.getState().pagination.pageIndex + 1}
            onChange={(e) => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0;
              tableInstance.setPageIndex(page);
            }}
          />
        </PaginationParameters>
        <PaginationSelect
          value={tableInstance.getState().pagination.pageSize}
          onChange={(e) => {
            tableInstance.setPageSize(Number(e.target.value));
          }}
        >
          {[5, 10, 20, 30, 40, 50].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </PaginationSelect>
      </Pagination>
    </>
  );
};
