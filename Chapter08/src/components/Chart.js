import React, { useState } from "react";
import { Bar as BarChart } from 'react-chartjs-2';
import { Line as LineChart } from "react-chartjs-2";
import { Pie as PieChart } from "react-chartjs-2";
import Draggable from 'react-draggable';

export default function Chart({ labels, dataset, type}) {
 
  let data = {
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
      data: dataset,
    }]
  };
  let options = {
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
      <Draggable>
        <div className="max-w-md">
          <BarChart data={data} options={options} width="100" height="100" />
        </div>
      </Draggable>

    )
  }
  else if (type === "LineChart") {
    return (
      <Draggable>
        <div className="max-w-md">
          <LineChart data={data} options={options} width="100" height="100" />

        </div>
      </Draggable>

    )
  }

  else if (type === "PieChart") {
    return (
      <Draggable>
        <div className="max-w-md">
          <PieChart data={data} options={options} width="100" height="100" />

        </div>
      </Draggable>

    )
  }
  return (
    <>
      <div>
        <h1>NO Chart </h1>
      </div>

    </>
  )
}
