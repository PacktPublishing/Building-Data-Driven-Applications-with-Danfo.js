import React from "react"
import { DataFrame } from 'danfojs/src/core/frame'
import { Pie as PieChart } from "react-chartjs-2";
import { Bar as BarChart } from 'react-chartjs-2';

export default function ValueCounts({ data, column, username, type }) {
  const df = new DataFrame(data)
  const removeUserData = df.query({
    column: "users",
    is: "!=",
    to: username
  })
  const countsSeries = removeUserData[column].value_counts()
  const labels = countsSeries.index
  const values = countsSeries.values

  countsSeries.print()
  const dataChart = {
    labels: labels,
    datasets: [{
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgba(255,99,132,1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 1,
      data: values,
    }]
  };
  const options = {
    scales: {
      xAxes: [{
        stacked: true
      }],
      yAxes: [{
        stacked: true
      }]
    }
  }
  if (type === "BarChart") {
    return (
      <div className="max-w-md">
        <BarChart data={dataChart} options={options} width="100" height="100" />
      </div>

    )
  } else {
    return (<div className="max-w-md">
      <PieChart data={dataChart} options={options} width="100" height="100" />
    </div>)
  }
}