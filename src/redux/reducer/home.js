import {
   ADD_TODOS
} from '../types';
const initstate = {
    counter: 1
}
export const home = (state = initstate, action = {}) => {
    switch(action.type) {
        case ADD_TODOS:
            return state.counter++;
        default :
            return state;
    }
}
