type RatingpropsType = {
    value: 0 | 1 | 2 | 3 | 4 | 5
    /*number*/
}
function Rating(props: RatingpropsType) {

    if (props.value === 1){
        return (<div>
                <Star selected={true}/>
                <Star selected={false}/>
                <Star selected={false}/>
                <Star selected={false}/>
                <Star selected={false}/>
            </div>
        );}
    if (props.value === 2){
        return (<div>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={false}/>
                <Star selected={false}/>
                <Star selected={false}/>
            </div>
        );}
    if (props.value === 3){
        return (<div>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={false}/>
                <Star selected={false}/>
            </div>
        );}
    if (props.value === 4){
        return (<div>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={false}/>
            </div>
        );}
    if (props.value === 5){
        return (<div>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={true}/>
            </div>
        );}

        return (<div>
        <Star selected={false}/>
        <Star selected={false}/>
        <Star selected={false}/>
        <Star selected={false}/>
        <Star selected={false}/>
    </div>)
}
type StarPropsStar = {
    selected: boolean
}
function Star(props: StarPropsStar) {
    console.log("Star rendering")
    if(props.selected === true){
        return  (<span><b>&#127775; </b></span>)
    }else  return (<span>&#11088; </span>)
}

export default Rating



