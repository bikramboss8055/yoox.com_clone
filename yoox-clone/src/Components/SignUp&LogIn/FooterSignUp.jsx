import { Box,Text } from "@chakra-ui/react";
import BottomPart from "../Footer/BottomPart";
import "./NavbarSignUp.css"

export default function FooterSignUp(){

    return(
        <Box className="Footer">
            <Box borderTop="8px dashed black"></Box>
            <BottomPart/>
        </Box>
    )
}