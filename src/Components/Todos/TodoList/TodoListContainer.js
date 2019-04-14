import React,{Component} from 'react';
import {connect} from 'react-redux';
import TodoList from './TodoList';

class TodoListContainer extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return(
            <TodoList todos={this.props.todos}/>
        )
    }
}

const mapStateToProps = (state) => {
    return state;
}

export default connect(mapStateToProps)(TodoListContainer);