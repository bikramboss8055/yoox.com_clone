import { Box, Flex, Text } from "@chakra-ui/react";
import "./NavbarSignUp.css"

export default function NavbarBottomSigup(){

    return(
        <Flex className="NavBarBottom" direction="column" gap="12%" >
            <Box mt="2rem">
            <Text as="h1" color="#333" fontSize="22px"><b>MYOOX</b></Text>
            <Text fontSize="14px" ><b>REGISTRATION</b></Text>
            </Box>
            <Box >
                <Text fontSize="13px"><b>Take advantage of a faster checkout and enjoy promotions for registered customers only</b></Text>
                <Text fontSize="16px" display="inline-block" borderBottom="2px solid black" ><b>Discover all the benefits</b></Text>
            </Box>
        </Flex>

    )
}