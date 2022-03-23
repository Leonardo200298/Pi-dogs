import { Link } from 'react-router-dom';
export default function LandingPage(){
    return (
        <div>
            <Link to='/dogs'>
                <button>Enter!</button>
            </Link>
        </div>
    )
}