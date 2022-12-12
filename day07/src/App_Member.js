import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import LoginForm from './member/LoginForm';
import WriteForm from './member/WriteForm';
import WriteList from './member/WriteList';
const App_Member = () => {
    return (
        <div>
            <BrowserRouter>
                <>
                     <nav>
                        <p>
                            <Link to ='/loginform'>로그인 하기</Link>
                            <Link to = '/writeform'>회원가입하기</Link>
                            <Link to = '/writelist'>목록보기</Link>
                        </p>    
                    </nav>            
                </>

                <Routes>
                    <Route path='/loginform' element={<LoginForm/>}/>
                    <Route path='/writeform' element={<WriteForm/>}/>
                    <Route path ='/writelist' element={<WriteList/>}/>
                </Routes>

            </BrowserRouter>
            
        </div>
    );
};

export default App_Member;