import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Test02 = () => {
    const [id ,setId] =useState('1')
    const [dto , setDto] = useState({}) //배열이 아닌[] 객체로 잡아 줘야 함{}
    const[search , setSearch] =useState(1)

/*
    const onInput = (e) =>{
        const {value} = e.target
        setId(value)
    }
*/
//위의 것  대신 아래에 한줄로 쓰는 법
//<input type ='text' value={id} onChange={e => setId(e.target.value)}/> 이거랑 opInput 같은 것 


    const onSearch =(id) =>{
        setSearch(id)
    }
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts/${id}` //${}쓰려면 백팁 사용
        axios.get(url).then(res =>setDto(res.data))
   // },[id])//id의 값이 바뀔 떄마다 실행
    },[search]) //버튼을 누를 때마다 실행
    return (
        <div>
            
        <input type ='text' value={id} onChange={e => setId(e.target.value)}/>
        
        <button onClick={() =>onSearch(id)}>검색</button>
        <h3>{dto.id} : {dto.title}</h3>

        </div>
    );
};

export default Test02;