import {takeEvery,call,put} from 'redux-saga/effects';
import axios from 'axios';
import actions from './Actions';

//worker saga
function* createTodo(action) {
    console.log(action.payload.id);
    const {id,todo} = action.payload;
    //hit the api
    const result = yield call(axios.post,`https://jsonplaceholder.typicode.com/todos?userId=${id}`,{
        userId: id,
        title: todo,
        completed: false
    });

    console.log(result.data);

    //dispatch another action for updating the store
    yield put(actions.addTodo(result.data));

}

//watcher saga
export default function* watcherSaga() {
    yield takeEvery(actions.CREATE_TODO,createTodo);
}
