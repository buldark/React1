import React from 'react';
import CatItem from './CatItem';
import '../css/style.css';

const CatList = ({data}) => {
    return (
        <ul className='list'>
           {// 인덱스 없이 map을 씀 /바로 CatItem을 씀..리턴 없이사용가능
            data.map(item => <CatItem key={item.id} item={item}/>)
           } 
        </ul>
    );
};

export default CatList;