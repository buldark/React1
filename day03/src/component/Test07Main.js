import React, { useState } from 'react';
import Test07Input from './Test07Input';
//import '../css/Test07.css'
import Test07Print from './Test07Print';
import Test07Output from './Test07Output';

const Test07Main = () => {
    const [count , setCount]= useState(1)

   const [form,setForm] =useState({ //하나의 폼 객체로 묶기 --> 폼으로 받으면 비구조 할당으로 분해해줘야 함 
    name : '',
    age : '',
    addr : '',
    phone : ''
   })

   const onInput =(e) => {
    const {name , value} = e.target //e.target 이벤트를 발생한 친구
    setForm({
        ...form,
        [name] : value //name 키를 가진 값을 value로 설정
    })
   }
   
   const onNext =() => {
        setCount(count+1)
   }
   const onPrev=()=>{
        setCount(count-1)
   }
    return (
        <div className='wrap'>           {/*form 값을 보내줘야 함 (main에서 비구조할당으로 풀 필요없이)  */}
          { count === 1 &&  <Test07Input form={form} onInput={onInput} onNext={onNext}/>}
                                        {/*...form 은 값들로 넘어가는 것 form ={form}은 객체의 주소값이 넘ㅇ어가는  */}
          { count === 2 &&  <Test07Print {...form} onPrev={onPrev} onNext={onNext}/>}
          { count === 3 &&  <Test07Output name ={form.name} />}

        </div>
    );
};

export default Test07Main;