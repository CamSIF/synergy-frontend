export interface FundOverview {
  total_value: number;
  total_cash: number;
  overall_profit: number;
}

export interface FundPerEquity {
  [key: string]: number;
}
