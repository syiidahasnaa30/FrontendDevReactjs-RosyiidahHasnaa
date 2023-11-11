import { Link } from "react-router-dom"


const NotFound = () => {
    return (
        <>
            <h1>Page is Not Found</h1>
            <button><Link to={`/`}>Back To Home Page</Link></button>

        </>
    )
}
export default NotFound