import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { getDetailRestaurant, getRestaurantReview } from "../utils/api"
import { Box, Rating } from "@mui/material"
import { GoDotFill, GoHomeFill } from "react-icons/go"

import Reviews from "../components/Reviews"
import LoadingPage from "../components/LoadingPage"

const DetailPage = () => {
    const { id } = useParams()
    const [restaurant, setRestaurant] = useState({})
    const [reviews, setReviews] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const getDetailData = async () => {
            const { data } = await getDetailRestaurant(id)
            console.log(data)
            setRestaurant(data);
        }
        const getReviews = async () => {
            const { data } = await getRestaurantReview(id)
            console.log(data)
            setReviews(data)
        }
        getDetailData()
        getReviews()
        setLoading(false)
    }, [])

    if (loading) {
        return <LoadingPage />
    }

    return (
        <>
            <div className="detail-page">

                <div><Link to="/"><button className="buttonAction"><GoHomeFill className="buttonAction" /></button></Link> Back to home page</div>
                <div className="detail-page__header">
                    <h1>{restaurant.name}</h1>
                    <p><GoDotFill color={restaurant.open ? 'teal' : 'red'} />{restaurant.open ? 'Open now' : 'Closed'}</p>
                    <h4>${restaurant.price} . {restaurant.category}</h4>
                </div>

                <Box
                    sx={{
                        width: 200,
                        display: 'flex',
                        alignItems: 'center',
                    }}
                ><h3>Reviews </h3>
                    <Rating name="half-rating-read" value={(restaurant.rate / 10) * 5} precision={0.5} readOnly />
                    <Box >({(restaurant.rate / 10 * 5)})</Box>
                </Box>
                <div className="detaiil-page__rating__content">
                    {
                        reviews.map((review) => (
                            <Reviews key={review.id} review={review} />
                        ))
                    }
                </div>

            </div ></>
    )
}

export default DetailPage