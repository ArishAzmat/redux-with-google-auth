 var reducer = (state,action) =>{ 
    switch(action.type){
        case "LOGIN":{
            console.log("Im in reducer action dispatched.....",action)
            state = {...state}
            state['user'] = action.payload
            console.log("state is set.....",state)
            return state
        }
        default : return state
    }
}

export default reducer
