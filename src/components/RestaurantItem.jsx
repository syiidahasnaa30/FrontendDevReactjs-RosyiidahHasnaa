import { Rating } from "@mui/material";
import { GoDotFill } from "react-icons/go"
import React from "react";

const RestaurantItem = ({ name, image, rate, category, open, price }) => {

    return <>
        <div className="restaurant-item">
            <img src={image} alt="image" />
            <div className="restaurant-item__description">
                <h3>{name}</h3>
                <Rating name="half-rating-read" defaultValue={(rate / 10) * 5} precision={0.5} readOnly sx={{ color: 'var(--accent-200)' }} />
                <div className="restaurant-item__information">

                    <p className="restaurant-item__category">{category.substring(0, 7).toUpperCase()} . ${price}</p>
                    <p className="restaurant-item__open"><GoDotFill color={open ? 'teal' : 'red'} />{open ? 'OPEN' : 'CLOSE'}</p>
                </div>
            </div>
            <button>LEARN MORE</button>
        </div></>
}
export default RestaurantItem