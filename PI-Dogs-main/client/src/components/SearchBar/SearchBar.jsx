import { useState } from "react";
import { useDispatch } from 'react-redux'
import {getByName} from '../../store/action/index'

export default function SearchBar({setCurrentPage}){
    let dispatch = useDispatch()
    const [input,setInput] = useState('')

    function haddleSetInputValue(e) {
        e.preventDefault();
        setInput(e.target.value);
    }

    const handlerSearch = (e)=>{
        e.preventDefault()
        dispatch(getByName(input))
        setCurrentPage(1)
        setInput('')
    }

    return (
        <div>
            <form onSubmit={(e) => handlerSearch(e)}>
                <input type="text" onChange={(e)=>haddleSetInputValue(e)} />
                <button type="submit">search</button>
            </form>
        </div>
    )
}