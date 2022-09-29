import {
    Menu,MenuButton,MenuList,MenuItem,MenuItemOption,MenuGroup,MenuOptionGroup,MenuDivider,Text,Flex,Image,} from '@chakra-ui/react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from "axios"
import {ChevronDownIcon} from "@chakra-ui/icons"
import { NavLink } from 'react-router-dom'

 export default function CartMenu(){

    const[data,setData]=useState([])

    useEffect(()=>{
            fetch(`https://yooxdb.herokuapp.com/Cart`)
            .then((res)=>res.json())
            .then((res)=>setData(res))
            .catch((err)=>console.log(err))

    },[data])

    return(
<Menu>
  <MenuButton as={Text} righticon={<ChevronDownIcon />}>
    👜  
  </MenuButton>
    <MenuList>
        <NavLink to="/cart"><Text fontSize="smaller" display="inline-block" backgroundColor="salmon"color="white" border="2px solid teal"><b> GO To Shopping Cart</b></Text></NavLink>
        {
               data.length===0?<Text>Your Shopping Cart is Empty</Text>:data.map((elem)=>(
                <MenuItem minH="100px" key={elem.id}>
                    <Image
                        boxSize='2rem'
                        borderRadius='full'
                        src={elem.Avatar}
                        alt='Fluffybuns the destroyer'
                        mr='12px'
                    />
                    <Flex direction="column" justify="center" alignItems="center">
                    <Text fontSize="small"><b>{elem.brand}</b></Text>
                    <Text fontSize="small">{elem.Type}</Text>
                    <Text fontSize="small">{elem.price}</Text>
                    </Flex>
                </MenuItem>
            ))
        }

        
    </MenuList>
</Menu>
    )

}