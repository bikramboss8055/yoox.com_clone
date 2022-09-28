import { Flex, Image, Text } from "@chakra-ui/react";
import "./Social.css"

export default function Social(){

    return(
        <Flex className="socials" justify="space-between" >
            <Flex gap="2%" width="60%" alignItems="center" >
                <Text fontSize="md" ml="12%" ><b>CONNECT WITH US</b></Text>
                <Image src="https://www.yoox.com/media/yoox16/icons/social/normal/Facebook@svg.svg" width="40px"/>
                <Image src="https://www.yoox.com/media/yoox16/icons/social/normal/Twitter@svg.svg" width="40px"/>
                <Image src="https://www.yoox.com/media/yoox16/icons/social/normal/Instagram@svg.svg" width="40px"/>
                <Image src="https://www.yoox.com/media/yoox16/icons/social/normal/Youtube@svg.svg" width="40px"/>
                <Image src="https://www.yoox.com/media/yoox16/icons/social/normal/Pinterest@svg.svg" width="40px"/>
                <Image src="https://www.yoox.com/media/yoox16/icons/social/normal/Tiktok@svg.svg" width="40px"/>
            </Flex>
            <Flex gap="2%" width="50%" alignItems="center" >
                <Text fontSize="4xl" ml="21%" >📱</Text>
                <Text fontSize="md" lineHeight="16px" ><b>DOWNLOAD THE APP FOR iOS / ANDROID</b></Text>
            </Flex>
        </Flex>
    )
} 