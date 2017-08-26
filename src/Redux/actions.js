/**
 * Created by fatalerrortxl on 21.08.17.
 */
export const User_Login = 'User_Login';
export const Request_Worklist = 'Request_Worklist';
export const Receive_Worklist = 'Reveive_Worklist';
const server_script_url = 'https://www.xulin-tan.de/scripts/crud.php';


export function userLogin() {
    return {
        type: User_Login
    }
}

export function requestWorklist() {
    return {
        type: Request_Worklist
    }
}

export function receiveWorklist(response) {
    return {
        type: Receive_Worklist,
        list: response
    }
}

export function fetchWorklist() {
    return function (dispatch) {
        // to change state => isfetching
        dispatch(requestWorklist);
        // do asynchronous API CALL
        let postDataToFetch = new FormData();
        postDataToFetch.append('target_function', 'readItems');
        return fetch(server_script_url,{
            method: 'POST',
            mode: 'cors',
            body: postDataToFetch
        }).then(
            response => response.json(),
            error => console.log('An error occured.', error)
        ).then(
            json => {
                dispatch(receiveWorklist(json));
                // console.log(json);
            }
        );
    }
}