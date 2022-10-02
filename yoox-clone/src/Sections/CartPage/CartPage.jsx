import { Box, Button, Checkbox, Flex, Heading, Highlight, Icon, Image, Text } from "@chakra-ui/react";
import CartPageNav from "./CartPageNav";
import {GrPaypal} from "react-icons/gr"
import { useEffect } from "react";
import { useState } from "react";
import {Table, Thead,Tbody,Tfoot,Tr,Th,Td,TableCaption,TableContainer,} from '@chakra-ui/react'
import axios from "axios";
import { NavLink } from "react-router-dom";

export default function CartPage(){

    
    const[data,setData]=useState([])
    const[ship,setShip]=useState({stndrd:false,exprss:false})
    
let Total;
const standard=9.49;
const express=19.95;
        
const handleQty=(id,amount)=>{
    
     data.map((elem)=>{
        if(elem.id===id){
            axios.patch( `https://yooxdb.herokuapp.com/Cart/${id}`,{
                Qt:elem.Qt+amount
            })
        }else{
            return elem
        }
     })
       

}
const CalculateTotal=(data)=>{
        let tot= data.reduce((acc,elem)=>acc+(Number(elem.Qt)*Number(elem.price)),0)
        if(ship.stndrd){
            tot=tot+standard
        }else if(ship.exprss){
            tot=tot+express
        }
        return tot
}
const handleChange=(e)=>{
    const{name,checked}=e.target 
    setShip({
        ...ship,[name]:checked
    })

}
useEffect(()=>{
    fetch(`https://yooxdb.herokuapp.com/Cart`)
    .then((res)=>res.json())
    .then((res)=>setData(res))
    .catch((err)=>console.log(err))

},[])


            return(
                <Box width={"100%"}>
                    <CartPageNav/>
                    <Flex mt="5%" direction="column" >
                        <Heading mb="4%" ml="40%"><Highlight key="shopping Cart" query='SHOPPING CART' styles={{ px: '1', py: '1', bg: 'yellow.200' }}>SHOPPING CART</Highlight></Heading>
                        <Flex gap="40%" mr={"5%"}>
                            <Text width="250px" ml="2%"><b>BACK TO SHOPPING</b></Text>
                           <Flex gap="4%"marginRight="-80%">
                            <Button backgroundColor="yellow" size="lg" width="200px"> <Icon as={GrPaypal}/></Button>
                           
                            <Text><b>or</b></Text>
                            <Button backgroundColor="#333333" ><Text color="white"><NavLink to={"/shipping"}>PROCEED WITH YOUR ORDER</NavLink></Text></Button>
                           </Flex>
                        </Flex>
                    </Flex>
                    <hr style={{border:"2px solid lightgray", marginTop:"2%",width:"90%", marginLeft:"5%"}} />
                    <TableContainer>
                        <Table  variant="striped" colorScheme="cyan">
                        <Thead>
                            <Tr>
                                <Th><b>Item No.</b></Th>
                                <Th><b>Image</b></Th>
                                <Th><b>Details</b></Th>
                                <Th><b>Quantity</b></Th>
                                <Th><b>Price</b></Th>
                                <Th><b>Remove</b></Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {
                                data.map((elem,ind)=>(
                                    <Tr id={elem.id} key={elem.id} >
                                        <Td key={elem.id}>{Number(ind)+1}</Td>
                                        <Td>{<Image src={elem.Avatar} width="75px"/>}</Td>
                                        <Td><Flex direction="column"  gap="5%">
                                            <Text>{elem.brand}</Text>
                                            <Text>{elem.Type}</Text>
                                            </Flex></Td>
                                        <Td><Flex>
                                            <Button colorScheme="orange" onClick={()=>handleQty(elem.id,-1)}
                                             disabled={elem.Qt===1} width="70px">-</Button>
                                            <Text>{elem.Qt}</Text>
                                            <Button colorScheme="orange" onClick={()=>handleQty(elem.id,+1)} width="70px">+</Button>
                                            </Flex>
                                            </Td>
                                        <Td>${Number(elem.Qt)*Number(elem.price)}</Td> 
                                        {/* { console.log(data)} */}
                                        <Td><Button onClick={()=>{
                                            //  let items= data;
                                             setData((prev)=>{
                                                return data.filter((ele)=>{
                                                    return ele.id !== elem.id
                                                })
                                             })

                                            
                                            
                                        }}>Remove</Button></Td>      
                                    </Tr>
                                ))
                            }
                        </Tbody>
                        <Tfoot>
                            <Tr>
                                <Th><Checkbox name="stndrd" disabled={ship.exprss===true} onChange={handleChange}><Text>STANDARD SHIPPING: ${standard}</Text></Checkbox></Th>
                                <Th><Checkbox name="exprss" disabled={ship.stndrd===true} onChange={handleChange}><Text>EXPRESS SHIPPING: ${express}</Text></Checkbox></Th>
                                <Th><b>TOTAL</b></Th>
                                <Th><b>AMOUNT:</b></Th>
                                <Th><b>${Total=CalculateTotal(data)}</b></Th>
                            </Tr>
                        </Tfoot>
                        </Table>
                    </TableContainer>
                </Box>
            )
}