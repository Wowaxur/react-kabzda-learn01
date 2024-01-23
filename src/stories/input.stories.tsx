import React, {ChangeEvent, useRef, useState} from 'react';
import {action} from '@storybook/addon-actions';

export default {
    title: 'input',
    //component: input

}

export const UncontrolledInput = () => <input/>

export const UncontrolledInputTrackValue = () => {
    const [value, setValue] = useState('')
    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        const actualValue = event.currentTarget.value
        setValue(actualValue)
    }
    return <div><input value={value} onChange={onChange}/> - {value}</div>
}


export const GetValueUncontrolledInputByButton = () => {
    const [value, setValue] = useState('')
    const inputRef = useRef<HTMLInputElement>(null)
    const onSave = () => {
        const el = inputRef.current as HTMLInputElement
        setValue(el.value)
    }
    return <div><input ref={inputRef} id={'inputId'}/>
        <button onClick={onSave}>Save</button>
        actual value - {value}</div>
}

export const ControlledInput = () => {
    const [parentValue, setParentValue] = useState('')
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.value)
    }
    return <input value={parentValue} onChange={onChange}/>

}
export const ControlledCheckbox = () => {
    const [parentValue, setParentValue] = useState(false)
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.checked)
    }
    return <input type={"checkbox"} checked={parentValue} onChange={onChange}/>

}

export const ControlledSelect = () => {
    const [parentValue, setParentValue] = useState<string| undefined>(undefined)

    const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setParentValue(e.currentTarget.value)
    }
    return <>
        <select value={parentValue} onChange={onChange}>
        <option>none</option>
        <option  value={'1'}>ADL</option>
        <option value={'2'}>KRD</option>
        <option value={'3'}>MSK</option>
    </select>
        <div>{parentValue}</div>

        </>
}




export const ControlledInputWithFixedValue = () => <input value={'Controlled Value'}/>
