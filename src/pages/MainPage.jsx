import React, { useState } from "react"
import Navbar from "../components/Navbar"
import RestaurantList from "../components/RestaurantList"
import { getRestaurants } from "../utils/api"
import { getFilteredResto } from "../utils/filterUtility"

const MainPage = () => {
    const [restaurants, setRestaurants] = useState([])
    const [filterParameter, setFilterParameter] = useState({})
    const [load, setLoad] = useState(8)

    function getFilterParameter({ open, price, category }) {
        setFilterParameter({
            open, price, category
        })

        if (open === false && price === "" && category === "") {
            setLoad(8)
        }
    }

    React.useEffect(() => {
        const getData = async () => {
            const { data } = await getRestaurants()
            setRestaurants(data)
        }
        getData()
    }, [])
    const filteredResto = getFilteredResto({ filterParameter, restaurants });
    const loadedResto = filteredResto.slice(0, load)

    const handleLoadMore = () => {
        const iteration = 8;
        if (load < filteredResto.length) {
            if (load + iteration < filteredResto.length) {
                const prevLoad = load;
                setLoad(prevLoad + iteration)

            } else { setLoad(filteredResto.length); }
        } else {
            setLoad(filteredResto.length)
        }
    }
    console.log("load saat ini : " + load)
    return <>
        <header>
            <h1>Restaurants</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti ipsum officiis porro praesentium voluptatem, at vero! Culpa exercitationem iure, quisquam expedita esse id delectus blanditiis praesentium eaque deserunt porro! Aut, qui ipsa!</p>
        </header>
        <Navbar getFilterParameter={getFilterParameter} />
        <main className="main-content">
            <RestaurantList restaurants={loadedResto} />
            <div className="main-content__action">
                <button onClick={handleLoadMore} hidden={load == filteredResto.length ? true : false}>LOAD MORE</button>
            </div>
        </main>
    </>

}

export default MainPage