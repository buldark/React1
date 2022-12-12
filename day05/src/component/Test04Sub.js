import React, { useMemo } from 'react';

const getColor =(color) => {
    console.log('getColor')

    switch(color){
        case 'hotpink' : 
            return '진한분홍색' 
        case 'magenta' : 
            return '보라색' 
        case 'skyblue' :
            return '하늘색'
        case 'tomato' :
            return '토마토'
    }
} 

const getFood =(food) =>{
    console.log('getFood')
    switch(food){
        case '헴버거' : 
            return '인스턴트'
         case '삼겹살' : 
            return '고기'
        case '치킨' : 
            return '닭고기'
        case '짜장면' : 
            return '면요리'
    }
}

const Test04Sub = ({color , food }) => {
   
  
   /*
    //색을 선택하든 음식을 선택하든 로그가 모두 찍힌다.-과부화 걸림 
    const colorInfo =getColor(color)
    const foodInfo = getFood(food)
    */
   // => 해결방법 
   // 색을 선택하면 getColor만 찍히고 , 음식을 선택하면 getFood만 로그가 찍혀야 한다. 

   const colorInfo =useMemo(()=>{ //useMemo는 return값만 ? 필요?? 
    return getColor(color)
   },[])
   const foodInfo =useMemo(()=>{
    return getFood(food)
   },[])
   //또는 const foodInfo =useMemo(()=>getFood(food),[food]) 로 쓸 수 있음.
    return (
        <div>
            <h3>선택한 색 : {color}</h3>
            <h4>당신은 {colorInfo}을 좋아하시는 군요!</h4>

            <h3>선택한 음식 : {food}</h3>
            <h4>당신은 {foodInfo}을 좋아하시는 군요!</h4>

        </div>
    );
};

export default Test04Sub;