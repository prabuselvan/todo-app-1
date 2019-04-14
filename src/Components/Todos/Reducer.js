import actions from './Actions';
const initialState = [];

const Reducer = (state = initialState,action) => {
    switch(action.type) {
        case actions.ADD_TODO:
            const newState = JSON.parse(JSON.stringify(state));
            newState.push({
                ...action.payload,
                id: state.length + 1
            });
            return newState;
        default:
            return state;
    }
}

export default Reducer;