import { Box,Button,Flex, Input, Text, RadioGroup,Stack,Radio, Checkbox } from "@chakra-ui/react";
import "./NewsLetter.css"

export default function NewsLetter5(){

    return(
        <Flex className="first" direction="column">
            <Text fontSize="xl" display="inline-block" borderBottom="1px solid black">
                <b>ABOUT US</b>
            </Text>
            <Text fontSize="sm"><b>Company Info</b></Text>
            <Text fontSize="sm"><b>Press</b></Text>
            <Text fontSize="sm"><b>Affiliation</b></Text>
            <Text fontSize="sm"><b>Careers</b></Text>
        </Flex>
    )
}

