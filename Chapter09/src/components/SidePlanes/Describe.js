import React from 'react'
export default function Describe({ dataComp, setDataComp }) {

  const describe = () => {

    const df = dataComp.df.describe()
    let column = df.columns.slice()
    column.splice(0, 0, "index")
    const values = df.values
    const indexes = df.index

    const new_values = values.map((val, index) => {
      let new_val = val.slice()
      new_val.splice(0, 0, indexes[index])
      return new_val
    })

    setDataComp(prev => {
      let new_data = prev.slice()
      let dict = {
        columns: column,
        values: new_values,
        df: df
      }
      new_data.push(dict)
      return new_data
    })
  }
  return (
    <div>
      {/* step 1 */}
      <button onClick={() => describe()} className="bg-blue-700 text-white rounded-sm p-2">Describe</button>
    </div>
  )
}
