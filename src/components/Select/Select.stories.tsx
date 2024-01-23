import Select from "./Select";
import {useState} from "react";


export default {
    title: 'Select',
   component: Select
}
export const JustSelect = () => {
    const [value, setValue] = useState('1')

   return <>
    <Select
    items={[
        {title: 'Minsk', value: '1'},
        {title: 'Moscow', value: '2'},
        {title: 'Krasnodar', value: '3'},
    ]}
    onChange={setValue}
    value={value}
/>
    </>

}