import React,{Component} from 'react';
import AddTodo from './AddTodo';

class AddTodoContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <AddTodo />
        )
    }
}

export default AddTodoContainer;