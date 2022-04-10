import React, { Component } from 'react';

class R008_LifecycleEx extends Component {
static getDerivedStateFromProps(props, state){    //컴포넌트가 새로운 props를 받게 됏을떄 state를 변경해준다.
    console.log('2.getDerivedStateFromProps Call :' + props.prop_value);
    return{tmp_state:props.prop_value};
}

    constructor(props){
        super(props);
        this.state={};
        console.log('1. constructor Call');

    }

    componentDidMount(){
        console.log('4. ComponentDidMount Call');
        console.log('5. tmp_state :'+this.state.tmp_state);
        this.setState({tmp_state2 : true});
    }

    shouldComponentUpdate(props, state){  // return 값이 true 일떄 render() 함수를 호출함
        console.log('6.shouldComponentUpdate Call / tmp_state2 :'+ state.tmp_state2);
        return state.tmp_state2
    }
    render(){
        console.log('3.render Call');
        return (
            <h2> [This is Render Fucntion ]</h2>
        )
    }
}


export default R008_LifecycleEx;