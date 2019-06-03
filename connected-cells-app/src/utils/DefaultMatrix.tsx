const default_matrix = (rows:number = 0, columns:number = 0) => {
  let matrix = ""

  for (let i = 0; i < rows; i++) {
    matrix += ("0 ").repeat(columns) 
    matrix += "\n"
  }

  return matrix
}

export default default_matrix