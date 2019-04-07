import React from 'react';
import {Card,CardBody,Button} from 'reactstrap';

const Todo = (props) => {
    const {title,completed} = props.todo;
    return(
        <Card>
            <CardBody>
                <p className="todo-title">{title}</p>
                <Button close />
            </CardBody>
        </Card>
    )
}

export default Todo;