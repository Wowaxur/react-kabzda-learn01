import {useState} from "react";



function UncontrolledRating() {


    let [value, setValue] = useState(0)
    return (<div>
            <Star selected={value > 0} setValue={()=>{setValue(1)}}/>
            <Star selected={value > 1} setValue={()=>{setValue(2)}}/>
            <Star selected={value > 2} setValue={()=>{setValue(3)}}/>
            <Star selected={value > 3} setValue={()=>{setValue(4)}}/>
            <Star selected={value > 4} setValue={()=>{setValue(5)}}/>
        </div>
    )
}


type StarPropsStar = {
    selected: boolean
    setValue: () => void
    //Value: 1 | 2 | 3 | 4 | 5
}

function Star(p: StarPropsStar) {
    return <span onClick={() => {
        p.setValue()
    }}>
        {p.selected ? <b>&#127775; </b> : <b>&#11088;  </b>}
    </span>
}

export default UncontrolledRating




