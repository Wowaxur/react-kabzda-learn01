import {useState} from "react";


function UncontrolledRating() {

    let [value, setValue] = useState(0)
    return (<div>
            <Star Value={1}  selected={ value > 0} setValue={setValue}/>
            <Star Value={2} selected={value > 1} setValue={setValue}/>
            <Star Value={3} selected={value > 2} setValue={setValue}/>
            <Star Value={4} selected={value >3 } setValue={setValue}/>
            <Star Value={5} selected={value >4 } setValue={setValue}/>
        </div>
    )


}
type StarPropsStar = {
    selected: boolean
    setValue: (value:0 | 1 | 2 | 3 | 4 | 5)=>void
    Value: 1 | 2 | 3 | 4 | 5
}
function Star(p: StarPropsStar) {
    return  <span onClick={()=>{p.setValue(p.Value)}}>
        {p.selected ? <b>&#127775; </b>: <b>&#11088;  </b>}
    </span>
}

export default UncontrolledRating



