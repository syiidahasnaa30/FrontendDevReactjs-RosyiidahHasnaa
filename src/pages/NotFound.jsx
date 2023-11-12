import { Link } from "react-router-dom"


const NotFound = () => {
    return (
        <div className="page-notfound">

            <h1>Page is Not Found</h1>
            <Link to={`/`}><button>Back To Home Page</button></Link>

        </div>
    )
}
export default NotFound