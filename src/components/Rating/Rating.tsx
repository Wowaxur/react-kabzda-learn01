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
    console.log("Star rendering")
    if(props.selected){
        return  (<span><b>&#127775; </b></span>)
    }else  return (<span>&#11088; </span>)
}

export default Rating



