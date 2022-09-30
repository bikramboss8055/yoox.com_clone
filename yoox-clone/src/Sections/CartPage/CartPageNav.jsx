import { Box } from "@chakra-ui/react";
import NavbarMiddle from "../../Components/NavbarComps/NavbarMiddle";
import NavbarTop from "../../Components/NavbarComps/NavbarTop";



export default function CartPageNav({handleChange,handleClick}){

    return(
        <Box>
        <NavbarTop
             position="fixed" top="0px" zIndex="2" shadow="lg" handleChange={handleChange} handleClick={handleClick}
              />
            <NavbarMiddle mt="2%" />
        </Box>
    )

}