import { Currency, CurrencyValue } from "../../types";

export interface TableProps {
  data: Currency[];
  loading: boolean;
  onPaginationChange: any;
  pageCount: number;
  pagination: any;
}

export interface RowData {
  row: {
    original: {
      images: { [x: string]: string | undefined };
      name: string | number | null | undefined;
      symbol: string;
      values: {
        USD: CurrencyValue;
      };
    };
  };
  getValue: () => number;
}

export interface Header {
  id: React.Key | null | undefined;
  colSpan: number | undefined;
  isPlaceholder: boolean;
  column: {
    getToggleSortingHandler: () => any;
    columnDef: {
      header:
        | string
        | number
        | boolean
        | React.ComponentType<any>
        | React.ReactElement<any, string | React.JSXElementConstructor<any>>
        | Iterable<React.ReactNode>
        | React.ReactPortal
        | null
        | undefined;
    };
    getIsSorted: () => string;
  };
  getContext: () => any;
}
