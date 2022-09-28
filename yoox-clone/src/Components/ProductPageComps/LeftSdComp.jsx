import { Text,Box } from "@chakra-ui/react";

export default function LeftSd({txt1,txt2}){

    return(
        <Box ml="2%" textAlign="center" mt="5%" width="30%">
            <Text fontSize="3xl">{txt1}</Text>
            <Text mr="40%" mt="5%"><b><u>{txt2}</u></b></Text>
        </Box>
    )
}