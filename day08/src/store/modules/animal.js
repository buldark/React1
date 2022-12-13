//1.action 생성
//파일명 + action명 (중복방지목적)
const CAT = 'animal/CAT'
const DOG = 'animal/DOG'
const CHICK = 'animal/CHICK'
const TIGER = 'animal/TIGER'

//2. 액션 보내기
export const cat = () => ({type : CAT})
export const dog = () =>({type : DOG})
export const chick = ()  => ({type : CHICK})
export const tiger = () => ({type : TIGER})


//3. 초기값
const initialState = {name : '',crying :''}


//4, 리듀서 함수 만들기 - state와 action 파라미터를 참조하여 새로운 상태 객체를 만들어서 반환한다.
//                     - state : 현제 상태 / action : 액션 객체

const reducer = (state =initialState ,action) => {
    switch(action.type){
        case CAT : 
            return {name : '고양이' ,crying : '야용'}
        case DOG :
            return {name : '강아지' , crying : '멍멍'}
        case CHICK :
            return {name : '병아리' , crying : '찍찍'}
        case TIGER: 
            return {name : '호랑이' , crying : '흥흥'}
            default :
            return state
    }
}
export default reducer;