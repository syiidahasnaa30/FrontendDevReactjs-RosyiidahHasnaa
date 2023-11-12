import React, { useState } from "react"
import Navbar from "../components/Navbar"
import RestaurantList from "../components/RestaurantList"
import { getRestaurants } from "../utils/api"
import { getFilteredResto } from "../utils/filterUtility"

const MainPage = () => {
    const [restaurants, setRestaurants] = useState([])
    const [filterParameter, setFilterParameter] = useState({})

    function getFilterParameter({ open, price, category }) {
        setFilterParameter({
            open, price, category
        })
    }

    React.useEffect(() => {
        const getData = async () => {
            const { data } = await getRestaurants()
            setRestaurants(data)
        }
        getData()
    }, [])

    const filteredResto = getFilteredResto({ filterParameter, restaurants });

    return <>
        <header>
            <h1>Restaurants</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti ipsum officiis porro praesentium voluptatem, at vero! Culpa exercitationem iure, quisquam expedita esse id delectus blanditiis praesentium eaque deserunt porro! Aut, qui ipsa!</p>
        </header>
        <Navbar getFilterParameter={getFilterParameter} />
        <main className="main-content">
            <RestaurantList restaurants={filteredResto} />
            <div className="main-content__action">
                <button>LOAD MORE</button>
            </div>
        </main>
    </>

}

export default MainPage