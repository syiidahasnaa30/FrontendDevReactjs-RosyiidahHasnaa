import { Avatar, Box, Card, CardContent, CardHeader, Rating, Typography } from "@mui/material"
import { showFormattedDate } from "../utils/formattedDate"
import { PropTypes } from "prop-types"
const Reviews = ({ review }) => {
    return (
        <Card sx={{ margin: "16px", maxWidth: "100%" }}>
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
                    <Box sx={{ ml: "1px", fontSize: "15px" }}>({(review.rate / 10 * 5)})</Box>
                </Box>
                <br />
                <Typography variant="body2" color="text.secondary">
                    {review.text}
                </Typography>
            </CardContent>
        </Card>
    )
}

Reviews.propTypes = {
    review: PropTypes.object.isRequired
}

export default Reviews