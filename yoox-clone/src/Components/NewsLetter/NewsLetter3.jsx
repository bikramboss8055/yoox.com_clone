import { Box,Button,Flex, Input, Text, RadioGroup,Stack,Radio, Checkbox } from "@chakra-ui/react";
import "./NewsLetter.css"

export default function NewsLetter3(){

    return(
        <Flex className="FormSec" direction="column" >
                <Text fontSize="3xl"><b>✉</b></Text>
                <Text fontSize="2xl"><b>YOOX NEWS</b></Text>
                <Text><b>Sign up for the newsletter
                      and discover the latest arrivals and promotions</b></Text>
                <Input variant="styled" size="md" width="200px" placeholder="INSERT YOUR EMAIL ADDRESS" border="2px" />
                <RadioGroup defaultValue='2'>
                <Stack spacing={5} direction='row'>
                    <Radio variant="styled" >
                        <b>Woman</b>
                    </Radio>
                    <Radio colorScheme='green'>
                        <b>Man</b>
                    </Radio>
                </Stack>
                </RadioGroup>
                <Checkbox defaultChecked ml="2%"><Text fontSize="sm"><b>I consent to receive YOOX newsletters via email.<br/> For further information, please consult the Privacy Policy.</b></Text></Checkbox>
                <Button backgroundColor="#333;" size="lg" width="150px" color="white" mb="2%">SIGN UP</Button>
            </Flex>
    )
}