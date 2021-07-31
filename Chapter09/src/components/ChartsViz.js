import React from 'react'
import Chart from './Chart'

export default function ChartsViz({chartComp,setChartComp}) {
  const remover = (key) => {
    setChartComp(chartComp.filter((el) => el.key !==key));
  }
  return (
    <div>
      {
        chartComp.map((chart)=> {
          console.log(chart.key)
          return(
            <>

         {/* <button onClick={()=> remover(chart.key)} className="bg-red-700 text-white rounded-sm p-2">Delete</button>  */}
            <Chart 
              labels={chart.labels}
              dataset={chart.data}
              type={chart.type}
              del={chart.key}
              remover={remover}
          />
          </>
          )
        })
      }
    </div>
  )
}
