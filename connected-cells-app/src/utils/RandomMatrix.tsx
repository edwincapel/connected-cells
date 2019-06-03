const random_matrix = (rows:number = 0, columns:number = 0) => {
  let matrix = ""

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      matrix += `${Math.floor((Math.random() * 2))} `
    }
    matrix += "\n"
  }

  return matrix
}

export default random_matrix