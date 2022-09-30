import { Route, Routes } from "react-router-dom";
import CartPage from "../CartPage/CartPage";
import DesignerAndArtPage from "../Designer&ArtPage/Designer&Art";
import HomePage from "../HomepageSection/HomePage";
import KidsProductPage from "../KidsProductPage/KidsProductPage";
import MenProductPage from "../MenProductPage/MenProductPage";
import { Shipping } from "../Shipping/Shipping";
import SignUpAndLogInPage from "../SignUp&LogInPage/SignUp&LogInPage";
import WomenProductPage from "../WomenProductPage/WomenProductPage";

export default function AllRoutes(){

    return(
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/register" element={<SignUpAndLogInPage/>}/>
            <Route path="/men"  element={<MenProductPage/>}/>
            <Route path="/women" element={<WomenProductPage/>}/>
            <Route path="/cart" element={<CartPage/>}/>
            <Route path="/kids" element={<KidsProductPage/>}/>
            <Route path="/designArt" element={<DesignerAndArtPage/>}/>
            <Route path="/shipping" element={<Shipping/>}/>
        </Routes>
    )
}