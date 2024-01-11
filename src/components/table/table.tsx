import React, { useMemo, useState } from "react";
import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  flexRender,
  SortingState,
  Row,
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
import { calculateHistoricalPrice } from "../../utils/utils";
import Pagination from "./pagination";
import { RowData, TableProps } from "./types";

export const TableComponent = (props: TableProps) => {
  const { data, loading, onPaginationChange, pageCount, pagination } = props;
  const [sorting, setSorting] = useState<SortingState>([]);
  const columns = useMemo(
    () => [
      {
        header: "Name",
        accessorKey: "name",
        cell: (info: RowData) => {
          return (
            <NameCellStyled>
              <NameCellImage
                src={info.row.original.images["16x16"]}
              ></NameCellImage>
              <NameStyled>
                {info.row.original.name}{" "}
                <SymbolStyled>{info.row.original.symbol}</SymbolStyled>
              </NameStyled>
            </NameCellStyled>
          );
        },
      },
      {
        header: "Price USD",
        accessorKey: "values.USD.price",
        cell: (info: RowData) => {
          return `$ ${info.getValue().toFixed(2)}`;
        },
      },
      {
        header: "Circulating Supply",
        accessorKey: "circulatingSupply",
        cell: (info: RowData) => {
          return `${info.row.original.symbol} ${Intl.NumberFormat("en", {
            notation: "compact",
          }).format(info.getValue())}`;
        },
      },
      {
        header: "Market Cap",
        accessorKey: "values.USD.marketCap",
        cell: (info: RowData) => {
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
        cell: (info: RowData) =>
          calculateHistoricalPrice(
            info.row.original.values.USD.percentChange24h,
            info.row.original.values.USD.price
          ),
      },
      {
        header: "Historical change / week",
        accessorKey: "historicalChange7d",
        cell: (info: RowData) =>
          calculateHistoricalPrice(
            info.row.original.values.USD.percentChange7d,
            info.row.original.values.USD.price
          ),
      },
      {
        header: "Historical change / month",
        accessorKey: "historicalChange30d",
        cell: (info: RowData) =>
          calculateHistoricalPrice(
            info.row.original.values.USD.percentChange30d,
            info.row.original.values.USD.price
          ),
      },
      {
        header: "Historical change / 3 month",
        accessorKey: "historicalChange3m",
        cell: (info: RowData) =>
          calculateHistoricalPrice(
            info.row.original.values.USD.percentChange3m,
            info.row.original.values.USD.price
          ),
      },
      {
        header: "Historical change / 6 month",
        accessorKey: "historicalChange6m",
        cell: (info: RowData) =>
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
