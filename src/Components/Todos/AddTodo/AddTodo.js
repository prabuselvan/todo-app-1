import React from 'react';
import {Row,Col, Input,Button,Form,FormGroup} from 'reactstrap';

const AddTodo = (props) => {
    return (
        <Row>
            <Col md="8" className="add-todo">
                <Form>
                    <FormGroup row>
                        <Input type="text" placeholder="Add Todo" />
                        <Button color="primary">Add</Button>
                    </FormGroup>
                </Form>
            </Col>
        </Row>
    )
}

export default AddTodo;