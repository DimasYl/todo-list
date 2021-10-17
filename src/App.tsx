import React, {ChangeEvent, useState} from 'react';
import './App.css';
import {Todolist} from './Todolist';
import {v1} from "uuid";

function App() {

    let [lists, setLists] = useState([
        {id: v1(), title: 'Зарядка', isDone: true},
        {id: v1(), title: 'Завтрак', isDone: true},
        {id: v1(), title: 'Сходить в магаз', isDone: true},
        {id: v1(), title: 'Поработать', isDone: false},
    ])
    let [value, setValue] = useState('')

    const addList = () => {
        if (value !== '') {
            let list = {id: v1(), title: value, isDone: false}
            setLists([...lists, list])
            setValue('')
        }
    }

    const removeList = (taskId: string) => {
        let filterList = lists.filter(l => l.id !== taskId)
        setLists(filterList)
    }

    const onChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }

    const changeStatus = (taskId: string, isDone: boolean) => {
        let list = lists.find(l => l.id === taskId)
        if (list) {
            list.isDone = isDone
            setLists([...lists])
        }
    }

    return (
        <div className="App">
            <Todolist value={value}
                      onChangeValue={onChangeValue}
                      addList={addList}
                      removeList={removeList}
                      changeStatus={changeStatus}
                      lists={lists}
            />
        </div>
    );
}

export default App;
