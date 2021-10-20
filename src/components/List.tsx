import React, {useState} from "react";
import s from './List.module.css';
import {ListType} from "./Todolist";

export type ListPropsType = {
    list: ListType
    changeStatus: (id: number, completed: boolean) => void
    removeList: (id: number) => void
}
export const List: React.FC<ListPropsType> = ({list, changeStatus, removeList}) => {
    let [click, setClick] = useState(true)
    let [title, setTitle] = useState(list.title)

    return <li key={list.id} className={list.completed ? 'isDone' : ''}>
        <input type="checkbox"
               checked={list.completed}
               onChange={(e) => {
                   changeStatus(list.id, e.currentTarget.checked)
               }}

        />
        <span onDoubleClick={() => setClick(false)} onBlur={() => {
            setClick(true)
        }}>
           {click
               ? <span>{title}</span>
               : <input className={s.input}
                        type="text"
                        autoFocus
                        onChange={(e) => {
                            setTitle(e.currentTarget.value)
                        }}/>
           }
            </span>
        <button onClick={() => removeList(list.id)} className={s.removeButton}>x</button>
    </li>
}