import {Routes, Route} from 'react-router'
import Home from './Home'

export default function RoutesRoute(){
    return (
        <div>
            <Routes>
                <Route path='/dogs' element={<Home/>} />
            </Routes>
        </div>
    )
}