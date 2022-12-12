import React, { useRef, useState } from 'react';

const Test06 = () => {
    const [form,setForm] = useState({
        name : '',
        id :'',
        pwd : ''
    })
    const nameRef = useRef()
    //비구조 할당 필수 적으로 해줘야 함
    const {name , id , pwd} =form
    const onReset =() =>{
        setForm({
            name : '',
             id : '',
            pwd : ''
            
        })
            nameRef.current.focus()
            
    }
    const onInput = (e) =>{ //
        const{name , value} =e.target //비구조 할당으로 name 과 value 둘 다 받아와야함
        
        setForm({
            ...form, //객체의 값 전체 복사 하고 [name] : value 만 수정한다 (복사하지 않으면 전에 있던 값이 사라진다(초기화된다.). )
            [name] : value //[변수명] : 값 
        })
    }
   
    return (
        <div>
            <table border='1' cellPadding='5' cellSpacing='5'>
                <tr>
                    <th width ='100'>이름</th>
                    <td>
                        <input type ='text' name = 'name' value={name} onChange={onInput} ref ={nameRef}/>
                    </td>
                </tr>
                <tr>
                    <th width ='100'>아이디</th>
                    <td>
                        <input type ='text' name = 'id' value={id} onChange ={onInput} />
                    </td>
                </tr>
                <tr>
                    <th>비밀번호</th>
                    <td>
                        <input type='password' name ='pwd' value={pwd} onChange ={onInput}/>
                    </td>
                </tr>
                <tr>
                    <td colSpan='2' align='center'>
                        <button onClick={onReset}>초기화</button>
                    </td>
                </tr>
                
            </table>
            <hr/>

            <h3>이름 : {name}</h3>
            <h3>아이디 : {id}</h3>
            <h3>비밀번호 : {pwd}</h3>
        </div>
    );
};

export default Test06;