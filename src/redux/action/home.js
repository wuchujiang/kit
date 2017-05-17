// import fetch from 'isomorphic-fetch';

import { ADD_TODOS, SUBTRACT_TODOS } from '../types';

export const addAodos = () => ({ type: ADD_TODOS });

export const subtractTodos = () => ({ type: SUBTRACT_TODOS });

/*
export const fetchPosts = (path, postData) => {
    let url = target + path + Tool.paramType(postData);
    return dispatch => {
        dispatch(requestPosts(postData));
        return fetch(url, {
            mode: 'cors',
        }).then(response => {
            if (response.ok) {
                response
                    .json()
                    .then(json => dispatch(receivePosts(path, json)))
            } else {
                console.log("status", response.status);
            }
        }).catch(error => console.log(error))
    }
}
*/
