import React, {useMemo, useState} from "react";

export default {
    title: 'Use Memo'
}




export const Example1 = () => {


    const [a, setA] = useState<number>(2)
    const [b, setB] = useState<number>(2)

    let resultA = 1;
    let resultB = 1;
    resultA = useMemo(() => {
        let temResultA = 1
        for (let i = 1; i <= a ; i++) {
            let fake = 0
            while (fake < 10000000){
                fake++
                const fakeValue = Math.random()
            }
            temResultA = temResultA * i
        }
        return temResultA
    }, [a]);

    for (let i = 1; i <= b ; i++) {
        resultB = resultB * i
    }

    return <>
     {/*   <button onClick={() => {
            setCounter(counter + 1)
        }}>+
        </button>
        <button onClick={() => {
            setUsers([...users, 'newUser'])
        }}>+
        </button>
        <Counter count={counter}/>

        <UsersVisible users={users}/>
*/}
        <input value={a} onChange={(e)=> setA(+e.currentTarget.value)}/>
        <input value={b} onChange={(e)=> setB(+e.currentTarget.value)}/>
        <hr/>
        <div>
            Result for a : {resultA}
        </div>
        <div>
            Result for b : {resultB}
        </div>
    </>

}