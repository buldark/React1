import React, { useState } from 'react';

const Test04 = () => {
    const [visible , setVisible ] = useState(true)

    const onShow = () =>{
        setVisible(true)
    }
    const onHide =() =>{
        setVisible(false)
    }
    const onToggle =() =>{
        setVisible(!visible)
            //현재값과 반대 되게 !붙여주기
    }
        return (
        <div>
            <button onClick={onShow}>보이기</button>
            <button onClick={onHide}>숨기기</button>
            {/*토글 만들기 */}
            <button onClick={onToggle}>{visible ? '숨기기' :'보이기'} </button>
            <hr/>
            {//조건    ?  참 : 거짓 
            //   visible ? <div style={{width : 300 , height : 300 , margin : 20 , background :'hotpink'}}></div> : null
                visible &&  <div style={{width : 300 , height : 300 , margin : 20 , background :'hotpink'}}></div>
                        //&&=참일때만
            }
        </div>
    );
};

export default Test04;