//1.action 생성
//파일명 + action명 (중복방지목적)
const INCREMENT = 'count/INCREMENT'
const DECREMENT ='count/DECREMENT'
const RESET = 'count/RESET'
//2. 액션 보내기
export const increment  =() =>({type : INCREMENT}) //화살표함수를 썼기에 Count.js애서 쓸 수 있음??

export const decrement = () =>({type : DECREMENT})

export const reset =() => ({type : RESET})

//3. 초기값
const initialState = {count : 0}


//4, 리듀서 함수 만들기 - state와 action 파라미터를 참조하여 새로운 상태 객체를 만들어서 반환한다.
//                     - state : 현제 상태 / action : 액션 객체

const reducer = (state = initialState ,action) => {
    switch(action.type){
        case INCREMENT :
            return {count : state.count +1 }
        case DECREMENT :
            return {count : state.count-1}
        case RESET :
            return {count : 1}
        default :
        return state

    }
} 

export default reducer