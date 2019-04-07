import React,{Component} from 'react';
import TodoList from './TodoList';

class TodoListContainer extends Component {
    constructor(props) {
        super(props);

        this.todos = [{
                userId: 1,
                id: 1,
                title: "delectus aut autem",
                completed: false
            },
            {
                userId: 1,
                id: 2,
                title: "quis ut nam facilis et officia qui",
                completed: false
            },
            {
                userId: 1,
                id: 3,
                title: "fugiat veniam minus",
                completed: false
            },
            {
                userId: 1,
                id: 4,
                title: "et porro tempora",
                completed: true
            }];
    }

    render() {
        return(
            <TodoList todos={this.todos}/>
        )
    }
}

export default TodoListContainer;