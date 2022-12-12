import React from 'react';

const Output = ({name , fruit}) => {
    return (
        <div>
         <h2>{name}은 과일 {fruit}을 좋아한다.</h2>   
        </div>
    );
};

export default Output;