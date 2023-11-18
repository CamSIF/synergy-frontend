import { ReactNode } from "react";

export interface SimpleRow {
    [key: string]: ReactNode
}

export interface SimpleCol<Row> {
  field: keyof Row;
  headerName: string;
}
