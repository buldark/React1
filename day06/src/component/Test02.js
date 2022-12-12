import React, { useReducer } from 'react';
const initialState ='black'
const reducer =(state , action )=>{
    switch(action.type) { //'type'이름 다른게 써도 되고 대신 아래 'type'이라고 쓴걸 똑같이 바꿔야함 
        case 'RED' :
            return 'red'
        case 'GREEN' :
                return 'green'
        case 'BLUE' :
                return 'blue'
        case 'PINK' :
                return 'pink'
        case 'RESET' :
                return initialState
        default : return false // or return state 이렇게 써도 됨 
    }

}

const Test02 = () => {
    const [color,disptch] = useReducer(reducer,initialState)

    return (
        <div>
            <h1 style ={{color : color}}>color : {color}</h1>
            <p>
                <button onClick={()=>disptch({type : 'RED'})}>red</button>
                <button onClick={()=>disptch({type : 'GREEN'})}>green</button>
                <button onClick={()=>disptch({type : 'BLUE'})}>blue</button>
                <button onClick={()=>disptch({type : 'PINK'})}>pink</button>
                <button onClick={()=>disptch({type : 'REST'})}>reset</button>

            </p>
        </div>
    );
};

export default Test02;