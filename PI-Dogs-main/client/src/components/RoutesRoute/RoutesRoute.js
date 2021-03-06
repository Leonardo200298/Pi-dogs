import {Routes,Route} from 'react-router'
import Home from '../Home/Home'
import LandingPage from '../landingPage/landingPage'

export default function RoutesRoute() {
    return (
        <div>
            <Routes>
                <Route path='/' element={<LandingPage/>} />
                <Route exact path='/dogs' element={<Home/>}/>
                 
            </Routes>
          
        </div>
    )
}
//dependecias para que no ande Routes 
/* 
"react-router-dom": "^5.3.0",
"react-router": "^5.2.0",
*/