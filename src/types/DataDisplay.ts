export interface SimpleRow {
  [key: string]: string | number | JSX.Element;
}

export interface SimpleCol<Row> {
  field: keyof Row;
  headerName: string;
}

export interface YAxis {
  data: number[];
  label?: string;
}

export interface PieData {
  value: number;
  label: string;
};