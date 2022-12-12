import React, { useRef, useState } from 'react';

const Test10 = () => {
    const seq = useRef(1)
    const nameRef = useRef()
 
    const [data,setData] =useState([])
   const [form , setForm] =useState({
    name: '',
   age: ''
})
   const {name, age} = form
   const onInput =(e)=> {
   const{name,value } = e.target
     setForm({ //객체 안에서는{} '...~' = 수정 
        ...form, [name]:value
     })
   }
   const onAdd = (e) => {//배열 안에서는[] '...~' =  추가
    e.preventDefault() // 기본동작을 중단시켜줌 예를 들어 이번의 경우 버튼의 submit의 동작을 멈춤 일종은 return false와 비슷한.
    if(!name || !age) return //값이 없으면 나가라
    setData([
        ...data,
        {
            seq: seq.current++,
            name : name, //Key와 value가 똑같으면 한번만 써도 된다.
            age : age
        }
    ])
    //초기화
    setForm({
        name:'',
        age:''
    })
    nameRef.current.focus()
   }
    return (
        <div>
            <form onSubmit={onAdd}>
            이름 : <input type='text' name ='name' value={name} onChange={onInput }ref={nameRef}/>
            <br/>
            나이 : <input type='text' name ='age' value={age} onChange={onInput}/>
            <br/>
            <button type='submit'> 추가 </button>
           </form>
           <hr/>
           <ul>
            {
                data.map(item=> <li key={item.seq}>
                  {item.seq}/  {item.name} / {item.age}
                </li> )
            }
            </ul>
        </div>
    );
};

export default Test10;