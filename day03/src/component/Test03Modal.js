import React from 'react';

const Test03Modal = ({onClose}) => {
    return (
        <>
            <div className='bg'></div>
            <div className='popup'>
                                                                        {/*onclose라는 것은 모달에서 필요(발생)하지만 구현은 부모인 Test03에서 구현해줘야함 const onClose=()=>{}는 Test03에
                                                                        이유는 상태변수는 부모가 갖고있기때문에 */}
                <p className='closex' style={{cursor : 'pointer'}} onClick ={onClose}>x</p>
                <h2>Have a Nice Day</h2>
            </div>
        </>
    );
};

export default Test03Modal;