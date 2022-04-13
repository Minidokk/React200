import React, { Component } from 'react';

class ClassPrototype extends Component {
    constructor(props){
        super(props)
        this.state = {};
}

componentDidMount(){
 //ES5 Prototype
 var ExamCountfunc = (function (){
     function ExamCount(num){
         this.number =num;
     }
     ExamCount.prototype.showNum= function(){
         console.log('1. React_'+this.number);
     };
     return ExamCount;
 }());
    var cnt = new ExamCountfunc('200');
    cnt.showNum();

    //ES6 Class
    class ExamCountClass{
        constructor(num2){
            this.number2=num2;
        }
        showNum(){
            console.log(`2. React_${this.number2}`);
        }
    }
    var cnt2 = new ExamCountClass('2hundred');
    cnt2.showNum();
}

render(){
    return (
        <h2> [This is Render Fucntion ]</h2>
    )
}
}


export default ClassPrototype;