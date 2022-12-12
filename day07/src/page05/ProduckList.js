import React from 'react';
import { Link } from 'react-router-dom';
import data from './data'; //데이터 가져오기 

const ProduckList = () => {
    return (
        <div className='products'>
            <h2>미니의 일상 리스트</h2>
            <div>
                {
                    data.map(item => <article key={item.id}>
                       <Link to={`/productList/${item.id}`}> 
                            <h3>{item.name}</h3>
                            <p>
                                <img src={item.photo} alt={item.name}/>
                            </p>
                        </Link>

                    </article>)
                }
            </div>
            
        </div>
    );
};

export default ProduckList;