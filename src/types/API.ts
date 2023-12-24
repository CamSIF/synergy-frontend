export interface FundOverview {
  total_value: number;
  total_cash: number;
  overall_profit: number;
  percentage_pnl: number;
}

export interface FundPerEquity {
  [key: string]: number;
}

export interface FundPNL {
  dates: string[],
  values: number[]
}