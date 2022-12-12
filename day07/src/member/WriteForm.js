import React from 'react';

const WriteForm = () => {
    return (
        <div>
             <label>이름 입력 : </label>
            <input type='text' className='name' id='name'/>
            <br/>
            <label>아이디 입력</label>
            <input type='text' className='id' id='id'/>
            <br/>
            <label>비밀번호 입력 : </label>
          
            <input type='password' className='pwd' id='pwd'/>
            <br/>
            <p>
                <button>가입하기</button>
                <button>취소 </button>
            </p>
        </div>
    );
};

export default WriteForm;