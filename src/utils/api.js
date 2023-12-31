const BASE_URL = "https://654db11ccbc325355741ce8d.mockapi.io/api"

const getRestaurants = async () => {
    const response = await fetch(BASE_URL + "/restaurants");
    const responseJson = await response.json();

    if (responseJson === null) {
        return { error: true, data: null }
    }
    return { error: false, data: responseJson }
}
const getDetailRestaurant = async (id) => {
    const response = await fetch(BASE_URL + "/restaurants/" + id)
    const responseJson = await response.json();

    if (responseJson === null) {
        return { error: true, data: null }
    }
    return { error: false, data: responseJson }
}
const getRestaurantReview = async (id) => {
    const response = await fetch(BASE_URL + "/restaurants/" + id + "/reviews")
    const responseJson = await response.json();

    if (responseJson === null) {
        return { error: true, data: null }
    }
    return { error: false, data: responseJson }
}

const getRestaurantCategory = async () => {
    const categories = [];
    const { data } = await getRestaurants();
    data.forEach(restaurant => {
        categories.push(restaurant.category);
    });

    const uniqueCategory = [...new Set(categories)];
    // console.log(uniqueCategory)
    return uniqueCategory
}
export { getRestaurants, getRestaurantReview, getDetailRestaurant, getRestaurantCategory }

