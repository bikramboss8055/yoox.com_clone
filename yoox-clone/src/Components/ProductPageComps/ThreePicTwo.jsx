import { Flex,Box,Image,Text } from "@chakra-ui/react";
import "./ThreePicTwo.css"

    export default function ThreePicTwo(){

        return(
            <Flex backgroundColor="white" justify="space-around" alignItems="center"  mt="10%" width="100%" padding="1%">
            <Box  ml="5%">
                <Image  src="https://www.yoox.com/images/yoox80/banners/6825_3_BaumeMercier_Tris_W.png?634485886869569819#width=473&height=660" width="90%" height="60%" />
                <Flex direction="column"  textAlign="center" w="90%">
                    <Text fontSize="2xl" m="3% 0 3% 0"><b>BAUME & MERCIER</b></Text>
                    <Text m="2% 0 3% 0">Don’t miss our selection of watches</Text>
                </Flex>
            </Box>
            <Box>
                <Image src="https://www.yoox.com/images/yoox80/banners/6825_3_Seletti_Tris.png?634485886869569819#width=473&height=660" height="100%" />
                <Flex direction="column"  textAlign="center" w="90%">
                    <Text fontSize="2xl" m="3% 0 3% 0"><b>SELETTI</b></Text>
                    <Text m="2% 0 3% 0">Pure creativity</Text>
                </Flex>
            </Box>
            <Box ml="3%">
                <Image src="https://www.yoox.com/images/yoox80/banners/6825_1_AdidasSeasonal_M_Tris.jpg?634485886869569819#width=473&height=660" width="90%" height="60%" />
                <Flex direction="column"  textAlign="center"  w="90%">
                    <Text fontSize="2xl" m="3% 0 3% 0"><b>ADIDAS</b></Text>
                    <Text m="2% 0 3% 0">Sport, heritage & innovation</Text>
                </Flex>
            </Box>
            </Flex>
        )
    }