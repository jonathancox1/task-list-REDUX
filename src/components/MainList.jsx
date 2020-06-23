import React, { useState } from 'react'
import { addItem, delItem } from '../redux/actions/testActions'
import { useSelector, useDispatch } from 'react-redux'



const MainList = () => {
    const [content, setContent] = useState('');
    const [title, setTitle] = useState('');
    const state = useSelector(state => state.fluxState)
    const dispatch = useDispatch();

    return (
        <div>
            <h3>Task List in Redux</h3>
            task
            <input value={title} onChange={e => setTitle(e.target.value)}></input>
            <br />
            description
            <input value={content} onChange={e => setContent(e.target.value)}></input>
            <br />
            <button onClick={() => dispatch(addItem(title, content), setContent(''), setTitle(''))}>Add item</button>
            <br />
            <ul>
                {state.map((item, index) => {
                    return (
                        <li>
                            {item.name} {item.description}
                            <button onClick={() => dispatch(delItem(index))}>Delete</button>
                            <br />
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default MainList

