import React, { useEffect, useState } from 'react';

const Test02Sub = () => {
    const [x , setX] = useState(0)
    const [y , setY] = useState(0)

    const onMove =( e) =>{
        // client~ 브라우저에서 사용자에게 웹페이지가 보여지는 영역을 기준으로 좌표를 표시
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(()=> {
        console.log('useEffect')
        window.addEventListener('mousemove',onMove) //이벤트가 일어날때 이 경우 마우스무브 -> 그럴때마다 onMove 이벤트 발생

        //[]로 지정하면 컴포넌트가 사라질때 cleanup 함수가 호출된다.
        return () => {
            console.log('cleanup')
            window.removeEventListener('mousemove' , onMove)
        }
    },[])
    return (
        <div>
            <h2>마우스 좌표</h2>
            <div style = {{border : '1px solid #000' , width : 400 ,padding : 30 ,margin : 15}}>
                <h3> x축 : {x} , Y축 : {y}</h3>
            </div>
            
        </div>
    );
};

export default Test02Sub;