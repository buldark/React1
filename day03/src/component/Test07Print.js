import React from 'react';
//{form} == 
const Test07Print = ({name, age, addr, phone, onNext ,onPrev} ) => {
  
    return (
        <>
        <ul>
            <li>이름 : <em>{name}</em></li>
            <li>나이 : <em>{age}</em></li>
            <li>주소 : <em>{addr}</em></li>
            <li>핸드폰 : <em>{phone}</em></li>
        </ul>
        <p>
            <button onClick={onPrev}>이전</button>
            <button onClick={onNext}>다음</button>
        </p>
        </>
    );
};

export default Test07Print;