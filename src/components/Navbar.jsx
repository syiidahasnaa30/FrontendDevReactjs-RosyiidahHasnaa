import { FormControl, FormControlLabel, InputLabel, MenuItem, Radio, RadioGroup, Select } from "@mui/material"
import { useEffect, useState } from "react"
import { getRestaurantCategory } from "../utils/api"
import { PropTypes } from "prop-types"


const Navbar = ({ getFilterParameter }) => {
    const [priceRange, setPriceRange] = useState("")
    const [open, setOpen] = useState(false)
    const [category, setCategory] = useState("")
    const [data, setData] = useState([])

    const handleChangeCategory = (event) => {
        setCategory(event.target.value)
    }

    const handleChangePrice = (e) => {
        setPriceRange(e.target.value)
    }
    const onClickOpen = (e) => {
        if (open) {
            setOpen(false)
            e.target.checked = open;
        } else {
            setOpen(true)
            e.target.checked = open
        }
    }

    const handleReset = () => {
        setCategory("");
        setPriceRange("");
        setOpen(false)

    }
    useEffect(() => {
        const getData = async () => {
            const cat = await getRestaurantCategory();
            setData(cat);
        }
        getData()
        getFilterParameter({ open, price: priceRange, category })
    }, [priceRange, category, open])
    return (
        <>
            <hr />
            <nav className="navbar">
                <div className="navbar__filter">
                    <div>
                        <p>Filter By :</p>
                        <FormControl>
                            <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                defaultValue="female"
                                name="radio-buttons-group"
                            >
                                <FormControlLabel value={open} control={<Radio onClick={onClickOpen} checked={open} />} label="Open" />
                            </RadioGroup>
                        </FormControl>
                        <FormControl sx={{ m: 1, minWidth: 170 }} size="small">
                            <InputLabel id="">Price</InputLabel>
                            <Select labelId="demo-select-small"
                                id="demo-select-small"
                                value={priceRange}
                                label="Price"
                                onChange={handleChangePrice}>
                                <MenuItem value="Less than $100">
                                    Less than $100
                                </MenuItem>
                                <MenuItem value="$100 - $200">
                                    $100 - $200
                                </MenuItem>
                                <MenuItem value="More than $200">
                                    More than $200
                                </MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                            <InputLabel id="">Category</InputLabel>
                            <Select labelId="demo-select-small"
                                id="demo-select-small"
                                value={category}
                                label="Category"
                                onChange={handleChangeCategory}>
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>{
                                    data.map((dataItem) => (<MenuItem key={dataItem} value={dataItem}>{dataItem}</MenuItem>))
                                }
                            </Select>
                        </FormControl>
                    </div>
                </div>
                <div className="navbar__button">
                    <button onClick={handleReset}>Clear All</button>
                </div>

            </nav>
            <hr /></>
    )
}

Navbar.propTypes = {
    getFilterParameter: PropTypes.func.isRequired
}
export default Navbar