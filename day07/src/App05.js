import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

import './css/style05.css';
import Main from './page05/Main';
import ProduckList from './page05/ProduckList';
import ProductDetail from './page05/ProductDetail';

const App05 = () => {
    return (
        <BrowserRouter>
            <>
                <nav>
                    <ul>
                        <li><Link to ='/'>HOME</Link></li>
                        <li><Link to ='/productList'>ProductList</Link></li>
                        {/*alt+shift+방향키 =복사 */}
                  
                    </ul>
                </nav>
            </>
            {/*화면에 보이는 영역 */}
            <Routes>
                <Route path = '/' element ={<Main/>}/>
                <Route path ='/ProductList'>
                    {/*index를 써주면 /의 효과를 */}
                    <Route index element={<ProduckList/>}/>
                    <Route path =':productId' element={<ProductDetail/>}/>
                </Route>
            </Routes>
            
        </BrowserRouter>
    );
};

export default App05;