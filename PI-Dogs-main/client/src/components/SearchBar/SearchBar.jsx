import { useState } from "react";
import { useDispatch } from 'react-redux'
import {getByName} from '../../store/action/index'

export default function SearchBar({setCurrentPage}){
    let dispatch = useDispatch()
    const [input,setInput] = useState('')

    const handlerSearch = (e)=>{
        e.preventDefault()
        dispatch(getByName(input))
        console.log(input)
        setCurrentPage(1)
        setInput('')
    }

    return (
        <div>
            <form onSubmit={(e) => handlerSearch(e)}>
                <input type="text" />
                <button type="submit">search</button>
            </form>
        </div>
    )
}