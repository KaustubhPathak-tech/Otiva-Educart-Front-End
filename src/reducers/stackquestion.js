const stackReducer=(state={data:null},action)=>{
    switch(action.type){
        case "STACK_EXCHANGE":
            return { ...state, data: action.payload };
        default:
            return state;
    }
}


export default stackReducer;