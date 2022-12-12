import React, { useState } from 'react';
import Test02Sub from './Test02Sub';

const Test02 = () => {
    const [isShow,setIsShow] = useState(false)
    const onToggle =() =>{
        setIsShow(!isShow) // false면 true  / true면 false
    }
    return (
        <div>
            <button onClick ={onToggle}>{isShow ? '숨기기' : '보이기'}</button>
            <hr/>
            {
                isShow && <Test02Sub/>
            }
        </div>
    );
};

export default Test02;