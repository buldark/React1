import React, { useEffect, useRef, useState } from 'react';
import styles from '../css/Todos.module.css'
import TodoForm from './TodoForm';

import TodoList from './TodoList';

const Todos = () => {
    
  //  const [data,setData] =useState([])
  //로컬 스토리지 읽어오기                                         앞의 조건이 거짓이라면 빈배열로 선언해라 
    const [data ,setData] =useState(() => JSON.parse(localStorage.getItem('data')) || []  )

  //로컬스토리지에 저장하기
    useEffect(()=> {
        localStorage.setItem('data',JSON.stringify(data))//data를 JSON 형태로 저장
    },[data]) //data가 바뀔 때 마다

    const seq = useRef(data.length + 1) //초기값

    const onAdd = (text) =>{
        setData([
            ...data,
            {
                seq : seq.current++,
                text //text: text 앞 뒤가 똑같을 때 한번만 써줘도 된다.
            }
        ])

    }
    const onDel =(seq) =>{
        //삭제하라는 뜻은 걸러내라는 뜻이니깐 filter사용
        setData(data.filter(item => item.seq !== seq))
    }
    return (
        <div  className={styles.Todos}>
            <h1>일정관리</h1>
            <TodoForm onAdd={onAdd}/>
            <TodoList data ={data} onDel ={onDel}/>
            
           
        </div>
    );
};

export default Todos;

/*
데이터 읽기, 쓰기

웹 스토리지
HTML5에서 추가된 기술로 로컬스토리지와 세션스토리지로 구분된다.

특징
- 웹 스토리지는 Key와 Value 형태로 이루어졌다.
- 웹 스토리지는 클라이언트에 대한 정보를 저장한다.
- 웹 스토리지는 로컬에만 정보를 저장하고 쿠키는 서버와 로컬에 정보를 저장한다.

종류
로컬스토리지 (localStorage) - 클라이언트에 대한 정보를 영구적으로 저장
세션스토리지 (sessionStorage) - 세션 종료 시(브라우저 닫을 경우) 클라이언트에 대한 정보 삭제

장점
- 서버에 불필요하게 데이터를 저장하지 않는다. (백엔드에 절대로 전송되지 않는다.)
- 저장 가능한 데이터의 용량이 크다. (약 5Mb, 브라우저마다 차이 존재)

단점
- HTML5를 지원하지 않는 브라우저의 경우 사용 불가. (현재는 거의 없다고 봐야 한다.)
*/