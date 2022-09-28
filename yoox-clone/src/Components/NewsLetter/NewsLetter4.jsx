import { Box,Button,Flex, Input, Text, RadioGroup,Stack,Radio, Checkbox } from "@chakra-ui/react";
import "./NewsLetter.css"

export default function NewsLetter4(){

    return(
        <Flex className="first" direction="column">
                <Text  fontSize="xl" display="inline-block" borderBottom="1px solid black">
                    <b>MYOOX</b>
                </Text>
                <Text fontSize="sm"><b>Login</b></Text>
                <Text fontSize="sm"><b>My Orders</b></Text>
                <Text fontSize="sm"><b>My Details</b></Text>
                <Text fontSize="sm"><b>Dream Box</b></Text>
                <Text fontSize="sm"><b>Premiere</b></Text>
        </Flex>
            
    )

}