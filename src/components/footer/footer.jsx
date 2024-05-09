import {Container, Flex, Box, Text, Link, Image} from "@chakra-ui/react"
import SocialIcons from "../header/SocialIcons"
//import EmailSignup from "./emailSignup"

export default function Footer() {
    return (
        <Container as="footer" bg="white" maxW="100%" py="30px" color="gray.600" fontSize="11px" zIndex={10}>
            <Flex
                maxW={{xl: 1200}}
                w="100%"
                mx="auto"
                px={{base: "20px", lg: 0}}
                justify="space-between"
                direction={{base: "column", lg: "row"}}
                align="flex-start"
            >
                <Box>
                    <Link href={"http://crf.org/"} isExternal>
                        <Image src="/logo-crf-reg-194.png" alt="CRF Logo"/>
                    </Link>
                </Box>
                {/*<Box mt={{base: "20px", lg: 0}}>*/}
                {/*    <EmailSignup/>*/}
                {/*</Box>*/}
                <Box mt={{base: "20px", lg: 0}}>
                    <SocialIcons/>
                    <Text mt={2}>
                        1700 Broadway, 9th Floor
                        <br/>
                        New York, NY 10019
                        <br/>
                        646.434.4500
                        <br/>
                        <Link textDecoration="underline" href="mailto:info@crf.org">
                            info@crf.org
                        </Link>
                    </Text>
                </Box>
                <Box mt={{base: "20px", lg: 0}}>
                    <Text mt={0}>© 2024, Cardiovascular Research Foundation<sup>®</sup>. All rights reserved.</Text>
                    <p>
                        <Link textDecoration="underline" target="_blank" href="https://www.crf.org/privacy-policy">
                            Privacy Policy
                        </Link>
                        <br/>
                        <Link
                            textDecoration="underline"
                            target="_blank"
                            href="https://www.crf.org/terms-and-conditions-of-use"
                        >
                            Terms and Conditions of Use
                        </Link>
                        <br/>
                    </p>
                </Box>
            </Flex>
        </Container>
    )
}
