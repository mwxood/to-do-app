import React, { useState } from 'react';
import './todoUi.css';
import { Container, Row, Col, InputGroup, Button, Form, Alert} from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

const TodoUi = (props) => {
    const [value, setValue] = useState('');
    const [message, setMessage] = useState(false);

    const inputValueHandler = (event) => {
        setValue(event.target.value);
    }

    const addTaskHandler = () => {
        setMessage(false)
          if(value.trim().length === 0) {
            setMessage(true)
            return;
          }

     

          props.addTask(1, 2)
          console.log(props.createEl)
          setValue('');

          

          
    }



    return(
        <Container className='mt-5'>
            {
                 message && (
                    <Row className='justify-content-center mt-5 mb-5'>
                        <Col>
                        <Alert variant="danger" className='text-center'>Please fill the input</Alert>
                        </Col>
                    </Row>
                 )
            }
            <Row className='justify-content-center'>
                <Col className='col-md-6'>
                    <InputGroup className='mb-3'>
                        <Form.Control placeholder='Enter your task' value={value} onChange={inputValueHandler}></Form.Control>
                        <Button onClick={addTaskHandler}>Add Task</Button>
                    </InputGroup>
                </Col>
            </Row>
        </Container>
    );
}

export default TodoUi;