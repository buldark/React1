import React, { useEffect, useMemo, useState } from 'react';

const user=[
    {id :1 , name : '홍길동'},
    {id :2 , name : '김수혁'},
    {id :3 , name : 'cat'},
    {id :4 , name : 'Daum'},
    {id :5 , name : '김수혁'},
    {id :6 , name : 'daum'},
    {id :7 , name : '안효섭'},
    {id :8 , name : 'naver'},
    {id :9 , name : '김희선'},
    {id :10 , name : 'NAVER'}
  
]

const Test05 = () => {

    let [data, setData] =useState(user)
    const [text ,setText]=useState('')
    const [search ,setSearch]=useState('')

    const onSearch =() => {
        setSearch(text)
    }

    //검색 버튼을 누르지 않아도 글자가 입력될 때마다 바로 바로 결과가 뜨게
    /*
    useEffect(() => {                                 //값이 없으면 -1임/ 그래서 값이 있을 때는 !== -1로 표시
      //  setData(user.filter(item => item.name.toLowerCase().indexOf(text.toLowerCase()) !== -1)) //indexOf or Find사용할 때
      setData(user.filter(item => item.name.toLowerCase().includes(text.toLowerCase()) )) //includes사용할 때 
    },[text])
    */

    //검색버튼을 눌렀을 때만 결과가 뜨게 ....
    data =useMemo(()=> {
        return user.filter(item =>  item.name.toLowerCase().includes(text.toLowerCase())) //data값이 직접 받는 것이라서 return이 setDAta가 아니라 바로 ???

    },[search])
    
    return (
        <div>
            <input type ='text' value={text} onChange ={ e => setText(e.target.value)}/>
            <button onClick={onSearch}>검색</button>
            <ul>
                {
                    data.map(item => <li key={item.id}>
                        {item.id}: {item.name}
                    </li>)
                }
            </ul>
        </div>
    );
};

export default Test05;