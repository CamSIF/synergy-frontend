export interface LineChartComponentProps{
    // xAxis: [{}] //e.g. xAxis={[{data: [1, 2, 3, 5, 8, 10]}]}
    xAxis: number[]
    yAxis: number[]
    width?: number  
    height?: number
    title?: string
  }