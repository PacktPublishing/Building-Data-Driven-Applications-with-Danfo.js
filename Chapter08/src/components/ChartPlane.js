import React, { useRef } from 'react'

export default function ChartPlane({ setChartComp, dataComp, chartType }) {

  const df = dataComp.df

  const compCols = dataComp.columns
  let x;
  let y;
  if (compCols[0] === "index") {
    x = compCols
    console.log(dataComp.values[0])
    //sanity check
    y = dataComp.values[0].map((val, index) => {
      if (typeof val != "string") {
        return compCols[index]
      }
    })
  } else {
    x = df.columns
    const dtypes = df.dtypes
    y = dtypes.map((val, i) => {
      if (val != "string") {
        return x[i]
      }
    })
  }


  const xRef = useRef()
  const yRef = useRef()

  const handleChart = () => {
    const xVal = xRef.current.value
    const yVal = yRef.current.value

    const labels = xVal === "index" ? df.index : df[xVal].values
    const data = yVal === "index" ? df.index : df[yVal].values

    setChartComp((prev) => {
      const newChart = prev.slice()
      const key = newChart.length + 1
      const dict = {
        labels: labels,
        data: data,
        key: "chart" + key,
        type: chartType
      }

      newChart.push(dict)
      return newChart
    })
  }
  return (
    <div>
      <form className="mb-4">
        <div className="mb-4">
          <span className="mr-2">x: </span>
          <select ref={xRef} className="border">
            {
              x.map((val, index) => {
                return <option value={val} key={index} >{val}</option>
              })
            }
          </select>
        </div>
        <div>
          <span className="mr-2">y: </span>
          <select ref={yRef} className="border">
            {
              y.map((val, index) => {
                return <option value={val} key={index}>{val}</option>
              })
            }
          </select>
        </div>
      </form>
      <button onClick={() => handleChart()} className="bg-blue-500 p-2 text-white rounded-sm">generate Chart</button>
    </div>
  )
}
