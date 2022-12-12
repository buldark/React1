import React from 'react';

const Display = (props) => {
    return (
        <div>
            <h2>Display 컴포넌트</h2>
            <h1> 내사 좋아하는 동물은 {props.name}입니다.</h1>
        </div>
    );
};

export default Display;