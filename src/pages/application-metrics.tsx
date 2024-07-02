import { useMemo } from "react";
import { Chart } from "react-google-charts";
import { useQuery } from 'react-query';
import { getMetrics } from "../api/api";

export const options = {
  pieHole: 0.4,
  is3D: false,
};

function ApplicationMetrics() {
  const { isLoading, error, data } = useQuery('metrics', () => getMetrics())

  const chartData = useMemo(() => {
    if (!data) {
      return [];
    }

    return [
      ["Status", "Amount"],
      ["Approved", data?.approved],
      ["Rejected", data?.rejected],
      ["Cancelled", data?.cancelled],
      ["Ready for Review", data?.review],
      ["In progress", data?.progress],
    ];

  }, [data]);

  if (isLoading) return <div className="load-bar">Loading Metrics...</div>

  if (error) return <>'An error has occurred'</>

  return (
    <div className="pie-chart">
      <Chart
        chartType="PieChart"
        width="100%"
        height="30vh"
        data={chartData}
        options={options}
      />
    </div>
  );
}

export default ApplicationMetrics;


