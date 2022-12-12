import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import data from './data';

const ProductDetail = () => {
    const {productId}=useParams()
const navigate = useNavigate()
const onHome =() => {
    navigate('/')
}
const onList =() =>{
    navigate(-1)
}
const item = data.find(item => item.id === productId)
    //예 ) 장바구니 에서 상품 상세페이지 갈게
    return (
        <div className='item'>
            <h2>미니의 상세 페이지</h2>
            <h3> 제품명 : {item.name} / 가격  :  {item.price}</h3>
            <p><img src ={item.photo} alt={item.name}/></p>
            <p>제품 설명 : {item.description}</p>

            <button onClick={onHome}>home</button>
            <button onClick={onList}>List</button>
            
        </div>
    );
};

export default ProductDetail;