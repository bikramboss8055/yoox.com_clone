import { Box, Flex, Image, Text } from "@chakra-ui/react";
import "./ThreePic.css"

export default function ThreePic({src,src2}){

    return(
        <Box>
        <Flex className="threePic">
            <Box>
                <Image className="firstPic" src={src} />
                <Flex direction="column"  textAlign="center" ml="48%" w="90%">
                    <Text fontSize="2xl" m="3% 0 3% 0"><b>20% OFF | 25% OFF | 30% OFF</b></Text>
                    <Text m="3% 0 3% 0">Markdown applied in Shopping Bag</Text>
                    <Text m="3% 0 3% 0"><b><u>SHOP NOW</u></b></Text>
                </Flex>
            </Box>
            <Flex className="MiddleText" direction="column" gap="5%" justify="center" textAlign="center">
                <Text>DESIGNERS</Text>
                <Flex  direction="column" textAlign="center" gap="4%">
                <Text fontSize="md" ><b>BRUNELLO CUCINELLI</b></Text>
                <Text fontSize="md"><b>DSQUARED2</b></Text>
                <Text fontSize="md"><b>DOLCE & GABBANA</b></Text>
                <Text fontSize="md"><b>ROBERTO CAVALLI</b></Text>
                <Text fontSize="md"><b>MAISON MARGIELA</b></Text>
                <Text fontSize="md"><b>VERSACE</b></Text>
                <Text fontSize="md"><b>BALENCIAGA</b></Text>
                <Text fontSize="md"><b>GUCCI</b></Text>
                <Text fontSize="md"><b>PRADA</b></Text>
                <Text fontSize="md"><b>MARNI</b></Text>
                </Flex>
                <Text fontSize="lg"><u><b>VIEW ALL</b></u></Text>

            </Flex>
            <Box>
                <Image className="thirdPic" src={src2}/>
                <Flex direction="column" textAlign="center" ml="40%" w="100%">
                    <Text fontSize="2xl" m="3% 0 2% 0"><b>THE GIVING MOVEMENT X YOOX</b></Text>
                    <Text m="3% 0 3% 0">The exclusive capsule collection</Text>
                    <Flex gap="20%" m="3% 0 3% 19%">
                        <Text><b><u>GET INSPIRED</u></b></Text>
                        <Text><b><u>ShOP NOW</u></b></Text>
                    </Flex>
                </Flex>
            </Box>
           
        </Flex>
        </Box>
    )
}