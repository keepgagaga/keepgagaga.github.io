import { useState } from 'react';
import './index.css';

function MultiDrag() {

    const [leftTodos, setLeftTodos] = useState([{ label: 'left 1', id: 'l1' }, { label: 'left 2', id: 'l2' }, { label: 'left 3', id: 'l3' }, { label: 'left 4', id: 'l4' }, { label: 'left 5', id: 'l5' }]);
    const [rightTodos, setRightTodos] = useState([{ label: 'right 1', id: 'r1' }, { label: 'right 2', id: 'r2' }, { label: 'right 3', id: 'r3' }, { label: 'right 4', id: 'r4' }, { label: 'right 5', id: 'r5' }]);

    function onClick(e) {
        console.log(e);
    }

    return (
        <>
            <div className="row">
                <div className='column'>
                    <p>left todo</p>
                    {
                        leftTodos.map(l => <span className='todo-item' draggable='true' key={l.id} onClick={() => { onClick(l.label) }} >{l.label}</span>)
                    }
                </div>
                <div className='column'>
                    <p>right todo</p>
                    {
                        rightTodos.map(r => <span className='todo-item' draggable='true' key={r.id} onClick={() => { onClick(r.label) }} >{r.label}</span>)
                    }
                </div>
            </div>

        </>
    )
}

export default MultiDrag;