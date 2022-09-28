import { Box, Text } from "@chakra-ui/react"
import "./NavbarBottom.css"

export default function NavbarBottom(){

    return(
        <Box className="NavBottom">
            <Text color={"white"}>NEW ARRIVALS</Text>
            <Text color={"white"}>DESIGNERS</Text>
            <Text color={"white"}>CLOTHING</Text>
            <Text color={"white"}>SHOES </Text>
            <Text color={"white"}>ACCESSORIES</Text>
            <Text color={"white"}>8 BY YOOX</Text>
            <Text color={"white"}>YOOXYGEN</Text>
            <Text color={"white"}>COLLABORATIONS</Text>
            <Text color={"white"}>SALE</Text>
        </Box>
    )
}