import { Flex, Image, Text,Button} from '@chakra-ui/react';


export default function Carousel({src,Brand,type,StrikedPrice,discount,price,handleClick,id,elem}){

    return(
        <Flex direction="column" textAlign="center" elem={elem} backgroundColor="white" gap="%" mt="10%" w="28%" height="100%" >
            <Image width="89%" src={src}  id={id}/>
            <Text fontSize="xl"><b>{Brand}</b></Text>
            <Text fontSize="large" m="4% 0 4% 0">{type}</Text>
            <Flex justify="center" gap="6%">
                <Text fontSize="small" textDecoration="line-through" >${StrikedPrice}</Text>
                <Text fontSize="small">{discount}</Text>
            </Flex>
            <Text fontSize="small" mt="2%"><b>${price}</b></Text>
            <Button size="lg" colorScheme="cyan" onClick={()=>handleClick(id,elem)} >ADD</Button>
        </Flex>
    )
}