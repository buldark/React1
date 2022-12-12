import React from 'react';

const Fruit = (props) => {
    return (
        <div>
            <label>과일이름 입력</label>
            <input type='text' value = {props.fruit} onChange={props.onInputFruit}/>
        </div>
    );
};

export default Fruit;