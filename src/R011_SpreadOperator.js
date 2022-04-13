import React, { Component } from 'react';

class R011_SpreadOperator extends Component {
    constructor(props){
        super(props)
        this.state = {};
}

componentDidMount(){
   //javascript Array
   var varArray1=['num1','num2'];
   var varArray2=['num3','num4'];
   var sumVarArr=[varArray1[0],varArray1[1],varArray2[0],varArray2[1]];
   var SumVarArr2= [].concat(varArray1,varArray2);
   console.log('1. synVarArr :'+ sumVarArr);
   console.log ('var concat : '+ SumVarArr2);

   //Es6 Arraya
    let sumLetArr=[...varArray1,...varArray2];
    console.log('2. sumletArr :' + sumLetArr);
    const [sum1,sum2,...remain]=sumLetArr
    console.log('3. sum1 : '+sum1+', sum2 :'+sum2+',remain : '+remain);
   ////////////////////////////////////////////////////////////////////////
    var varObj1= {key1 : 'val1',key2 : 'val2'};
    var varObj2= {key2 : 'new2',key3 : 'val3'};
    //javascript Object
    var sumVarObj=Object.assign({},varObj1,varObj2);
    console.log('4. sumVarobj : '+JSON.stringify(sumVarObj))   //JSON.stringify() - 객체를 JSON문자열로 변환
    console.log(sumVarObj);

    //ES6 Object
    var sumLetObj={...varObj1,...varObj2};
    console.log('5.sumLetObj : '+JSON.stringify(sumVarObj));
    var {key1,key3, ...others}=sumLetObj;
    console.log('6. key1 :'+key1+',key3 +:'+key3+', Others : '+JSON.stringify(others));

}

render(){
    return (
        <h2> [This is Render Fucntion ]</h2>
    )
}
}


export default R011_SpreadOperator;