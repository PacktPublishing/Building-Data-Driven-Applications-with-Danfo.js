import React, { useRef } from 'react'

export default function Arithemtic({ dataComp, setDataComp }) {

  const seriesOps = ["median", "min", "max", "std", "var", "count", "sum"]
  const dfOps = ["cumsum", "cummax", "cumprod", "cummin"]
  const all = ["median", "min", "max", "std", "var", "count", "sum",
    "cumsum", "cummax", "cumprod", "cummin"]

  const axisRef = useRef()
  const opsRef = useRef()

  const arithemtic = () => {

    let sOps = opsRef.current.value
    let axis = axisRef.current.value
    // let df;
    if (seriesOps.includes(sOps)) {
      let df_comp = dataComp.df
      let df = eval(`df_comp.${sOps}(axis=${axis})`)

      let columns = Array.isArray(df.columns) ? df.columns.slice() : [df.columns]
      columns.splice(0, 0, "index")
      let values = df.values.map((val, index) => {

        return [df.index[index], val]
      })

      setDataComp(prev => {
        let new_data = prev.slice()
        let dict = {
          columns: columns,
          values: values,
          df: df
        }
        new_data.push(dict)
        return new_data
      })

    } else {

      let df_comp2 = dataComp.df
      let df = eval(`df_comp2.${sOps}({axis:${axis}})`)

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
  }

  return (
    <div>
      <form>
        <div>
          <span className="mr-2">Operation</span>
          <select ref={opsRef} className="border">
            {
              all.map((val, index) => {
                return <option value={val} key={index}>{val}</option>
              })
            }
          </select>
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
      <button onClick={() => arithemtic()} className="bg-blue-700 text-white rounded-sm p-2">Submit</button>
    </div>
  )
}
