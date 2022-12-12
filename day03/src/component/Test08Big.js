import React from 'react';

const Test08Big = ({one}) => {
    //one을 비구조 할당으로 분해

    const {id ,img , title,} =one
    return (
        <div className ='bigimg'>
            <h2>{title}</h2>
            <img src ={img} />
            
        </div>
    );
};

export default Test08Big;