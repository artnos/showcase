import {
    Flex,
    Box,

    AspectRatio,
    Img,

} from "@chakra-ui/react"

export default function Tct2024HomeTop() {

    const layoutMaxWidth = 1500

    const topHeaderData = {
        logo: "https://assets.crfconnect.com/meetings/tct2024/homepage/tct2024_logo_lockup_home.png",
        meeting: "TCT 2024",
        bgImg: "https://assets.crfconnect.com/meetings/tct2024/homepage/TCT2024_Temp_Homepage_Header.png",
        posterImg: "https://assets.crfconnect.com/meetings/tct2024/homepage/TCT2024_Website_Header_Still.png",
        video: "https://assets.crfconnect.com/meetings/tct2024/homepage/TCT2024_Website_Header_Animation_NEW.mp4",

    };


    return (
        <Flex position="relative" overflow="hidden" height={"400px"}>

            <AspectRatio
                ratio={{
                    base: 3 / 3,
                    lg: layoutMaxWidth / 600,
                    xxl: layoutMaxWidth / 460,
                }}
                width="100%"
                maxHeight="500px"
                max-width={"1200px"}
                margin="0 auto"
            >
                {
                    topHeaderData.video ? <Box as="video"
                                               autoPlay muted playsInline loop
                                               src={topHeaderData.video}
                                               poster={topHeaderData.posterImg}
                    ></Box> : <Img src={topHeaderData.bgImg}/>
                }
            </AspectRatio>

            <Flex
                direction="column"
                align="center"
                backgroundSize="cover"
                px="20px"
                position="absolute"
                top="0"
                left="0"
                w="100%"
                h="100%"
            >
                <Box w="100%" h="100%"

                     maxW={{
                    xl: "1500px"
                    //layoutMaxWidth
                }} px="20px">
                    <Flex justifyContent="left" alignItems={"center"} h="100%">
                        <Img
                            className={"heroLogo"}
                            src={topHeaderData.logo}
                            alt={topHeaderData.meeting}
                            mb="0px"
                            maxHeight={{base: "70%", md: "70%", lg: "80%"}}
                            // ml={["-64px"]}
                            sx={{
                                '@media screen and (max-width: 1275px)': {
                                    ml: "0px",
                                },
                            }}
                        />
                        <br/><br/><br/>
                    </Flex>
                </Box>
            </Flex>

        </Flex>
    );
}