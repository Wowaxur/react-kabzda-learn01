import React from 'react';

type OnOffPropsType ={
    title?: string
    turn : boolean
}

const OnOff = (props: OnOffPropsType) => {
    return (
        <div className={'Buttons'}>
            <button style={{ backgroundColor: props.turn ? 'green': 'auto'}}>ON</button>
            <button style={{ backgroundColor: !props.turn ? 'red' : 'auto' }}>OFF</button>
            <div style={{
                margin: "10px",
                width: '10px',
                height: '10px',
                borderRadius: '50%',
                backgroundColor: props.turn ? 'green' : 'red',
            }} />
        </div>
    );
};

export default OnOff;