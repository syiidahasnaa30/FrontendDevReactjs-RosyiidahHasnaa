import RestaurantItem from "./RestaurantItem"


const RestaurantList = ({ restaurants }) => {
    return (
        <>
            <h2>All Restaurant</h2>
            <div className="restaurant-list">
                {
                    restaurants.map((restaurant) => (
                        <RestaurantItem key={restaurant.id} {...restaurant} />
                    ))
                }

            </div>
        </>
    )
}
export default RestaurantList