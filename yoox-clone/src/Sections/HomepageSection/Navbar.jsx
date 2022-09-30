

import { Box } from "@chakra-ui/react"
import NavbarTop from "../../Components/NavbarComps/NavbarTop"
import NavbarMiddle from "../../Components/NavbarComps/NavbarMiddle"
import NavbarBottom from "../../Components/NavbarComps/NavbarBottom"
import "./Navbar.css"

export default function Navbar(){

    return(
        <Box className="Navbar">
        <NavbarTop/>
        <NavbarMiddle/>
        <NavbarBottom/>
        </Box>
    )
}