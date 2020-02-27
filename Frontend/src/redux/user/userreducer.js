const defaultUsers = {
        username:'',
        password:''
}
const initialState = {
    users:defaultUsers
}

export const UserReducers = (state = initialState,action) =>{
    switch(action.type){
        case 'LOGIN':
        return{
    
        }
        default:return state;
    }
}