import React from "react";
import ReactTable from 'react-table-v6'
import Draggable from 'react-draggable';
import 'react-table-v6/react-table.css'

function DataTable({ columns, values, setCompIndex, index, setSidePlane, remover, keys }) {

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

  const handleSidePlane = () => {
    setCompIndex(index)
    // setSidePlane(true)
  }
  return (
    <Draggable >
      <div className="w-1/2" onClick={() => handleSidePlane()}>
        {/* <button onClick={()=> remover(keys)} className="bg-red-700 text-white rounded-sm p-2">X</button> */}
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
      </div>
    </Draggable>
  )


}

export default DataTable
