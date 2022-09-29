import { Box, Flex,Image } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import CartMenu from "../ProductPageComps/CartMenu";

import "./NavbarMiddle.css"

export default function NavbarMiddle({mt}){

    return(
        <Box className="MiddleSec" mt={mt} >
            <Flex justify="center" gap="1rem" >
                <NavLink to="/women">WOMEN</NavLink>
                <NavLink to="/men">MEN</NavLink>
                <NavLink to="/kids">KIDS</NavLink>
                <h2>/</h2>
                <NavLink to="/designArt">DESIGN+ART</NavLink>
            </Flex>
            <Box>
                <NavLink to="/">
                <Image className="img" src="https://www.yoox.com/media/yoox16/header/yoox-logo-p.svg" width="100px" height="45px" objectFit="cover"/>
                </NavLink>
            </Box>
            <Flex justify="center" gap="1rem">
                 <h1 className="icons">
                     🔍
                 </h1>
                 <h1 className="icons">
                    ♡
                 </h1>
                 <h1 className="icons">
                    <CartMenu/>
                 </h1>
            </Flex>
        </Box>
    )
}