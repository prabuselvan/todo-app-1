import React from 'react';
import {Row,Col, Input,Button,Form,FormGroup} from 'reactstrap';
import Todo from './../Todo';

const TodoList = (props) => {
    return (
        <Row>
            <Col md="8" className="add-todo">
            {
                props.todos.map(todo => <Todo todo={todo}/>)    
            }
            </Col>
        </Row>
    )
}

export default TodoList;