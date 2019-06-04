
import React from "react"
import { 
  Button, 
  Modal, 
  ModalHeader, 
  ModalBody,
  ModalFooter 
} from 'reactstrap'

interface Props {
  modal: boolean,
  toggleFunc: any
}

const InfoModal: React.FC<Props> = (props) => {
  return(
    <>
      <Modal isOpen={props.modal} toggle={props.toggleFunc}>
        <ModalHeader toggle={props.toggleFunc}>Info About this App</ModalHeader>
        <ModalBody>
        Assumptions:
        <ul>
          <li>
              Characters are limited to <code>0</code> or <code>1</code>
            <ul>
              <li>We only read numerical characters</li>
              <li>We treat all <code>0</code>'s as "off"</li>
              <li>We treat all non <code>0</code>'s as "on"</li>
            </ul>
          </li>
          <li>Rows and Columns are always numbers</li>
          <li>Matrix has no starting or trailing spaces</li>
          <li className="text-danger">Desktop : This Matrix UI works best when number of Col is less than or equals <code>12</code></li>
          <li className="text-danger">Mobile : This Matrix UI works best when number of Col is less than or equals <code>8</code></li>
        </ul>

        Steps:
        <ol>
          <li>Insert Row and Column, that will generate a default matrix of <code>0</code>'s</li>
          <li>Insert Custom Matrix or Edit Default Matrix</li>
        </ol>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={props.toggleFunc}>Close</Button>
        </ModalFooter>
      </Modal>
    </>
  )
}

export default InfoModal