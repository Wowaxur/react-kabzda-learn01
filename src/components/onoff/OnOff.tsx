import React, {useState} from 'react';

type OnOffPropsType ={
    //title?: string
    //turn : boolean
}

const OnOff = (props: OnOffPropsType) => {
    console. log("OnOff rendering");
   let[on, setOn]= useState(false)

    console.log("on:"+ on) ;

    const onStyle = { backgroundColor: on ? 'green': 'white'};
    const offStyle = { backgroundColor: on ? 'white' : 'red'};
    const indicatorStyle = {
        margin: "10px",
        width: '20px',
        height: '20px',
        borderRadius: '50%',
        border:'1px solid black',
        backgroundColor: on ? 'green' : 'red',
    };


    return <div className={'Buttons'}>
            <button onClick={()=>{setOn(true)}} style={onStyle} >ON</button>
            <button onClick={()=>{setOn(false)}} style={offStyle}>OFF</button>
            <div style={indicatorStyle} />
        </div>
};

export default OnOff;