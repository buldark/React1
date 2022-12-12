import React from 'react';
/*- src 안에 있는 이미지 파일 처리는 참조변수를 사용한다.
  import 참조변수 from '이미지경로'; */
import img01 from '../img/cat01.jpg'
import img02 from '../img/cat02.jpg'
import img03 from '../img/cat03.jpg'


const Test09 = () => {
    return (
        <div>
            <img src ={img01} style={{width : 200 , height : 200}}/>
            <img src ={img02} style={{width : 200 , height : 200}}/>
            <img src ={img03} style={{width : 200 , height : 200}}/>
            <hr/>
           
            
        </div>
    );
};

export default Test09;