import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getAllDogs } from '../../store/action/index'
import Dogs from '../Dogs/Dogs'

export default function Home() {
    const dogs = useSelector((state) => state.allDogs)
    let dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllDogs())
        //arreglo de dependencias
    }, [dispatch])
    //console.log(dogs)
    return (
        <div>
           ( {dogs.map((info) => {
               console.log(info.image)
                return ( 
                    <Dogs
                     name={info.name} 
                     Key={info.id}
                     image={info.image}
                     />
                )
            })})
        </div>
    ) 
   

}