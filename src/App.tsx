import './App.css';
import Accordion from "./components/Accordion/Accordion";
import Rating from "./components/Rating/Rating";
import PageTitle from "./components/AppTitle/AppTitle";
import OnOff from "./components/onoff/OnOff";

function App() {
  // debugger
  return (

      <div className={'MainContainer'}>
        <img
            src={'https://cdn.citilink.ru/-lQWJ5BXrGltfV8SvX0Y-89W7LMCHYvapioz9WmYmd4/resizing_type:fit/gravity:sm/width:400/height:400/plain/product-images/8ead89a0-ae8a-4727-8df1-9df0ffd5d209.jpg'}
            alt='imagineMonitor'/>
        <PageTitle title={'Admin'}/>
        <PageTitle title={'User'}/>
        <Accordion titleValue={'Меню'} collapsed={true}/>
        <Accordion titleValue={'Доставка'} collapsed={false}/>
        <Rating value={0}/>
        <Rating value={1}/>
        <Rating value={2}/>
        <Rating value={3}/>
        <Rating value={4}/>
        <Rating value={5}/>
        <OnOff turn={true}/>
          <OnOff turn={false}/>
      </div>
  );
}

export default App;


// function sum(a: number, b: number){
//     alert(a + b)
// }
//sum(23, 12)