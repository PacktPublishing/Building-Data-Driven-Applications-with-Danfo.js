import React from 'react'
import Chart from './Chart'

export default function ChartsViz({chartComp}) {

  return (
    <div>
      {
        chartComp.map((chart)=> {
          console.log(chart.key)
          return(
            <>

            <Chart 
              labels={chart.labels}
              dataset={chart.data}
              type={chart.type}
              del={chart.key}
          />
          </>
          )
        })
      }
    </div>
  )
}
