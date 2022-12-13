import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {red , yellow ,green ,blue,purple,skyblue} from '../store/modules/color'

const Color = () => {
    const color = useSelector(state => state.colorReducer.color)
    const dispatch = useDispatch()
    return (
        <div>
           <h1 style={{color : color}} >결과 : {color}</h1>
           <button onClick={() => dispatch(red())}>빨강</button> 
           <button onClick={() => dispatch(yellow())}>노랑</button> 
           <button onClick={() => dispatch(green())}>초록</button>
           <button onClick={() => dispatch(blue())}>파랑</button>
            <button onClick={() => dispatch(purple())}>보라</button>
            <button onClick={() => dispatch(skyblue())}>하늘</button>
        </div>
        
    );
};

export default Color;

/*
리덕스를 사용하면 상대값을 컴포넌트에 종속 시키지 않고 , 컴포넌트 밖에서 따로 관리 할 수 있다. 
*/