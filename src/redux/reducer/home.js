import {
    ADD_TODOS,
    SUBTRACT_TODOS
} from '../types';
const initstate = 1;

export const home = (state = initstate, action = {}) => {
    switch (action.type) {
        case ADD_TODOS:
            return ++state;
        case SUBTRACT_TODOS:
            return --state;
        default:
            return state;
    }
}