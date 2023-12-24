import './App.css';
import Rating from "./components/Rating/Rating";
import PageTitle from "./components/AppTitle/AppTitle";
import OnOff from "./components/onoff/OnOff";
import UncontrolledAccordion from "./components/UncontrolledAccordion/UncontrolledAccordion";
import UncontrolledRating from "./components/UncontrolledRating/UncontrolledRating";
import Accordion from "./components/Accordion/Accordion";

function App() {
    // debugger
    return (

        <div className={'MainContainer'}>
            <PageTitle title={'Admin'}/>
            <PageTitle title={'User'}/>
            <Accordion titleValue={'Меню'} collapsed={true}/>
            <Accordion titleValue={'Доставка'} collapsed={false}/>
            <Rating value={4}/>
            <br/>
            <OnOff />
            <br/>
            <UncontrolledAccordion titleValue={'Work'}/>
            <br/>
            <UncontrolledRating/>

        </div>
    );
}

export default App;


// function sum(a: number, b: number){
//     alert(a + b)
// }
//sum(23, 12)