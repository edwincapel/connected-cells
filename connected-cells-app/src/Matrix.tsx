export enum CellValue {
  ON = "1",
  OFF = "0"
}

interface Position {
  j: number,
  k: number
}

export default class Matrix {
  rows: number
  columns: number
  cells: CellValue[][]
  visitedCells: boolean[][]

  constructor(
    rows: number,
    columns: number,
    matrix: string,
  ) {
    this.rows = rows
    this.columns = columns
    this.cells = []
    this.visitedCells = []

    this.create2DArray(rows, columns, matrix)
  }

  calc(): number {
    let largestResult = 0

    for (let j = 0; j < this.rows; j++) {
      for (let k = 0; k < this.columns; k++) {
        if (this.visitedCells[j][k]) {
          continue
        }

        if (!this.isOn(j,k)) {
          continue
        }

        let result = 0
        const queue = [{j,k}]

        while (queue.length) {
          const cell = queue.shift()
          if (!cell) {
            continue
          }
          if (this.visitedCells[cell.j][cell.k]) {
            continue
          }

          this.visitedCells[cell.j][cell.k] = true

          if (!this.isOn(cell.j, cell.k)) {
            continue
          }

          result += 1
          const cells = this.getSurroundingCells(cell)
          queue.push(...cells)
        }

        if (result > largestResult) {
          largestResult = result
        }
      }
    }

    return largestResult
  }

  create2DArray(rows:number = 0, columns:number = 0, matrix:string = ""): void {
    let matches = matrix.match(/(\d+)/g)

    if (matches == null){
      throw new TypeError("Cannot parse matrix")
    }

    if(matches.length !== rows * columns){
      this.generateErrorMessage(matrix)
    }

    for (var i=0;i<rows;i++) {
      const begin = i * this.columns
      const end = (i + 1) * this.columns
      const row = matches.slice(begin, end)

      if (row.length !== this.columns) {
        this.generateErrorMessage(matrix)
      }

      this.cells.push(row.map(value => value === "0" ? CellValue.OFF : CellValue.ON))
      this.visitedCells[i] = new Array(this.columns).fill(false)
    }
  }

  isOn(j: number, k:number): boolean {
    return this.cells[j][k] === CellValue.ON
  }

  getSurroundingCells({j,k}: Position): Position[]{
    const cells: Position[] = []
    if (j !== 0) {
      if (k !== 0) {
        cells.push({j: j-1, k: k-1})
      }

      cells.push({j: j-1,k})

      if (k !== this.columns - 1) {
        cells.push({j: j-1, k: k+1})
      }
    }

    if (k !== 0) {
      cells.push({j: j, k: k -1})
    }
    if (k !== this.columns - 1) {
      cells.push({j: j, k: k + 1})
    }

    if (j !== this.rows - 1) {
      if (k !== 0) {
        cells.push({j: j + 1, k: k -1})
      }
      cells.push({j: j + 1, k});
      if (k !== this.columns - 1) {
        cells.push({j: j + 1, k: k + 1})
      }
    }

    return cells
  }

  generateErrorMessage(matrix: string): void{
    matrix.trim().split("\n").forEach((row,index) => {
      const match = row.match(/(\d+)/g)

      if (match === null) {
        this.throwErrorMessage(index + 1, 0)
      } else if(match.length !== this.columns) {
        this.throwErrorMessage(index + 1,match.length)
      }
    })
  }

  throwErrorMessage(row: number, length: number): void{
    throw new Error(`Row ${row} is not valid. Expected ${this.columns}, Actual: ${length}`)
  }
}
