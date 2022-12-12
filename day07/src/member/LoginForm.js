import React from 'react';

const LoginForm = () => {
    return (
        <div>
            <label>아이디 입력  : </label>
            <input type='text' className='id' id='id'/>
            <br/>
            <label>비밀번호 입력 : </label>
            <input type='password' className='pwd' id='pwd'/>
            <br/>
            <p>
                <button>로그인</button><br/>
             </p>
             <p>   
                <button>?</button>
            </p>
        </div>
    );
};

export default LoginForm;