import { Box,Button,Flex, Input, Text, RadioGroup,Stack,Radio, Checkbox } from "@chakra-ui/react";
import "./NewsLetter.css"

export default function NewsLetter2(){

    return(
        <Flex className="first" direction="column">
                <Text  fontSize="xl" display="inline-block" borderBottom="1px solid black" ><b>HELP</b></Text>
                <Text fontSize="sm"> <b>Shipping times & <br /> costs</b></Text>
                <Text fontSize="sm"><b>Payments and <br /> web security</b></Text>
                <Text fontSize="sm"><b>Product quality</b></Text>
                <Text fontSize="sm"><b>Track your order</b></Text>
                <Text fontSize="sm"><b>Returns & refunds</b></Text>
                <Text fontSize="sm"><b>FAQs</b></Text>
                <Text fontSize="sm"><b>Size Guide</b></Text>
            </Flex>

    )
}