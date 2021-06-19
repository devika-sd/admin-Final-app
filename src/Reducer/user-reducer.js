import * as actions from '../Actions/user-action';
let initialState = {
    users: [
    ],
    currentUser:"",
    message:""
}

// Reducers in store to modify state -- don't directly manipulate state
const reducer = (state = initialState, action) =>{
    console.log('Action recieved at reducer***  ', action);
    switch(action.type){
        case actions.FETCH_USERS:
            return {
                ...state,
                users: action.payload,
            }
        case actions.UPDATE_USER:
            return {
                 ...state,
                 users: action.payload,
            }
        case actions.LOGIN_USER:
            return {
                // users: action.payload
                ...state,
                currentUser:action.payload.data,
                message:action.payload.message
            }
        case actions.ADD_USER:
            if(action.payload.success){
                return {
                    message: 'User successfully added!'
                }
            }
            else{
                return {
                    message: 'User failed to added!'
                }
            } 
        default : return state
    }
 
}

export default reducer;