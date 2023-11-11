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
    const response = await fetch(BASE_URL | "/detail/" + id)
    const responseJson = response.json();

    if (responseJson.error) {
        return { error: responseJson.message, data: null }
    }
    return { error: false, data: responseJson.restaurants }
}
const getSmallImageRestaurant = async (id) => {
    const response = await fetch(BASE_URL + "/images/small/" + id);
    const responseJson = response.json();

    if (responseJson.error) {
        return { error: responseJson.message, image: null }
    }
    return { error: false, image: BASE_URL + "/images/small/" + id }
}

export { getRestaurants, getSmallImageRestaurant, getDetailRestaurant }

