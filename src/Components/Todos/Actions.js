const actions = {

    //hit the api inside the saga
    CREATE_TODO : 'CREATE_TODO',
    createTodo: (payload) => ({type: actions.CREATE_TODO,payload}),

    //update the store data inside the reducer
    ADD_TODO: 'ADD_TODO',
    addTodo: (payload) => ({type: actions.ADD_TODO,payload})
}

export default actions;