import React, {ChangeEvent, useState} from 'react';
import './App.css';
import {Todolist} from './components/Todolist';
import {fakeApi} from "./fakeApi/fakeApi";

function App() {

    let [lists, setLists] = useState(fakeApi)
    let [value, setValue] = useState('')
    let [error, setError] = useState('')

    const addList = () => {
        if (value !== '') {
            let list = {id: Date.now(), title: value, completed: false}
            setLists([list, ...lists])
            setValue('')
        } else {
            setError('Enter correct value')
        }
    }

    const removeList = (taskId: number) => {
        let filterList = lists.filter(l => l.id !== taskId)
        setLists(filterList)
    }

    const onChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
        setError('')
    }

    const changeStatus = (taskId: number, completed: boolean) => {
        let list = lists.find(l => l.id === taskId)
        if (list) {
            list.completed = completed
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
                      error={error}
            />
        </div>
    );
}

export default App;
