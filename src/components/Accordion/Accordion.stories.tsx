import Accordion from "./Accordion";
import {useState} from "react";

export default {
    title: 'ACCORDION',
    component: Accordion
}

export const CollapsedAccordion = () => <Accordion onClick={a => a}
                                                   items={[]}
                                                   titleValue={'ACCORDION'}
                                                   collapsed={true}
                                                   onChange={() => {
                                                   }}/>
export const UncollapsedAccordion = () => <Accordion titleValue={'ACCORDION'}
                                                     collapsed={false}
                                                     onClick={a => a}
                                                     onChange={() => {}}
                                                     items={[
                                                         {title: 'vld', value: '1'},
                                                         {title: 'gdw', value: '2'},
                                                         {title: 'wow', value: '3'},
                                                     ]}/>
export const ChangebleAccordion = () => {
    const [collapsed, setCollapsed] = useState(true)

    return <Accordion
        titleValue={'ACCORDION'}
        collapsed={collapsed}
        onClick={a => a}
        onChange={() => {
            setCollapsed(!collapsed)
        } }
        items={[
            {title: 'vld', value: '1'},
            {title: 'gdw', value: '2'},
            {title: 'wow', value: '3'},
        ]}/>
}