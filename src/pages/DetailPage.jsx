import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { getDetailRestaurant, getRestaurantReview } from "../utils/api"
import { Avatar, Rating } from "@mui/material"
import { GoHomeFill } from "react-icons/go"

const DetailPage = () => {
    const { id } = useParams()
    const [restaurant, setRestaurant] = useState({})
    const [reviews, setReviews] = useState([])


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
    }, [])

    console.log("id=" + id)
    return (
        <>
            <div><Link to="/"><GoHomeFill /></Link></div>
            <h1>{restaurant.name}</h1>
            <Rating name="half-rating-read" value={(restaurant.rate / 10) * 5} precision={0.5} readOnly />
            {
                reviews.map((review) => (
                    <div key={review.id}>
                        <Avatar src={review.avatar} alt={review.name} />
                        <p>{review.name}</p>
                        <Rating value={(review.rate / 10) * 5} />
                        <div>
                            <p>{review.text}</p>
                        </div>


                    </div>
                ))
            }

        </>
    )
}

export default DetailPage