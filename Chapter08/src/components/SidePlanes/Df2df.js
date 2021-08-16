import React, { useRef } from 'react'
import { concat } from 'danfojs/src/core/concat'

export default function Df2df({ dataComp, dataComps, df_index, setDataComp }) {

  const dfRef = useRef()
  const inpRef = useRef()
  const axisRef = useRef()
  const opsRef = useRef()

  const allOps = [
    "lt", "ge", "ne",
    "eq", "gt", "add",
    "sub", "mul", "div",
    "pow", "concat"
  ]


  const df2df = () => {
    let dfIndex = dfRef.current.value
    let inp = parseInt(inpRef.current.value)
    let axis = parseInt(axisRef.current.value)
    let ops = opsRef.current.value


    if (ops != "concat") {
      let value = dfIndex === "None" ? inp : dataComps[dfIndex].df
      let df = dataComp.df

      let rslt = eval(`df.${ops}(value, axis=${axis})`)

      setDataComp(prev => {
        let new_data = prev.slice()
        let key = new_data.length + 1
        let dict = {
          columns: rslt.columns,
          values: rslt.values,
          df: rslt,
          keys: "df" + key
        }
        new_data.push(dict)
        return new_data
      })
    } else {

      let df2 = dataComps[dfIndex].df
      let df1 = dataComp.df
      let df_concat = concat
      // let rslt = eval(`df_concat({df_list: [df1,df2], axis: axis})`)
      let rslt = concat({ df_list: [df1, df2], axis: axis })

      let column = rslt.columns.slice()
      column.splice(0, 0, "index")

      let rsltValues = rslt.values.map((val, index) => {
        let newVal = val.slice()
        newVal.splice(0, 0, rslt.index[index])
        return newVal
      })

      setDataComp(prev => {
        let new_data = prev.slice()
        let key = new_data.length + 1
        let dict = {
          columns: column,
          values: rsltValues,
          df: rslt,
          keys: "df" + key
        }
        new_data.push(dict)
        return new_data
      })


    }




  }
  return (
    <div>
      <form>
        <div>
          <span className="mr-2"> Operations</span>
          <select ref={opsRef}>
            {
              allOps.map((val, index) => {
                return <option value={val} key={index}>{val}</option>
              })
            }
          </select>
        </div>
        <div>
          <span className="mr-2"> DataFrames</span>
          <select ref={dfRef}>
            <option key={-1}>None</option>
            {
              dataComps.map((val, index) => {
                if (df_index != index) {
                  return <option value={index} key={index}>{`df${index}`}</option>
                }
              })
            }
          </select>
        </div>
        {/* <span className="text-red-400 text-xs">
          don't input any value if a dataframe is chosen,
          one of the two will be chosen by default
        </span> */}
        <div>
          <span>input a value</span>
          <input ref={inpRef} className="border" />
        </div>
        <div>
          <span>axis</span>
          <select ref={axisRef} className="border">
            {
              [0, 1].map((val, index) => {
                return <option value={val} key={index}>{val}</option>
              })
            }
          </select>
        </div>
      </form>
      <button onClick={() => df2df()} className="bg-blue-500 p-2 text-white rounded-sm">generate Dataframe</button>
    </div>
  )
}
