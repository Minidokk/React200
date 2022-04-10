import React, { Component } from 'react';

class R009_Es6 extends Component {
    constructor(props){
        super(props)
        this.state = {};
}

componentDidMount(){
    var jsString = ' 자바스크릡트';
    var jsstring2=' 입니다. \n 다음줄';
    console.log(jsString +'문자열' + jsstring2+ '~');

    var Es6String1 = 'Es6';
    var Es6String2 = '입니다.'
    console.log(`${Es6String1} 문자열 ${Es6String2}!! 
____ 다음줄입니다.`)

    var LongString = "Es6에 추가된 String 함수들"
    console.log('startsWith : ' +LongString.startsWith("Es6에 추가"));   // 변수앞에서부터
    console.log('endsWith : ' +LongString.endsWith("함수들"))   // 뒤에서부터
    console.log('includes : ' +LongString.includes("추가된 String")) // 변수에 특정 문자열이 포함돼 있는지 ㅈㅎ판단
}

render(){
    return (
        <h2> [This is Render Fucntion ]</h2>
    )
}
}


export default R009_Es6;