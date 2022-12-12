import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const MemberDetail = () => {
    const {memberId} =useParams()

    const [member , setMember] =useState({}) //한 사람분이니깐 배열이 아니라 객체로
    const{name, email , phone, website} =member

    const navigate = useNavigate()

    const css ={
        border : '1px solid cyan' , margin : 20 , padding : 20
    }

    useEffect ( () => {
        axios.get(`https://jsonplaceholder.typicode.com/users/${memberId}`)
            .then(res => setMember(res.data))

    },[])

    const onBack =() => {
        //navigate('/') //또는 
        navigate(-1)
    }
    return (
        <div style ={css}>
              <p> MemberDetail Page : {memberId}</p>
            <h4>이름 : {name}</h4>
            <ul>
                <li>이메일 : {email}</li>
                <li>핸드폰 : {phone} </li>
                <li>웹사이트 : {website}</li>
            </ul>
            <button onClick ={onBack}>뒤로</button>
          
        </div>
    );
};

export default MemberDetail;