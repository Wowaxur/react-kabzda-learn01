import Accordion from "./Accordion";
import {useState} from "react";

export default {
    title: 'ACCORDION',
    component: Accordion
}

export const CollapsedAccordion = () => <Accordion titleValue={'ACCORDION'} collapsed={true} onChange={()=>{}}/>
export const UncollapsedAccordion = () => <Accordion titleValue={'ACCORDION'} collapsed={false} onChange={()=>{}}/>
export const ChangebleAccordion = () => {
    const [collapsed, setCollapsed] = useState(true)
     return <Accordion titleValue={'ACCORDION'} collapsed={collapsed}  onChange={()=>{setCollapsed(!collapsed)}}/>
}