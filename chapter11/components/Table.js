import React from "react";
import ReactTable from 'react-table-v6'
import { DataFrame } from 'danfojs/src/core/frame'
import 'react-table-v6/react-table.css'

function DataTable({ dfData, username }) {
  const df = new DataFrame(dfData)
  const removeUserData = df.query({
    column: "users",
    is: "!=",
    to: username
  })
  const columns = removeUserData.columns
  const values = removeUserData.values
  const dataColumns = columns.map((val, index) => {
    return {
      Header: val,
      accessor: val,
      Cell: (props) => (
        <div className={val || ''}>
          <span>{props.value}</span>
        </div>
      ),
      width:
        index === 0 && (1280 * 0.8333 - 30) / columns.length < 130
          ? 130
          : undefined,
    }
  });

  const data = values.map(val => {
    let rows_data = {}
    val.forEach((val2, index) => {
      let col = columns[index];
      rows_data[col] = val2;
    })
    return rows_data;
  })

  return (
    <ReactTable
      data={data}
      columns={dataColumns}
      getTheadThProps={() => {
        return { style: { wordWrap: 'break-word', whiteSpace: 'initial' } }
      }}
      showPageJump={true}
      showPagination={true}
      defaultPageSize={10}
      showPageSizeOptions={true}
      minRows={10}
    />
  )
}

export default DataTable
