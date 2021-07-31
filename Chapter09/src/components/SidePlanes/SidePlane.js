import React from 'react'
import Arithemtic from './Arithemtic'
import Describe from './Describe'
import Df2df from './Df2df'
import Query from './Query'

export default function SidePlanes({dataComp, 
  dataComps,
  setDataComp,
  df_index,
  dfOpsType}) {

    if(dfOpsType === "Arithemtic") {
      return <Arithemtic 
            dataComp={dataComp}
            setDataComp={setDataComp}
      />
    }
    else if(dfOpsType === "Describe") {
      return <Describe 
          dataComp={dataComp}
          setDataComp={setDataComp}
      />
    }
    else if(dfOpsType === "Df2df") {
      return <Df2df 
          dataComp={dataComp}
          dataComps={dataComps}
          df_index={df_index}
          setDataComp={setDataComp}
      />
    } 
    else if(dfOpsType === "Query") {
      return <Query 
            dataComp={dataComp}
            setDataComp={setDataComp}
      />
    }
  
  
  return (
    <div>
      No chart
    </div>
  )
}
