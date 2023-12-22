import React from "react";

type RatingpropsType = {
    value: 0 | 1 | 2 | 3 | 4 | 5
    /*number*/
}
function Rating(props: RatingpropsType) {

    return (<div>
            <Star selected={ props.value > 0}/>
            <Star selected={props.value > 1}/>
            <Star selected={props.value > 2}/>
            <Star selected={props.value >3 }/>
            <Star selected={props.value >4 }/>
        </div>
    )


}
type StarPropsStar = {
    selected: boolean
}
function Star(props: StarPropsStar) {

    return <span>
            {props.selected ? <b>&#127775; </b> : <b>&#11088; </b>}
        </span>
}

export default Rating



