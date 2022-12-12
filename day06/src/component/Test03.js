import React, { useReducer, useState } from 'react';
const initialState ={
    color : 'black'

}
const reducer =(state , action) => {
    switch(action.type){
        //타입이 지금 하나임
        case   'CHANGE_COLOR' :
            return {
                color :action.text
            }
        case 'RESET' : 
            return initialState
        default : 
            return state
    }

 }
 const Test03 = () => {
    const [state , dispatch] =useReducer(reducer ,initialState)
    return (
        <div>
            <h1 style={{color :state.color}}>color : {state.color}</h1>
            <p>
                <button onClick={() => dispatch({type : 'CHANGE_COLOR',text :'red'})}>빨강</button>
                <button onClick={() => dispatch({type : 'CHANGE_COLOR',text :'greej'})}>초록</button>
                <button onClick={() => dispatch({type : 'CHANGE_COLOR',text :'blue'})}>파랑</button>
                <button onClick={() => dispatch({type : 'CHANGE_COLOR',text :'pink'})}>분홍</button>
                <button>초기화</button>
            </p>
        </div>
    );
};

export default Test03;