import * as actions from '../Actions/user-action';
let initialState = {
    users: [
    ],
    currentUser:"",
    totaluser:0
}

// Reducers in store to modify state -- don't directly manipulate state
const reducer = (state = initialState, action) =>{
    console.log('Action recieved at reducer***  ', action);
    switch(action.type){
        case actions.FETCH_USERS:
            return {
                users: action.payload.data,
                currentUser:state.currentUser,
                totaluser:action.payload.total
            }
        case actions.UPDATE_USER:
            return {
                 users: action.payload,
                 currentUser:state.currentUser
            }
        case actions.LOGIN_USER:
            return {
                // users: action.payload
                currentUser:action.payload,
                users:state.users
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