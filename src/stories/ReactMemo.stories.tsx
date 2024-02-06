import React, {useCallback, useMemo, useState} from "react";

export default {
    title: 'React Memo'
}

const Counter = (props: any) => {
    console.log('count')
    return <div>{props.count}</div>
}
const UsersStock = (props: { users: Array<string> }) => {
    console.log('users')
    return <div>{
        props.users.map((u, i) => <div key={i}>{u}</div>)
    }</div>

}
const UsersVisible = React.memo(UsersStock)


export const HelpsToReactMemo = () => {
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['vld', 'dasha', 'ira', 'sasha', 'kris'])

    const FilteredUsers = useMemo(() => {
        return users.filter(u => u.toLowerCase().indexOf('a') > -1)
    }, [users]);

    const addUser = () => {
      const newUsers = [...users, 'sveta ' + new Date().getDay() ]
        setUsers(newUsers)
    }

    return <>
        <button onClick={() => {
            setCounter(counter + 1)
        }}>+
        </button>
        <button onClick={()=>{addUser()}}>add User</button>
        <Counter count={counter}/>
        <UsersVisible users={FilteredUsers}/>


    </>

}

export const LikeUseCallback = () => {
    console.log('callback')
    const [counter, setCounter] = useState(0)
    const [books, setBooks] = useState(['React', 'Html', 'CSS', 'Native', 'Angular'])

    const FilteredBooks = useMemo(() => {
        return books.filter(books => books.toLowerCase().indexOf('a') > -1)
    }, [books]);



    const BooksSecret = (props: { books: Array<string> ; addBook : () => void}) => {
        console.log('books')
        return <div>{
            props.books.map((book, i) => <div key={i}>{book}</div>)
        }
            <button onClick={()=>{props.addBook()}}>add Book</button>
        </div>
    }
    const BooksVisible = React.memo(BooksSecret)




    const addBook = useCallback(() => {
        const newBooks = [...books, 'Styled ' + new Date().getDay() ]
        setBooks(newBooks)
    }, [books]);

    return <>
        <button onClick={() => {
            setCounter(counter + 1)
        }}>+
        </button>
        <Counter count={counter}/>
        <BooksVisible addBook={addBook} books={FilteredBooks}/>


    </>


}


