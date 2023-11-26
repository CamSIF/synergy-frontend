export interface SimpleRow {
  [key: string]: string | number;
}

export interface SimpleCol<Row> {
  field: keyof Row;
  headerName: string;
}

export interface YAxis {
  data: number[];
  color: string;
  label?: string;
}
