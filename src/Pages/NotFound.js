import { Link } from "react-router-dom"



export let NotFound = () => {
    return (
        <div className="notFound">
            <h1>404</h1>
            <h2>Oops! Look likes something going wrong</h2>
            <p>Page Cannot be found! we’ll have it figured out in no time. Menwhile, cheek out these fresh ideas:</p>
            <button><Link to="/">Go to home</Link></button>
        </div>
    )
}