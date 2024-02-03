import {useReducer} from "react";
import {Reducer} from "./AccordionReducer";


type AccordionPropsType = {
    titleValue: string;
    //collapsed: boolean;
}


function UncontrolledAccordion(props: AccordionPropsType) {

    //let [collapsed, setCollapsed] = useState(true)
    let [state, dispatch] = useReducer(Reducer, {collapsed: false})
    return (
        <div>
            {/*<AccordionTitle title={props.titleValue} onClick={() => {setCollapsed(!collapsed)*/}
            <AccordionTitle title={props.titleValue} onClick={() =>
                dispatch({type: 'Toggle-Collapsed'})}/>
            {state.collapsed && <AccordionBody/>}

        </div>
    )
}

type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return <h3 onClick={() => {
        props.onClick()
    }}> --- {props.title} ---</h3>
}

function AccordionBody() {
    return <div>
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>

        </ul>

    </div>

}

export default UncontrolledAccordion
