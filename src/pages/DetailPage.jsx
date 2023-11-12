import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { getDetailRestaurant, getRestaurantReview } from "../utils/api"
import { Avatar, Box, Card, CardContent, CardHeader, Rating, Typography } from "@mui/material"
import { GoHomeFill } from "react-icons/go"
import { showFormattedDate } from "../utils/formattedDate"

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
        <div className="detail-page">
            <div><Link to="/"><button className="buttonAction"><GoHomeFill className="buttonAction" /></button></Link> Back to home page</div>
            <div className="detail-page__header">
                <h1>{restaurant.name}</h1>
                <Rating name="half-rating-read" value={(restaurant.rate / 10) * 5} precision={0.5} readOnly />
            </div>
            <h3>Reviews</h3>
            <div className="detaiil-page__rating__content">
                {
                    reviews.map((review) => (
                        <Card key={review.id} sx={{ margin: "16px", maxWidth: "100%" }}>
                            <CardHeader
                                avatar={
                                    <Avatar src={review.avatar} alt={review.name} />
                                }
                                title={review.name}
                                subheader={showFormattedDate(review.createdAt, 'en')}
                            />
                            <CardContent>
                                <Box
                                    sx={{
                                        width: 200,
                                        display: 'flex',
                                        alignItems: 'center',
                                    }}
                                >
                                    <Rating sx={{ fontSize: "20px" }} name="half-rating-read" value={(review.rate / 10) * 5} precision={0.5} readOnly />
                                    <Box sx={{ ml: "1px", fontSize: "15px" }}>({(review.rate / 10 * 5)})</Box></Box>
                                <br />
                                <Typography variant="body2" color="text.secondary">
                                    {review.text}
                                </Typography>
                            </CardContent>
                        </Card>
                    ))
                }
            </div>

        </div >
    )
}

export default DetailPage