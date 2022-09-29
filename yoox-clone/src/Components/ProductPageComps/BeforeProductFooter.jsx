import { Box, Image,Flex,Text } from "@chakra-ui/react";


export default function BeforeProductFooter({src,Brand,type,StrikedPrice,discount,price}){

    return(
        <Box  m="5% 0 5% 12%" >
            <Image src="https://www.yoox.com/images/yoox80/banners/6833_3_8byoox_SS22_MOUNTAUK_Special.png?634485886869569819#width=930&height=660" position="relative"/>
         <Flex direction="column" textAlign="center" backgroundColor="white" gap="0%" mt="5%" width="18%" height="12%"  position="absolute" right="6%" bottom="26%">
            <Image width="89%" src={src}/>
            <Text fontSize="xl"><b>{Brand}</b></Text>
            <Text fontSize="large" m="4% 0 4% 0">{type}</Text>
            <Flex justify="center" gap="6%">
                <Text fontSize="small" textDecoration="line-through" >${StrikedPrice}</Text>
                <Text fontSize="small">{discount}</Text>
            </Flex>
            <Text fontSize="small" mt="2%"><b>${price}</b></Text>
         </Flex>
         <Box width="28%" backgroundColor="white"  position="absolute" bottom="26%" gap="2%" left="16%" padding="2%">
            <Text fontSize="2xl"><b>YOOX IN THE HAMPTONS</b></Text>
            <Text>Relive the best moments from our exclusive pop-up shop</Text>
         <Flex gap="2%" >
                <Text  display="inline-block"  borderBottom="2px" width="35%"><b>SHOP NOW</b></Text>
                <Text  display="inline-block" borderBottom="2px" width="50%"><b>GET INSPIRED</b></Text>
         </Flex>
         </Box>
        </Box>
    )
}