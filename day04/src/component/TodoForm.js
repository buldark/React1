import React, { useRef, useState } from 'react';
import styles from '../css/TodoForm.module.css'

const TodoForm = ({onAdd}) => {
    const [text ,setText] =useState('')
    const textRef  =useRef()
    const onInput=(e)=>{
        const{value} = e.target
        setText(value)
    }
const onSubmit =(e) => {
    e.preventDefault()
//text의 값이 없다면 그냥 빠져나오는??
    if(!text) return
    onAdd(text)
    setText('') //넘기고 빈칸으로 만들기
    textRef.current.focus() //포커스 맞추기
}
    return (
        <form className={styles.TodoForm} onSubmit={onSubmit}>
            <input type='text' value={text} placeholder='해야할 일 입력' onChange={onInput} ref ={textRef}/>
            <button type ='submit'>추가</button>            
        </form>
    );
};

export default TodoForm;