import { Box } from "@chakra-ui/react";
import Footer from "./Footer";
import HomepageMainPicture from "./HompageMainPicture";
import Navbar from "./Navbar";
import NewsletterSection from "./NewsletterSection";
import TwoPic from "./TwoPic";


export default function HomePage(){

    return(
        <Box>
            <Navbar/>
            <HomepageMainPicture/>
            <TwoPic/>
            <NewsletterSection/>
            <Footer/>
        </Box>
    )
}