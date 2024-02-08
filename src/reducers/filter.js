


const reducerFilter = (state = 'ALL', action) => {
    switch(action.type) {
        case 'SET_FILTER':
            return action.payload
        default: 
            return state
    }
}

export const filterage = filtera => {
     return {
        type: 'SET_FILTER',
        payload: filtera
     }
}

export default reducerFilter