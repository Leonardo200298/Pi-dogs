import {Route} from 'react-router-dom'
import Home from '../components/Home.js'

export default function RoutesRoute(){
    return (
        <div>
            <Route exact path='/dogs'>
               <Home/>

               
            </Route>
            {/* <Route>
                compoen
            </Route> */}
        </div>
    )
}