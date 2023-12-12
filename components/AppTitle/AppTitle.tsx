type PagePropsType ={
    title: string
}
function AppTitle (props:PagePropsType){
    // debugger
    return <h1>{props.title}</h1>
}
export default AppTitle