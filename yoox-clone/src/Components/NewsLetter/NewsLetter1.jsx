import { Box,Button,Flex, Input, Text, RadioGroup,Stack,Radio, Checkbox } from "@chakra-ui/react";
import "./NewsLetter.css"

export default function NewsLetter1(){
        return(
            <Flex className="first" direction="column">
                <Text fontSize="xl" display="inline-block" borderBottom="1px solid black">
                    <b>NEW TO YOOX</b>
                </Text>
                <Text fontSize="sm"><b>Shopping guide</b></Text>
                <Text fontSize="sm"><b>iPhone/iPad/Android</b></Text>
                <Text fontSize="sm"><b>Browse all <br /> Designers</b></Text>
                <Text fontSize="sm"><b>Browse all <br /> Categories</b></Text>
            </Flex>
        )
}