import { Box, Text } from "@chakra-ui/react";
import "./Social.css"

export default function BottomPart(){

    return(
        <Box className="footer">
            <Box>
                <Text fontSize="sm">
                    POWERED BY YOOX NET-A-PORTER GROUP - COPYRIGHT © 2000-2022 YOOX NET-A-PORTER GROUP S.P.A. - ALL RIGHTS RESERVED - SIAE LICENCE # 401/I/526
                </Text>
            </Box>
            <Box color="#999;" >
                <Text fontSize="sm">
                    LEGAL AREA / PRIVACY POLICY
                </Text>
            </Box>
        </Box>
    )
}