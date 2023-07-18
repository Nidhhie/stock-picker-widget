import React, { useEffect, useState } from "react";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import { getIntraDayStocks } from "../api";

function StockIntraDayChart({ symbol }: { symbol: string }) {
  const [chartdata, setChartData] = useState<any[]>([]);

  useEffect(() => {
    getIntraDayStocks(symbol).then((value) => {
      setChartData(value);
    });
  }, [symbol]);

  const options = {
    chart: {
      backgroundColor: "transparent"
    },
    title: {
      text: "Intra Day Stock Price",
      align: "center"
    },
    xAxis: {
      type: "datetime",
      width: "95%"
    },
    series: [
      {
        name: "Price",
        data: chartdata
      }
    ]
  };

  return (
    <HighchartsReact
      highcharts={Highcharts}
      options={options}
      constructorType={"chart"}
    />
  );
}

export default StockIntraDayChart;
