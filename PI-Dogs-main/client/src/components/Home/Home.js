import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getAllDogs } from '../../store/action/index'
import Dogs from '../Dogs/Dogs'

export default function Home() {
    const dogs = useSelector((state) => state.allDogs)
    let dispatch = useDispatch()
   /*  let array = [];
    for (let i = 0; i <= dogs[0].length; i++) {
        for (let j = 0; j <= dogs[1].length; i++) {
            array.push(dogs[1][j])
        }
        array.push(dogs[0][i])
    } */
    useEffect(() => {
        dispatch(getAllDogs())
        //arreglo de dependencias
    }, [dispatch])
    console.log(dogs[0].id)
    return (
        <div>
            <h1>{dogs.map((info) => {
                return <div>
                    <Dogs name={info.name} />
                </div>
            })}</h1>
        </div>
    )

}