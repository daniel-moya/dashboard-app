import { useMemo } from "react";
import { Chart } from "react-google-charts";
import { useQuery } from 'react-query';
import { applicationMetrics } from "./mocked-data";

export const demo = [
  ["Task", "Hours per Day"],
  ["Work", 11],
  ["Eat", 2],
  ["Commute", 2],
  ["Watch TV", 2],
  ["Sleep", 7], // CSS-style declaration
];

export const options = {
  pieHole: 0.4,
  is3D: false,
};

function ApplicationMetrics() {
  const { isLoading, error, data } = useQuery('metrics', () =>
    // TODO: Fetch applications from backend
    // fetch('https://api.greatgood.com/applications').then(res =>
    //   res.json()
    // )
    //
    applicationMetrics
  )

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

  if (isLoading) return <>'Loading...'</>

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


