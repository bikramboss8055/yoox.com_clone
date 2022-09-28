import {
    Modal,ModalOverlay,ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Box,Text,Highlight, Button, Flex,Icon, Input, Checkbox} from '@chakra-ui/react'
    // import {FiFacebook} from "react-icons/Fi"
    // import {FcGoogle} from "react-icons/fc"
    import { useDisclosure } from '@chakra-ui/react'

export default function LogInModal({handleChange,handleClick}) {

            const { isOpen, onOpen, onClose } = useDisclosure()

            return (
              <Box>
                <Text style={{cursor:"pointer"}} onClick={onOpen}>LOGIN</Text>
                    <Modal isOpen={isOpen} onClose={onClose}>
                        <ModalOverlay />
                        <ModalContent>
                        <ModalHeader textAlign="center" ><Highlight query='It’s great to see you again.' styles={{ px: '1', py: '1', bg: 'yellow.200' }}>It’s great to see you again.</Highlight></ModalHeader>
                        <ModalCloseButton />
                        <hr style={{border:"1px dashed lightgray"}}/>
                        <ModalBody>
                        <Text textAlign="center" >Log in with</Text>
                        <Flex gap="3%" mb="1rem">
                            <Button size="lg" width="300px" colorScheme="facebook"></Button>
                            {/* <Icon as={FiFacebook} /> */}
                            <Button size="lg" width="300px"  border="2px solid lightgray" colorScheme="whiteAlpha"></Button>
                            {/* <Icon as={FcGoogle} /> */}
                        </Flex>    
                        <hr style={{border:"1px dashed lightgray"}}/>
                            <Text textAlign="center" >or with your e-mail address</Text>
                            {/* ///form LogIn */}
                        <Box>
                        <Input variant="styled" size="lg" width="395px"m="2%" name="email"
                        onChange={handleChange}
                        backgroundColor="#f6f6f6" color="black" _placeholder={{ color: 'inherit' }}placeholder="EMAIL" /> 
                        <Input variant="styled" size="lg" width="395px"m="2%" name="password" 
                        onChange={handleChange}
                        backgroundColor="#f6f6f6" color="black" _placeholder={{ color: 'inherit' }}placeholder="PASSWORD" /> 
                        </Box>    
                        <Checkbox defaultChecked ml="2%" width="390px" ><Text fontSize="smaller" m="5% 0 5% 0" backgroundColor="#f6f6f6" >REMEMBER ME</Text></Checkbox>
                        <Text ml="50%" mb="2%" mt="2%" ><u><b>Forgot your password?</b></u></Text>
                        <Button size="lg" backgroundColor="#333333" onClick={handleClick} width="400px" color="white" >LOGIN</Button>
                        <Text textAlign="center" fontSize="smaller" backgroundColor="#f6f6f6" mb="3%" mt="3%">For more information, please consult the Privacy Policy</Text>
                        <hr style={{border:"1px dashed lightgray"}}/>
                        <Text textAlign="center" mb="3%" mt="3%" >ARE YOU NEW TO YOOX? <u><b>REGISTER NOW</b></u></Text>

                        </ModalBody>
          
                       
                    </ModalContent>
                    </Modal>
                </Box>
            )
          }
