import './App.css';
import Rating, {RatingValueType} from "./components/Rating/Rating";
import PageTitle from "./components/AppTitle/AppTitle";
import UncontrolledAccordion from "./components/UncontrolledAccordion/UncontrolledAccordion";
import UncontrolledRating from "./components/UncontrolledRating/UncontrolledRating";
import Accordion from "./components/Accordion/Accordion";
import {useState} from "react";
import UncontrolledOnOff from './components/uncontrolledOnOff/OnOff';
import OnOff from "./components/CallbackOnOff/OnOff";

function App() {
    let [accordinToggle, setAccordionToggle] = useState(false)
    let [ratingValue, setRatingValue] = useState<RatingValueType>(3)
    let [switcher, setSwitcher] = useState(true)
    let i

    return (

        <div className={'MainContainer'}>
            <PageTitle title={'Hello World'}/>
            {/*<Accordion titleValue={'Меню'} collapsed={true}/>*/}
           {/* <Accordion titleValue={'Доставка'}
                       items={[]}
                       collapsed={accordinToggle}
                       onChange={()=>{setAccordionToggle(!accordinToggle)}}
                       onClick={a=>a}/>*/}
            {/*<Rating value={ratingValue} onClick={setRatingValue}/>*/}
            <br/>
            {/*<UncontrolledOnOff onChange={(setSwitcher)}/>*/}
            {/*{switcher.toString()}*/}
            {/*<br/>*/}
            <UncontrolledAccordion titleValue={'Work'}/>
            {/*<br/>*/}
            <UncontrolledRating/>
            <OnOff on={switcher}
                   onChange={setSwitcher}
            />
        </div>
    );
}

export default App;


// function sum(a: number, b: number){
//     alert(a + b)
// }
//sum(23, 12)