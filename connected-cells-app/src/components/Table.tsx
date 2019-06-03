import React from "react"
import {CellValue} from "../Matrix"

interface Props {
  cells: CellValue[][],
}


const Table: React.FC<Props> = (props) => {
  const cells = props.cells.map((row,j) => {
    const columns = row.map((cellValue, k)=>{
      const key = `${j}:${k}`

      const className = cellValue === CellValue.ON ? "bg-dark text-white" :  ''

      return(
        <div key={key} className={`${className} p-1 border border-dark text-center`} style={{height: "50px",width:"50px"}}>
          {cellValue}
        </div>
      )
    })

    return(
      <div key={`row:${j}`} className="d-flex">
        {columns}
      </div>
    )
  })

  return(
    <div className="text-dark">
      {cells}
    </div>
  )
}
export default Table