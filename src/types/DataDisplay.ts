export interface SimpleRow {
    [key: string]: string | number
}

export interface SimpleCol<Row> {
  field: keyof Row;
  headerName: string;
}
