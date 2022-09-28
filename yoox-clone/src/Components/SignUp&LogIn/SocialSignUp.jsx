import { Box, Button, Flex, Icon, Text } from "@chakra-ui/react";
import "./NavbarSignUp.css"
// import {FiFacebook} from "react-icons/Fi"
// import {FcGoogle} from "react-icons/fc"

export default function SocialSignUp(){

    return(
        <Flex className="Social">
        <Text as="h1"color="#333"><b>REGISTER WITH YOUR SOCIAL MEDIA ACCOUNT</b></Text>
        <Button colorScheme="facebook" size="lg" width="400px" m="2%"></Button>
        {/* <Icon as={FiFacebook} /> */}
        <Button backgroundColor="whiteAlpha.100" size="lg" width="400px" border="2px solid #f2f2f2" m="1%"></Button>
        {/* <Icon as={FcGoogle}/> */}
        </Flex>
    )
}