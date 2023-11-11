import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import NotFound from "./pages/NotFound";
import DetailPage from "./pages/DetailPage";

const RestaurantApp = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/restaurant/:id" element={<DetailPage />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </>

    )
}
export default RestaurantApp