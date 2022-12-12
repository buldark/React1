import React, { useState } from 'react';

const dataList = [
    { id: 1, name: 'chk1', text: '연령(만 14세 이상) 확인 (필수)', isChk: false },
    { id: 2, name: 'chk2', text: '개인정보 위탁 처리 동의(필수)', isChk: false },
    { id: 3, name: 'chk3', text: '개인정보 수정 및 이용에 대한 동의(필수)', isChk: false },
    { id: 4, name: 'chk4', text: '이벤트 우대 혜택 동의 안내 (선택)', isChk: false },
]


const Test11 = () => {
    const [data, setData] = useState(dataList)
    const onCheck = (e) => {
        const { name, checked } = e.target

        if (name === 'all') {
            // item=>{ } 이런식으로 {}가 쓰이면 return값 필요
            setData(data.map(item => {
                return {
                    ...item,
                    isChk: checked
                }
            }))
        } else {
            setData(data.map(item => item.name === name ? { ...item, isChk: checked } : item))

        }
    }
    return (
        <div>
            <p>                                                             {/*data.filter() 조건에 맞는 애들만 걸러주기 /  != true true가 아닌 개수를 계산 하기().length / 개수가 1보다 작아야 함 즉  하나라도 빠지면 자동으로 해제 시키기*/}
                <input type='checkbox' name='all' onChange={onCheck} checked={data.filter(item => item.isChk != true).length < 1} />
                <label>약관동의</label>
            </p>
            <hr />
            {
                data.map(item => <p key={item.id}>
                    {/*{item.name}으로 객체 값 가져오기 -''  필요 없음 */}
                    <input type='checkbox' name={item.name} checked={item.isChk} onChange={onCheck} />
                    <label>{item.text}</label>

                </p>)
            }

        </div>
    );
};

export default Test11;