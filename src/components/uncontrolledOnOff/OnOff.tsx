import React, {useReducer} from 'react';
import {Reducer} from "./OnOffReducer";

type OnOffPropsType = {
    onChange: (on: boolean) => void
    //turn : boolean
}

const UncontrolledOnOff = (props: OnOffPropsType) => {
    let [state, dispatch] = useReducer(Reducer, {switch: false})
    // console.log("on:" + on);

    const onStyle = {backgroundColor: state.switch ? 'green' : 'white'};
    const offStyle = {backgroundColor: state.switch ? 'white' : 'red'};
    const indicatorStyle = {
        margin: "10px",
        width: '20px',
        height: '20px',
        borderRadius: '50%',
        border: '1px solid black',
        backgroundColor: state.switch ? 'green' : 'red',
    };
    const onClickButton = () => {
        dispatch({type: 'Switch-Position'})
        props.onChange(true)
    }
    const offClickButton = () => {
        dispatch({type: 'Switch-Position'})
        props.onChange(false)
    }

    return <div className={'Buttons'}>
        <button onClick={onClickButton} style={onStyle}>ON
        </button>
        <button onClick={offClickButton} style={offStyle}>OFF
        </button>
        <div style={indicatorStyle}/>
    </div>
};

export default UncontrolledOnOff;