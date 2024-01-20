import React, {useState} from 'react';
import OnOff from "./OnOff";

export default {
    title: 'CallBack OnOFf',
    component: OnOff,
}

export const OffSwitcher = () => <OnOff onChange={a=>a} on={false}/>
export const OnSwitcher = () => <OnOff onChange={a=>a} on={true}/>
export const Changeswitcher = () => {
    const [switcher, setSwitcher] = useState(false)
    return <OnOff onChange={setSwitcher} on={switcher}/>
}
