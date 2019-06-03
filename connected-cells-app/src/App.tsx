import React,{ useState } from 'react'
import './App.css'
import Navbar from "./components/Navbar"
import ConnectedCells from "./Matrix"
import { Alert, Container, Row, Col, Form, FormGroup, Label, Input, Button} from "reactstrap"
import Table from "./components/Table"
import DEFAULT_MATRIX from './utils/DefaultMatrix'
import RANDOM_MATRIX from './utils/RandomMatrix'

const App: React.FC = () => {
  const [rows, setRows] = useState(5)
  const [cols, setCols] = useState(5)
  const [matrix, setMatrix] = useState(DEFAULT_MATRIX(rows,cols))
  
  let answer: JSX.Element | null = null

  const handleReset = () => {
    let randomRows = Math.floor(Math.random() * 10) + 1
    let randomCols = Math.floor(Math.random() * 10) + 1
    
    setCols(randomCols)
    setRows(randomRows)
    const mat = RANDOM_MATRIX(randomRows, randomCols)
    console.log(mat)
    setMatrix(mat)
  }


  try {
    const connectedCells = new ConnectedCells(rows, cols, matrix)
    answer = (
      <>
        <Alert color="success" className="w-100 rounded-0 text-center">
          Largest Area: {connectedCells.calc()}
        </Alert>
        <Container fluid className="d-flex justify-content-center align-items-center mt-5">
          <Table cells={connectedCells.cells} />
        </Container>
      </>
    )
  } catch(error) {
    answer = (
      <>
        <Alert color="danger" className="w-100 rounded-0 text-center">
          Error: {error.message}
        </Alert>
        <Container fluid className="d-flex justify-content-center align-items-center mt-5">
          <Row className="border border-dark p-2">
            <Col md="10">
              Steps:
              <br/>
              1) Insert Row and Column, that will generate a default matrix of 0's <br/><br/>
              2) Insert Custom Matrix or Edit Default Matrix
            </Col>
          </Row>
        </Container>
      </>
    )
  }

  return (
    <>
      <Navbar/>
      <Container fluid className="h-100">
        <Row className="h-100">
          <Col md="6" className="d-flex justify-content-center align-items-center mb-2">
            <Form className="w-75">
              <FormGroup>
                <Label for="rows">Rows</Label>
                <Input 
                  type="number" 
                  name="rows" 
                  placeholder="Rows"
                  onChange={event => { 
                    setRows(parseInt(event.target.value))
                    setMatrix(DEFAULT_MATRIX(parseInt(event.target.value), cols))
                  }} 
                  value={rows.toString()}
                />
              </FormGroup>  
              <FormGroup>
                <Label for="rows">Columns</Label>
                <Input 
                  type="number" 
                  name="cols" 
                  placeholder="Columns"
                  onChange={event => {
                     setCols(parseInt(event.target.value))
                     setMatrix(DEFAULT_MATRIX(rows, parseInt(event.target.value)))
                    }
                  } 
                  value={cols.toString()}
                />
              </FormGroup>
              {
                rows && cols
                ? <FormGroup>
                    <Label for="exampleText">Matrix</Label>
                    <Input
                      type="textarea"
                      name="cols"
                      rows={rows}
                      onChange={event => { setMatrix(event.target.value)}}
                      value={matrix}
                      placeholder="INSERT MATRIX HERE"
                      style={{fontFamily: "monospace", fontSize: "1.5rem"}}
                    />
                  </FormGroup>
                : <div>
                    <Alert color="danger">
                      Please Insert Row and Columns
                    </Alert>
                  </div>
              }
              <Button
                onClick={handleReset}
              >
                Randomize
              </Button>
            </Form>
          </Col>
          <Col md="6" className="border-left p-0 mb-2">
            {answer}
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
