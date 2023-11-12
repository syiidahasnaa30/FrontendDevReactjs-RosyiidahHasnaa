const prices = [
    { key: "less", text: "Less than $100", min: 0, max: 100 },
    { key: "more", text: "More than $200", min: 200, max: null },
    { key: "range", text: "$100 - $200", min: 100, max: 200 }];


const getFilteredByOpen = ({ filterParameter, restaurants }) => {
    if (filterParameter.open) {
        const openedResto = restaurants.filter((restaurant) => {
            return restaurant.open === filterParameter.open
        })
        return openedResto
    } else {
        return restaurants
    }
}

const getFilteredByCategory = ({ filterParameter, resto }) => {
    const filtered = resto.filter((restaurant) => {
        return restaurant.category.includes(filterParameter.category)
    })
    return filtered
}

const getFilteredByPrice = ({ filterParameter, resto }) => {
    if (filterParameter.price === "") {
        return resto;
    } else {
        let filtered = []
        if (filterParameter.price === "Less than $100") {
            filtered = resto.filter((restoItem) => {
                return parseFloat(restoItem.price) < parseFloat(100)
            })
        } else if (filterParameter.price == "More than $200") {
            filtered = resto.filter((restoItem) => {
                return parseFloat(restoItem.price) > parseFloat(200)
            })
        } else {
            filtered = resto.filter((restoItem) => {
                return parseFloat(restoItem.price) > parseFloat(100) && parseFloat(restoItem.price) < parseFloat(200)
            })
        }
        return filtered
    }
}

const getFilteredResto = ({ filterParameter, restaurants }) => {
    if (filterParameter.open === false && filterParameter.category === "" && filterParameter.price === "") {
        return restaurants;
    }
    const filteredByOpen = getFilteredByOpen({ filterParameter, restaurants })
    const filteredByCategory = getFilteredByCategory({ filterParameter, resto: filteredByOpen })
    const filteredByPrice = getFilteredByPrice({ filterParameter, resto: filteredByCategory });
    console.log(filteredByPrice)
    return filteredByPrice
}

export { prices, getFilteredByOpen, getFilteredByCategory, getFilteredByPrice, getFilteredResto }