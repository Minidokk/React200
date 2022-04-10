import React, { Component } from 'react';

class R010_Variable extends Component {
    constructor(props){
        super(props)
        this.state = {};
}

componentDidMount(){
   var varName = 'react';
   console.log('varName1 : ' + varName);
   var varName = '200'; // 'varName'은(는) 이미 재선언 불가를 정의하고 있습니다.
   console.log('varName2 : ' + varName);

   let letName = 'react';
   console.log('letName1 : ' + letName);
   // let letName= '200'     -- 구문 분석 오류: 식별자 'letName'이(가) 이미 선언되었습니다.
    letName = 'React200'; 
    console.log('letName2 : ' + letName);

    const constName = 'react';
    console.log ('constname : '+ constName);
    // const constName = '200'; --구문 분석 오류: 식별자 'letName'이(가) 이미 선언되었습니다.
    //constName = 'react200';   --잡히지 않은 TypeError: 상수 변수에 대한 할당.
}

render(){
    return (
        <h2> [This is Render Fucntion ]</h2>
    )
}
}


export default R010_Variable;