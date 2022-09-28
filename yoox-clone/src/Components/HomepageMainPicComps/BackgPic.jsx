import { Box, Flex, Image, Text } from "@chakra-ui/react";
import "./BackgPic.css"

export default function BackgPic(){

    return(
    <Box className="MainPic">
        <Image src="https://www.yoox.com/images/yoox80/banners/6824_1_TrendGardenParty_MAIN_WM.jpg?634485886869569819&impolicy=cropDefault&width=960&height=510" position="relative" width="90%"/>
        <Box className="text">
            <Flex direction="column" >
            <Text fontSize="2xl"><b>GARDEN OF DREAMS</b></Text>
            <h2>A magical midsummer night</h2>
            </Flex>
            <Flex className="BorderdT">
                <Text  display="inline-block" borderBottom="2px" width="50%" ><b>DISCOVER THE TREND</b></Text>
                <Text  display="inline-block" borderBottom="2px" width="35%"><b>SHOP NOW</b></Text>
            </Flex>
        </Box>    
    </Box>
    )
}