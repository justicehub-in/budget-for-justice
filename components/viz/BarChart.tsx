import React, { useState, useEffect } from 'react';
import * as echarts from 'echarts/core';
import { BarChart, LineChart } from 'echarts/charts';
import { CanvasRenderer } from 'echarts/renderers';
import {
  GridComponent,
  DatasetComponent,
  TitleComponent,
  LegendComponent,
  TooltipComponent,
} from 'echarts/components';
import ReactEChartsCore from 'echarts-for-react/lib/core';

//  To import all the things at once
// import ReactEcharts from 'echarts-for-react';

interface BarChartProps {
  xAxisLabel: string;
  yAxisLabel: string;
  theme: string[];
  dataset: any;
  stack: boolean;
  Title: string;
  subTitle: string;
  left: string;
  type: string;
  smooth: boolean;
  unit: string;
}

const BarChartViz: React.FC<BarChartProps> = ({
  xAxisLabel,
  yAxisLabel,
  theme,
  dataset,
  stack,
  Title,
  subTitle,
  left,
  type,
  smooth,
  unit,
}) => {
  const [series, setSeries] = useState([]);
  const [option, setOption] = useState({});

  // settting series
  useEffect(() => {
    const vizSeries = [];

    let stackTrue = '';
    if (stack == true) {
      stackTrue = 'x';
    }

    for (
      let columnLength = 1;
      columnLength <= dataset[0].length - 1;
      columnLength++
    ) {
      vizSeries.push({
        type: type,
        barMaxWidht: 16,
        itemStyle: { color: theme[columnLength] },
        stack: stackTrue,
        smooth: smooth,
        label: {
          normal: {
            show: true,
            position: 'top',
            formatter: function () {
              return ''; //d.data;
            },
          },
        },
        // animation: false,
      });
    }

    setSeries(vizSeries);
  }, [dataset]);

  // setting option
  useEffect(() => {
    const vizOptions = {
      legend: {
        top: '17%',
      },
      tooltip: {
        trigger: 'item',
        formatter: function (params) {
          return `${params['seriesName']} - <br />
          ${params['name']} :  ${parseFloat(params['value'][params['componentIndex'] + 1]).toFixed(2)} ${unit}<br />`;
        },
      },
      dataset: { source: dataset },
      grid: {
        show: false,
        top: '30%',
        left: left,
      },
      xAxis: {
        type: 'category',
        name: xAxisLabel,
        axisLine: {
          symbol: ['none', 'arrow'],
        },
        nameLocation: 'middle',
        nameGap: 30,
        axisTick: {
          show: false,
        },
      },
      yAxis: {
        type: 'value',
        name: yAxisLabel,
        axisLine: { onZero: false, show: true, symbol: ['none', 'arrow'] },
        nameLocation: 'middle',
        nameGap: 50,
        nameRotate: 90,
      },
      title: {
        text: Title,
        left: 'center',
        subtext: subTitle,
      },
      series: series,
    };

    setOption(vizOptions);
  }, [series]);

  echarts.use([
    BarChart,
    LineChart,
    CanvasRenderer,
    GridComponent,
    TitleComponent,
    DatasetComponent,
    LegendComponent,
    TooltipComponent,
  ]);

  return (
    <ReactEChartsCore
      echarts={echarts}
      option={option}
      notMerge={true}
      lazyUpdate={true}
      style={{
        height: '100%',
      }}
    />
  );

  // return <ReactEcharts option={options} echarts={echarts} />;
};
export default BarChartViz;
