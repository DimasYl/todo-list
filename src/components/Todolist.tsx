import React, {ChangeEvent, KeyboardEvent} from "react";
import s from './Todolist.module.css'
import {List} from "./List";

export type ListType = {
    id: number
    title: string
    completed: boolean
}

export type TodolistType = {
    value: string
    error: string
    onChangeValue: (e: ChangeEvent<HTMLInputElement>) => void
    addList: () => void
    lists: Array<ListType>
    removeList: (taskId: number) => void
    changeStatus: (taskId: number, completed: boolean) => void
}

export const Todolist: React.FC<TodolistType> = ({
                                                     value,
                                                     error,
                                                     onChangeValue,
                                                     addList,
                                                     removeList,
                                                     changeStatus,
                                                     lists
                                                 }) => {

    const onKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            addList()
        }
    }

    return <div className={s.todolist}>
        <h2>Todo-list</h2>
        <input type="text"
               value={value}
               onChange={onChangeValue}
               onKeyPress={onKeyPress}
               className={s.input}
        />

        <button className={s.addButton} onClick={addList}>+</button>
        {!!error && <div className={s.error}>{error}</div>}
        <ul>
            {lists.map(l => <List key={l.id} list={l} removeList={removeList} changeStatus={changeStatus} />)}
        </ul>
    </div>
}

