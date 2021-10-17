import React, {ChangeEvent} from "react";
import s from './Todolist.module.css'

export type ListType = {
    id: string
    title: string
    isDone: boolean
}

export type TodolistType = {
    value: string
    onChangeValue: (e: ChangeEvent<HTMLInputElement>) => void
    addList: () => void
    lists: Array<ListType>
    removeList: (taskId: string) => void
    changeStatus: (taskId: string, isDone: boolean) => void
}

export const Todolist: React.FC<TodolistType> = ({value, onChangeValue, addList, removeList, changeStatus, lists}) => {


    return <div className={s.todolist}>
        <h2>List</h2>
        <input type="text"
               value={value}
               onChange={onChangeValue}
                className={s.input}
        />
        <button className={s.button} onClick={addList}>+</button>

        <ul>
            {lists.map(l => {


                return <li key={l.id}>
                    <input type="checkbox"
                           checked={l.isDone}
                           onChange={(e) => { changeStatus(l.id, e.currentTarget.checked)}}
                    />{l.title}
                    <button onClick={() => removeList(l.id)}>x</button>
                </li>
            })}
        </ul>
    </div>
}
