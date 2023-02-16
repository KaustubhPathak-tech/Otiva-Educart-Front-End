const fetch_current_userReducer = (state = null,action) =>{
    switch(action.type){
        case 'FETCH_CURRENT_USER':
           return action.payload;
        default:
            return state;
    }
}

export default fetch_current_userReducer