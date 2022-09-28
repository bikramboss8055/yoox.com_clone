import { Box, Button, Flex, Input, Text,RadioGroup,Radio,Stack,Checkbox } from "@chakra-ui/react";
import {FormControl,FormLabel,FormErrorMessage,FormHelperText} from '@chakra-ui/react'
import { useState } from "react";
import "./NavbarSignUp.css"

// const initData={
//     firstName:"",
//     lastName:"",
//     email:"",
//     password:"",
//     genStatus:"",
//     terms:""
// }

export default function EmailSignUp({handleChange,handleClick}){

    


    return(
        <Flex className="EmailSign" direction="column">
            
            <Box className="firstInputGroups">
            <Text as="h1"color="#333" textAlign="center" mb="5%" ><b>OR WITH YOUR EMAIL</b></Text>
            
            <Input type="text" variant="styled" size="lg"  width="400px" name="firstName"
             m="2% 0 2% 2%" backgroundColor="#f6f6f6" color="black"
             _placeholder={{ color: 'inherit' }} onChange={handleChange}
            placeholder="FIRSTNAME*"  />

            <Input type="text" variant="styled" size="lg" width="400px" name="lastName"
            m="2%"  backgroundColor="#f6f6f6" color="black"
             _placeholder={{ color: 'inherit' }} onChange={handleChange}
            placeholder="LASTNAME*"  />

            <Input type="text" variant="styled" size="lg" width="400px" name="email"
            m="2%"  backgroundColor="#f6f6f6" color="black"
            _placeholder={{ color: 'inherit' }} onChange={handleChange}
            placeholder="E-MAIL*"  />

            <Input type="text" variant="styled" size="lg" width="400px" name="password"
            m="2%"  backgroundColor="#f6f6f6" color="black"
            _placeholder={{ color: 'inherit' }} onChange={handleChange }
            placeholder="PASSWORD*" /> 
            </Box>
            <FormLabel fontSize="smaller" color="#333" width="400px"><b>Personalize your shopping experience.</b></FormLabel>
            <RadioGroup defaultValue='2' width="400px">
                <Stack spacing={5} direction='row'>
                    <Radio variant="styled" name="genStatus" onChange={handleChange} colorScheme="blackAlpha" >
                        <b>Female</b>
                    </Radio>
                    <Radio variant="styled" name="genStatus" onChange={handleChange} colorScheme="blackAlpha">
                        <b>Male</b>
                    </Radio>
                </Stack>
            </RadioGroup>
            <FormLabel fontSize="smaller" width="400px"><b>
                If you are over 18 years old, celebrate your birthday with us: We have a surprise for you.</b>
                </FormLabel>
            <Input type="text" variant="styled" size="lg" width="400px" name="DOB"
             backgroundColor="#f6f6f6" color="black"
            _placeholder={{ color: 'inherit' }} onChange={handleChange}
            placeholder="DATE OF BIRTH" m="2%" /> 
            <FormLabel fontSize="smaller" backgroundColor="#f6f6f6" >I declare that I have read and accept the <u>MYOOX Terms and Conditions of Use</u></FormLabel>  
            <Box>
             <Checkbox defaultChecked ml="2%" name="terms" onChange={handleChange} width="390px" ><FormLabel fontSize="smaller" m="5% 0 5% 0" backgroundColor="#f6f6f6" >I agree to the use of my personal data in orderto be updated on new arrivals, informed about exclusive items and contacted as part of targeted marketing initiatives related to services offered by YOOX.
             By analyzing my personal data, order history and browsing habits, YOOX can improve my shopping experience with suggestions that correspond to my interests.
             For further information, please consult the <u>Privacy Policy</u> .</FormLabel></Checkbox>
            </Box>
            <Button size="lg" onClick={handleClick} backgroundColor="#333333" width="400px" color="white" >REGISTER</Button>
            
        </Flex>
    )
}