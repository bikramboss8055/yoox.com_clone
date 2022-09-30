import { Box, Button, Checkbox, Flex, Input, Text } from '@chakra-ui/react'
import React from 'react'

export const Shipping = () => {
  return (
    <Flex width={"100%"}>
        <Box backgroundColor="white" >
            <Box ml={"5%"}>
            <Text color={"#333"} fontSize="3xl" fontWeight={"bold"}>
                Shipping
            </Text>
            <Text fontWeight={"bold"}>
                Enter shipping details 
            </Text>
            </Box>
            <Box   backgroundColor="white" mt="5%" border={"1px solid red"} width="40%" ml={"5%"}>
            <Input type="text" variant="styled" size="lg"  width="400px" name="firstName"
             m="2% 0 2% 2%" backgroundColor="#f6f6f6" color="black"
             _placeholder={{ color: 'inherit' }} 
            placeholder="FIRSTNAME*"  />
            <Input type="text" variant="styled" size="lg"  width="400px" name="firstName"
             m="2% 0 2% 2%" backgroundColor="#f6f6f6" color="black"
             _placeholder={{ color: 'inherit' }} 
            placeholder="LASTTNAME*"  />
            <Input type="text" variant="styled" size="lg"  width="400px" name="firstName"
             m="2% 0 2% 2%" backgroundColor="#f6f6f6" color="black"
             _placeholder={{ color: 'inherit' }} 
            placeholder="C/O"  />
            <Input type="text" variant="styled" size="lg"  width="400px" name="firstName"
             m="2% 0 2% 2%" backgroundColor="#f6f6f6" color="black"
             _placeholder={{ color: 'inherit' }} 
            placeholder="TELEPHONE"  />
            <Input type="text" variant="styled" size="lg"  width="400px" name="firstName"
             m="2% 0 2% 2%" backgroundColor="#f6f6f6" color="black"
             _placeholder={{ color: 'inherit' }} 
            placeholder="STREET ADDRESS"  />
            <Input type="text" variant="styled" size="lg"  width="400px" name="firstName"
             m="2% 0 2% 2%" backgroundColor="#f6f6f6" color="black"
             _placeholder={{ color: 'inherit' }} 
            placeholder="CITY"  />
            <Input type="text" variant="styled" size="lg"  width="400px" name="firstName"
             m="2% 0 2% 2%" backgroundColor="#f6f6f6" color="black"
             _placeholder={{ color: 'inherit' }} 
            placeholder="ZIP CODE"  />
            <Input type="text" variant="styled" size="lg"  width="400px" name="firstName"
             m="2% 0 2% 2%" backgroundColor="#f6f6f6" color="black"
             _placeholder={{ color: 'inherit' }} 
            placeholder="STATE"  />
            <Input type="text" variant="styled" size="lg"  width="400px" name="firstName"
             m="2% 0 2% 2%" backgroundColor="#f6f6f6" color="black"
             _placeholder={{ color: 'inherit' }} 
            placeholder="COUNTRY"  />
            <Flex direction={"column"}>
            <Checkbox  mt={"5%"} ><Text>Save this address in MYOOX</Text></Checkbox>
            <Checkbox mt={"5%"} ><Text>Set as default</Text></Checkbox>
            </Flex>
            <Button backgroundColor="#333333" m="5% 0 0 50%"><Text color="white">SHIP TO THIS ADDRESS</Text></Button>
            </Box>
        </Box>
        <Flex justifyContent={"space-around"} direction="column" width={"100%"} border={"1px solid black"} mr="20%">
            <Text color={"#333"} fontSize="3xl" fontWeight={"bold"} ml="5%" display={"inline-block"} borderBottom={"1px solid black"} >
                YOUR ORDER
            </Text>
            <Text fontWeight={"bold"} ml="5%">TOTAL FOR ITEMS:{}</Text>
            <Box>
            <Text fontWeight={"bold"} ml="5%">SHIPPING:</Text>
            <Text ml="5%">Standard Shipping 6-8 business days</Text>
            </Box>
            <Box>
            <Text fontWeight={"bold"} ml="5%">SHIPPING COSTS</Text>
            <Text ml="5%">Free</Text>
            </Box>
            <Box>
            <Text fontSize={"bold"} ml="5%">ORDER TOTAL:</Text>
            <Text ml="5%">{}</Text>
            </Box>
        </Flex>
        
    </Flex>
  )
}
