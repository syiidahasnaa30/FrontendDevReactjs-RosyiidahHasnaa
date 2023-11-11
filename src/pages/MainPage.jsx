import React, { useState } from "react"
import Navbar from "../components/Navbar"
import RestaurantList from "../components/RestaurantList"
import { getRestaurants } from "../utils/api"

const MainPage = () => {
    const [restaurants, setRestaurants] = useState([])
    React.useEffect(() => {
        const getData = async () => {
            const { data } = await getRestaurants()
            console.log(data)
            setRestaurants(data)
        }
        getData()
    }, [])
    return <>
        <header>
            <h1>Restaurants</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti ipsum officiis porro praesentium voluptatem, at vero! Culpa exercitationem iure, quisquam expedita esse id delectus blanditiis praesentium eaque deserunt porro! Aut, qui ipsa!</p>
            <Navbar />
        </header>
        <main className="main-content">
            <RestaurantList restaurants={restaurants} />
            <div className="main-content__action">
                <button>LOAD MORE</button>
            </div>
        </main>
    </>

}

export default MainPage