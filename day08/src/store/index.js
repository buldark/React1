import { applyMiddleware, combineReducers } from "redux";
import color from './modules/color.js';
import count from './modules/count.js';
import animal from './modules/animal.js';
export default combineReducers({
    //이름 : 리듀서 파일 
    colorReducer : color ,
    countReducer : count ,
    animalReducer : animal

})