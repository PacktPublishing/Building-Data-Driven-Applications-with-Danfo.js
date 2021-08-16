import React, { useRef } from 'react'

export default function Query({ dataComp, setDataComp }) {

  const columnRef = useRef()
  const logicRef = useRef()
  const valuesRef = useRef()

  const columns = dataComp.columns
  const logics = [">", "<", "<=", ">=", "==", "!="]

  const query = () => {

    const qColumn = columnRef.current.value
    const qLogic = logicRef.current.value
    const qValue = valuesRef.current.value

    const df = dataComp.df.query({ column: qColumn, is: qLogic, to: qValue })

    setDataComp(prev => {
      let new_data = prev.slice()
      let dict = {
        columns: df.columns,
        values: df.values,
        df: df
      }
      new_data.push(dict)
      return new_data
    })
  }

  return (
    <div>
      <form>
        <div>
          <span className="mr-2">Column</span>
          <select ref={columnRef} className="border">
            {
              columns.map((column, index) => {
                return <option value={column}>{column}</option>
              })
            }
          </select>
        </div>
        <div>
          <span className="mr-2">is</span>
          <select ref={logicRef} className="border">
            {
              logics.map((logic, index) => {
                return <option value={logic}>{logic}</option>
              })
            }
          </select>
        </div>
        <div>
          <span className="mr-2">to</span>
          <input ref={valuesRef} placeholder="value" className="border" />
        </div>
      </form>
      <button onClick={() => query()} className="bg-blue-700 text-white rounded-sm p-2">Query</button>
    </div>
  )
}
