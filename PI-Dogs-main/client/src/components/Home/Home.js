import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getAllDogs } from '../../store/action/index'
import Dogs from '../Dogs/Dogs'
import Paged from '../Paged/Paged'
import SearchBar from '../SearchBar/SearchBar'
import Loading from '../Loading/Loading'

export default function Home() {
    const dogs = useSelector((state) => state.allDogs)
    const dog = useSelector((state) => state.dogName)
    let dispatch = useDispatch()
    const [currentPage, setCurrentPage] = useState(1);
    const [dogPerPage] = useState(20);
    const lastDog = currentPage * dogPerPage;
    const firstDog = lastDog - dogPerPage;
    const dogsInterval = dogs.slice(firstDog, lastDog);
    //funcion que situa con un evento el lugar del paginado
    const paged = (number) => {
        setCurrentPage(number)
    }
    useEffect(() => {
        dispatch(getAllDogs())
        //arreglo de dependencias
    }, [dispatch])
    return (
        <div>

            <SearchBar
                setCurrentPage={setCurrentPage}
            />
            <Paged
                dogs={dogs.length}
                dogPerPage={dogPerPage}
                paged={paged}
            />

            <div>
                { //muestra un solo dog
                    dog.length ? dog.map((info) => {
                        return (
                            <div>
                                <Dogs
                                    name={info.name}
                                    Key={info.id}
                                    image={info.image}
                                />

                            </div>
                        )
                    }) :
                        //muestra los 12
                        dogsInterval.length ? dogsInterval.map((info) => {
                            return (
                                <div>
                                    <Dogs
                                        name={info.name}
                                        Key={info.id}
                                        image={info.image}
                                        life_span={info.life_span}
                                     /*    weight={info.weight.map((data) => { return { imperial: data.imperial, metric: data.metric } })} */
                                        weightMax={info.weight.imperial}
                                        weightMin={info.weight.metric}
                                        heightMax={info.height.imperial}
                                        heightMin={info.height.metric}
                                    />

                                </div>

                            )
                        }) : <Loading />
                }
            </div>
        </div>
    )


}