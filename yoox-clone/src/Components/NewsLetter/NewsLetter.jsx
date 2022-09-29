import { Box,Button,Flex, Input, Text, RadioGroup,Stack,Radio, Checkbox } from "@chakra-ui/react";
import NewsLetter1 from "./NewsLetter1";
import "./NewsLetter.css"
import NewsLetter2 from "./NewsLetter2";
import NewsLetter3 from "./NewsLetter3";
import NewsLetter4 from "./NewsLetter4";
import NewsLetter5 from "./NewsLetter5";

export default function NewsLetter(){

    return(
        <Flex className="OuterMost">
            
            <NewsLetter1/>
            <NewsLetter2/>
            <NewsLetter3/>
            <NewsLetter4/>
            <NewsLetter5/>
        </Flex>
    )
}