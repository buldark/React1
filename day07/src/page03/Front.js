import React from 'react';
import { useParams } from 'react-router-dom';

const Front = ({data}) => {
    const {name} = useParams()
    return (
        <div>
            <h1>Front</h1>
            <h2>{name}</h2>
            <hr/>
            {
                //우선 고른것만 나오게!!(filter()) 
                data.filter(item => item.title === name ).map((item ,  index) => <div key={index}>
                    <h2>{item.title} / {item.info}</h2>
                </div>)
            }
        </div>
    );
};

export default Front;