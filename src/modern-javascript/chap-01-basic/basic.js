import React from 'react'

var man = {} //es5 -> es6에서는 사용 지양

const Basic = () => { //Basic - component
    const letsample = () =>{ // letsample - 중첩함수
        let tom = 'Tom' //es6에서 variable
        const james = 'James' //es6에서 constant
    }
    const dynamicType = () => {
        let userId = 12;
        console.log(`USER ID is ${userId}`)
    }

    const jsonSample = () => {
        const car = {
            wheels: 4,
            color:"red",
            drive: function(){ //function도 생략가능(람다에서)
                console.log("wroom wroom")
            },
        };
            console.log(Object.keys(car)[0]);
            console.log(typeof Object.keys(car)[0]);
            car.drive();
    };

    return (<>
    <button onClick={dynamicType}>Dynamic Type</button><br/>
    <button onClick={jsonSample}>JSON</button>
    </>)
}

export default Basic