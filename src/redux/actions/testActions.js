

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

export const addCount = (val) => {
    return {
        type: 'ADD_COUNT',
        payload: val
    }
}

export const delCount = (val) => {
    return {
        type: 'DEL_COUNT',
        payload: val
    }
}