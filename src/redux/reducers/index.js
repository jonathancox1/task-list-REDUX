const initalState = {
    fluxState: [{
        name: 'item title',
        description: 'description'
    }]
}
function testReducer(state = initalState, action) {
    switch (action.type) {
        case 'ADD_ITEM':
            console.log(action.payload)
            return { ...state, fluxState: [...state.fluxState, { name: action.payload.title, description: action.payload.content }] }
        case 'DEL_ITEM':
            const remainingItems = state.fluxState.filter((item, index) => {
                if (index !== action.payload) {
                    return true
                } return false
            })
            return { ...state, fluxState: remainingItems }
        default:
            return state;
    }
}

export default testReducer;