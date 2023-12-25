import React, {useState} from 'react';

type OnOffPropsType = {
    onChange : (value: boolean) => void
    on : boolean
}

const OnOff = (props: OnOffPropsType) => {
   // console.log("on:" + on);

    const onStyle = {backgroundColor: props.on ? 'green' : 'white'};
    const offStyle = {backgroundColor: props.on ? 'white' : 'red'};
    const indicatorStyle = {
        margin: "10px",
        width: '20px',
        height: '20px',
        borderRadius: '50%',
        border: '1px solid black',
        backgroundColor: props.on ? 'green' : 'red',
    };


    return <div className={'Buttons'}>
        <button onClick={()=> {
            props.onChange(true)
        }
        }
                style={onStyle}>ON
        </button>
        <button onClick= {()=> {
            props.onChange(false)
        }
                }
                style={offStyle}>OFF
        </button>
        <div style={indicatorStyle}/>
    </div>
};

export default OnOff;