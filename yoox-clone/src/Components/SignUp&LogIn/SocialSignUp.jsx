import { Box, Button, color, Flex, Icon, Text} from "@chakra-ui/react";
import "./NavbarSignUp.css"
import { GrFacebook } from "react-icons/gr";

import { FcGoogle } from "react-icons/fc";

export default function SocialSignUp(){

    return(
        <Flex className="Social">
        <Text as="h1" color="#333"><b>REGISTER WITH YOUR SOCIAL MEDIA ACCOUNT</b></Text>
        <Button colorScheme="facebook" size="lg" width="400px" m="2%"><GrFacebook  size={'1.5em'} /> </Button>
        
        <Button backgroundColor="whiteAlpha.100" size="lg" width="400px" border="2px solid #f2f2f2" m="1%"><FcGoogle size={'1.5em'}/></Button>
    
        </Flex>
    )
}