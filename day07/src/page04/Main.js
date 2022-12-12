import React, { useEffect, useState } from 'react';
import axios from 'axios' ;
import Member from './Member';

const Main = () => {
    const[data,setData] =useState([]) //빈배열로 초기값

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
             .then(res => setData(res.data)) //응답 받은 거 다 setData에 넣어주기
    },[])
    return (
        <div>
            <h1>Main page / 회원수 : {data.length}</h1>
            {
                data.map(item => <Member key={item.id} item ={item}/>)
            }
        </div>
    );
};

export default Main;