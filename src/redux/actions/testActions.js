

export const addItem = (title, content) => {
    return {
        type: 'ADD_ITEM',
        payload: { title, content }
    }
}

export const delItem = (index) => {
    return {
        type: 'DEL_ITEM',
        payload: index
    }
}