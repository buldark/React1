import React from 'react';
import Test08Item from './Test08Item';

const Test08List = ({data,onView}) => {
    return (
        <div>
            <ul className='list'>         {/*각각 한개씩 이니깐 item을 써야함 그리고 key값은 item의 id */}
               { data.map(item => <Test08Item key ={item.key} item ={item} onView={onView}/>)}

            </ul>
        </div>
    );
};

export default Test08List;