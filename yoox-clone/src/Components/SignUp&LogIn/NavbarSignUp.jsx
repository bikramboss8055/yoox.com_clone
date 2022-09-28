import { Box } from "@chakra-ui/react";
import NavbarMiddle from "../NavbarComps/NavbarMiddle";
import NavbarTop from "../NavbarComps/NavbarTop";
import NavbarBottomSigup from "./NavbarBotttomSignup";
import "./NavbarSignUp.css"

export default function NavbarSignUp({handleChange,handleClick}){

    return(
        <Box className="SignUpNavbar">
            <NavbarTop
             position="fixed" top="0px" zIndex="2" shadow="lg" handleChange={handleChange} handleClick={handleClick}
              />
            <NavbarMiddle mt="2%" />
            <NavbarBottomSigup/>
        </Box>

    )
}