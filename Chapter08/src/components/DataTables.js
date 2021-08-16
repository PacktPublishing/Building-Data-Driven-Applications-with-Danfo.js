import React from 'react'
import DataTable from './DataTable'

export default function DataTables({ datacomp, setCompIndex, setSidePlane }) {

  return (
    <div>
      {datacomp.map((val, index) => {
        return (
          <>
            <DataTable
              key={index}
              columns={val.columns}
              values={val.values}
              setCompIndex={setCompIndex}
              index={index}
              setSidePlane={setSidePlane}
              keys={val.keys}
            />
          </>
        )
      })}
    </div>
  )
}
