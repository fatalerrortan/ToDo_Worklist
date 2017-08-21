import {User_Login} from './actions'
const initState= {
    isLoggedIn: false
}

const reducer = function reducer(state = initState, action) {
    switch (action.type){
        case User_Login:
            return Object.assign({},state,{
                isLoggedIn: true
            });
        default:
            return state;
    }
}

export default reducer;
