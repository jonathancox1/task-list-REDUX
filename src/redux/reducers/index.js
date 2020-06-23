const initalState = {
    fluxState: [{
        name: 'walk the dog',
        description: 'description'
    }],
    count: 0
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
        case 'ADD_COUNT':
            return { ...state, count: state.count + action.payload }
        case 'DEL_COUNT':
            return { ...state, count: state.count - action.payload }
        default:
            return state;
    }
}

export default testReducer;