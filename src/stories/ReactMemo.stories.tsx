import React, {useState} from "react";

export default {
    title: 'React Memo'
}

const Counter = (props: any) => {
    return <div>{props.count}</div>
}
const UsersStock = (props: { users: Array<string> }) => {
    return <div>{
        props.users.map((u, i) => <div key={i}>{u}</div>)
    }</div>

}
const UsersVisible = React.memo(UsersStock)


export const Example1 = () => {
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['vld', 'gdv'])

    return <>
        <button onClick={() => {
            setCounter(counter + 1)
        }}>+
        </button>
        <button onClick={() => {
            setUsers([...users, 'newUser'])
        }}>+
        </button>
        <Counter count={counter}/>

        <UsersVisible users={users}/>

    </>

}