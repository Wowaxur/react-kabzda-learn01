import React, {useState} from 'react';

type OnOffPropsType = {
    onChange : (on: boolean)=> void
    //turn : boolean
}

const UncontrolledOnOff = (props: OnOffPropsType) => {
    let [on, setOn] = useState(true)
   // console.log("on:" + on);

    const onStyle = {backgroundColor: on ? 'green' : 'white'};
    const offStyle = {backgroundColor: on ? 'white' : 'red'};
    const indicatorStyle = {
        margin: "10px",
        width: '20px',
        height: '20px',
        borderRadius: '50%',
        border: '1px solid black',
        backgroundColor: on ? 'green' : 'red',
    };
    const onClickButton = () => {
            setOn(true)
            props.onChange(true)
    }
    const offClickButton = () => {
        setOn(false)
        props.onChange(false)
    }

    return <div className={'Buttons'}>
        <button onClick={onClickButton } style={onStyle}>ON
        </button>
        <button onClick={offClickButton } style={offStyle}>OFF
        </button>
        <div style={indicatorStyle}/>
    </div>
};

export default UncontrolledOnOff;