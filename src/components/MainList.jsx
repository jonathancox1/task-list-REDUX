import React, { useState } from 'react'
import { addItem, delItem, addCount, delCount } from '../redux/actions/testActions'
import { useSelector, useDispatch } from 'react-redux'



const MainList = () => {
    const [content, setContent] = useState('');
    const [title, setTitle] = useState('');
    const state = useSelector(state => state.fluxState)
    const count = useSelector(state => state.count)
    const dispatch = useDispatch();

    return (
        <div>
            <h3>Task List in Redux</h3>
            <label>task</label>
            <input value={title} onChange={e => setTitle(e.target.value)}></input>
            <br />
            <label>description</label>
            <input value={content} onChange={e => setContent(e.target.value)}></input>
            <br />
            <button onClick={() => dispatch(addItem(title, content), setContent(''), setTitle(''))}>Add item</button>
            <br />
            <ul>
                {state.map((item, index) => {
                    return (
                        <li>
                            {item.name} - {item.description}
                            <button onClick={() => dispatch(delItem(index))}>Delete</button>
                            <br />
                        </li>
                    )
                })}
            </ul>
            <br />
            <h3>Counter in Redux</h3>
            <h4>{count}</h4>
            <button onClick={() => dispatch(delCount(5))}>-5</button>
            <button onClick={() => dispatch(delCount(1))}>-</button>
            <button onClick={() => dispatch(addCount(1))}>+</button>
            <button onClick={() => dispatch(addCount(5))}>+5</button>
        </div>
    )
}

export default MainList

