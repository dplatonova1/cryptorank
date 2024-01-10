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
  SymbolStyled,
  TableData,
  TableHeader,
  TableRow,
  TableStyled,
} from "./styles";
import { Currency } from "../currency-card/types";
import { calculateHistoricalPrice } from "../../utils/utils";
import Pagination from "./pagination";

export const TableComponent: React.FC<{
  data: Currency[];
  loading: boolean;
  onPaginationChange: any;
  pageCount: number;
  pagination: any;
}> = ({ data, loading, onPaginationChange, pageCount, pagination }) => {
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
    state: { sorting, pagination },
    onSortingChange: setSorting,
    initialState: { pagination: { pageSize: 5 } },
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    manualPagination: true,
    onPaginationChange,
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
      <Pagination table={tableInstance} pageCount={pageCount} />
    </>
  );
};
