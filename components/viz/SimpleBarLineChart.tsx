import React, { FC } from "react";
import * as echarts from "echarts/core";
import { BarChart, LineChart } from "echarts/charts";
import { SVGRenderer } from "echarts/renderers";
import {
  GridComponent,
  DatasetComponent,
  TitleComponent,
  LegendComponent,
  TooltipComponent,
} from "echarts/components";
import ReactEChartsCore from "echarts-for-react/lib/core";

function seriesMaker(color, dataset, type, smooth, showSymbol) {
  const SetSeries = [];

  SetSeries.push({
    data: dataset[1],
    type: type,
    itemStyle: {
      color: color,
    },
    smooth: smooth,
    showSymbol: showSymbol,
  });
  return SetSeries;
}

interface SimpleBarLineChartProps {
  color: string;
  dataset: any;
  type: string;
  smooth: boolean;
  showSymbol: boolean;
}

const SimpleBarLineChartViz: React.FC<SimpleBarLineChartProps> = ({
  color,
  dataset,
  type,
  smooth,
  showSymbol,
}) => {
  console.log('dataset', dataset);
  
  const series = seriesMaker(color, dataset, type, smooth, showSymbol);
  const options = {
    tooltip: {},
    grid: {
      show: false,
    },
    xAxis: {
      type: "category",
      data: dataset[0],
      name: dataset[2][0],
      axisLine: {
        symbol: ["none", "arrow"],
      },
      nameLocation: "middle",
      nameGap: 30,
    },
    yAxis: {
      type: "value",
      name: dataset[2][1],
      axisLine: { onZero: false, show: true, symbol: ["none", "arrow"] },
      nameLocation: "middle",
      nameGap: 50,
    },
    series: series,
  };
  echarts.use([
    BarChart,
    LineChart,
    SVGRenderer,
    GridComponent,
    TitleComponent,
    DatasetComponent,
    LegendComponent,
    TooltipComponent,
  ]);

  return (
    <ReactEChartsCore
      echarts={echarts}
      option={options}
      notMerge={true}
      lazyUpdate={true}
    />
  );
};
export default SimpleBarLineChartViz;
