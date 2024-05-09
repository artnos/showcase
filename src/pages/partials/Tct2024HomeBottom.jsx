import {
    Box,
    Link,
    Heading,
    Text,
    Flex,
    Img,
    Icon,
    Container, Grid, GridItem, Divider
} from "@chakra-ui/react"


import HomepageMainWrapper from "../../components/layout/homepageWrapper"


import Wrapper from "../../components/layout/wrapper"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"
import { FiChevronLeft, FiChevronRight } from "react-icons/fi"


export default function Tct2024HomeBottom() {


    const h1Styles = {
        mb: "0px", fontSize: ["40px", "60px"], overflowWrap: "normal"
    }
    const h2Styles = {
        mb: "0px", fontSize: ["26px", "34px"], overflowWrap: "normal"
    }

    const h3Styles = {
        mb: "0px", fontSize: ["20px", "24px"], overflowWrap: "normal"
    }


    const infoSlidesData = [
        {
            qoute: "Outstanding academic meeting. Interesting conferences and trials concerning imaging and physiology, new transcatheter therapies in CAD and structural heart interventions. The opportunity to hear about the different projects in the world. Great opportunity to get inspiration for further research.",
            author: "Physician"
        },
        {
            qoute: "Late-breaking clinical trials — the level of evidence presented was outstanding.",
            author: "Industry Professional"
        },
        { qoute: "Late-breaking clinical trials and iCoach sessions were really informative.", author: "Fellow" },
        {
            qoute: "It was a great event and very informative. It's hard to choose one specific thing because it was amazing as a whole!",
            author: "Physician"
        },
        {
            qoute: "ICOACH session, live cases, challenging cases, moderated abstract all were excellent",
            author: "Fellow"
        }
    ]


    const infoSlides = infoSlidesData.map((slide, i) => {
        return <InfoSlide key={i} {...slide} />
    })

    const infoSlideSlickSettings = {
        infinite: true,
        speed: 1500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        //arrows: false,
        autoplaySpeed: 6000,
        nextArrow: <Box right="0px"
                        _before={{
                            content: "\"\""
                        }}
                        width={"clamp(25px, 3vw, 40px)"}
                        height={"clamp(25px, 3vw, 40px)"}
                        zIndex={"999"}
        >
            <Icon as={FiChevronRight} style={{ stroke: "#333" }} w="100%" h="100%" />
        </Box>,
        prevArrow: <Box left="0px"
                        _before={{
                            content: "\"\""
                        }}
                        width={"clamp(25px, 3vw, 40px)"}
                        height={"clamp(25px, 3vw, 40px)"}
                        zIndex={"9999"}
        >
            <Icon as={FiChevronLeft} style={{ stroke: "#333" }} w="100%" h="100%" />
        </Box>,
        dots: false


    }


    const visionData = [
        {
            title: "Forge Connections",
            body: "Network with peers from more than 100 countries and countless industry trailblazers. Build relationships that transcend the conference, propelling your career into a future of limitless possibilities.",
            img: "https://assets.crfconnect.com/meetings/tct2024/homepage/tct2024_homepage_connections.jpg"
        },
        {
            title: "Ignite Innovation",
            body: "Experience groundbreaking science, explore the latest advancements in cardiovascular therapeutics, and be at the forefront of transformative discoveries.",
            img: "https://assets.crfconnect.com/meetings/tct2024/homepage/tct2024_homepage_innovation.jpg"
        },
        {
            title: "Fuel Education",
            body: "Engage with a wealth of knowledge from world-renowned thought leaders and clinicians and help shape the future of interventional cardiology.",
            img: "https://assets.crfconnect.com/meetings/tct2024/homepage/tct2024_homepage_education.jpg"
        },
        {
            title: "Experience Live Cases",
            body: "Watch procedures in progress from top institutions. Gain valuable insights from world-renowned experts.",
            img: "https://assets.crfconnect.com/meetings/tct2024/homepage/tct2024_homepage_procedures.jpg"
        },
        {
            title: "Dive Into Hands-On Training",
            body: "Participate in a comprehensive suite of hands-on training programs designed by world-renowned experts. Hone your skills to deliver top-quality patient care.",
            img: "https://assets.crfconnect.com/meetings/tct2024/homepage/tct2024_homepage_handsontraining.jpg"
        },
        {
            title: "Witness Live Presentations", //of<br/> Late-Breaking Clinical Trials and Science
            body: "Be the first to learn the latest advances transforming patient care. Gain valuable insights into groundbreaking research shaping our future.",
            img: "https://assets.crfconnect.com/meetings/tct2024/homepage/tct2024_homepage_latebreaking.jpg"
        }
    ]


    return (<>
            <HomepageMainWrapper
                //rightColumnBgColor={dtk.backgroundColor}

                leftColumnBgColor={"#ffffff"}
                p={"0px 15px 0px 15px"}
                leftColumn={<>
                    <Divider mb={"30px"} mt={"0px !important"} />
                    <Heading as={"h2"} color={"#194969 !important"} mb={"30px"}>
                        Join the Visionaries
                    </Heading>
                    <Flex flexWrap={"wrap"} flexDirection={["row"]}
                          gap={"20px"} mb={"50px"}>
                        {
                            visionData.map((v, i) => {
                                let top = false
                                if (i >= 3) {
                                    top = true
                                }

                                return <Grid key={`vision${i}`}
                                             color={"black"}
                                             templateColumns={`10px 1fr 10px`}
                                             templateRows={top ? `1fr 20px` : `20px 1fr`}
                                             flex={["1 1 80%", "1 1 40%", "1 1 32%"]}
                                             maxW={["80%", "48%", "32%"]}

                                >
                                    <GridItem
                                        zIndex={0}
                                        gridColumnStart={2}
                                        gridColumnEnd={3}
                                        gridRowStart={1}
                                        gridRowEnd={3}
                                        backgroundColor={top ? "#F3BC00" : "#00D1DE"}
                                        borderRadius={"40px"}
                                    >

                                    </GridItem>
                                    <GridItem
                                        boxShadow={"1px 1px 3px rgba(0,0,0,.4)"}
                                        zIndex={1}
                                        gridColumnStart={1}
                                        gridColumnEnd={4}
                                        gridRowStart={top ? 1 : 2}
                                        gridRowEnd={top ? 1 : 2}
                                        backgroundColor={"blue"}
                                        borderRadius={"30px"}
                                        overflow={"hidden"}
                                        cursor={"pointer"}
                                        backgroundSize={"cover"}
                                        backgroundImage={v.img ? v.img : "https://place-hold.it/700x700?text=center"}
                                        _hover={{
                                            ".box": {
                                                height: "100%"
                                            },
                                            ".text1": {
                                                display: "none"
                                            },
                                            ".text2": {
                                                display: "inline-block"
                                            }

                                        }}
                                    >
                                        <Box className={"boxWrapper"} display="flex" alignItems={"flex-end"}
                                             height={"clamp(200px,20vw, 280px)"}
                                             aspectRation={"1/3"}
                                        >
                                            {/*{v.body}*/}
                                            <Box
                                                className={"box"}
                                                transition={"all 250ms ease-out"}
                                                h={"23%"}
                                                width={"100%"}
                                                p={"0px 0px"}
                                                backgroundColor={"rgba(0,53,88,.7)"}
                                                color={"white"}
                                                display={"flex"}
                                                justifyContent={"center"}
                                                alignItems={"center"}
                                                textAlign={"center"}
                                            >
                                                <Box as={"span"} className={"text1"}
                                                     lineHeight={"18px"}
                                                     fontSize={"clamp(12px, 1.5vw, 18px)"}
                                                     textTransform={"uppercase"}
                                                     fontWeight={"600"}
                                                     dangerouslySetInnerHTML={{
                                                         __html: v.title
                                                     }}
                                                />
                                                <Box as={"span"}
                                                     lineHeight={"clamp(14px, 1.2vw, 20px)"}
                                                     fontSize={"clamp(12px, 1vw, 20px)"}
                                                     className={"text2"} display={"none"}
                                                     fontWeight={"500"}
                                                     padding={"0px 30px"}>{v.body}</Box>

                                            </Box>
                                        </Box>

                                    </GridItem>


                                </Grid>
                            })
                        }
                    </Flex>


                </>}

            />
            <HomepageMainWrapper
                //rightColumnBgColor={dtk.backgroundColor}
                leftColumnBgColor={"#E5FAFB"}
                rightColumnBgColor={"#E5FAFB"}
                p={"30px 15px 0px 15px"}
                leftColumn={<>
                    <Heading as={"h2"} color={"#194969; !important"} mb={"10px"} display={["block", "block", "none"]}>
                        Your Colleagues Told Us What They Value About TCT<sup>®</sup>
                    </Heading>
                    <Grid
                        templateColumns={[`3fr 3fr 2fr 2fr 40px`, `3fr 3fr 2fr 2fr 40px`, `3fr 3fr 200px 200px 40px`]}
                        templateRows={[". . auto 20px 40px", "50px 20px auto 20px 20px", "90px 20px 210px 20px 40px"]}
                        m={["15px 0px 0px 0px", "0px 0px"]}
                        borderRadius={["50px ", "0px"]}
                        width={["100%", "auto", "auto"]}

                    >
                        {/*hero text*/}
                        <GridItem
                            gridColumnStart={1}
                            gridColumnEnd={3}
                            gridRowStart={1}
                            gridRowEnd={1}
                            zIndex={50}
                        >
                            <Heading color={"#194969; !important"} display={["none", "none", "block"]}>
                                Your Colleagues Told Us What They Value About TCT<sup>®</sup>
                            </Heading>
                        </GridItem>
                        {/*color line*/}
                        <GridItem colSpan={3}
                                  zIndex={1}
                                  gridColumnStart={1}
                                  gridColumnEnd={[4, 4]}
                                  gridRowStart={2}
                                  gridRowEnd={4}
                                  display={["none", "flex"]}
                                  justifyContent={"flex-end"}

                        >
                            <Box
                                backgroundColor={"#00D1DE"}
                                borderRadius={"100px"}
                                height={"100%"}
                                width={"40%"}

                            >
                            </Box>
                        </GridItem>
                        {/*color lines bottom*/}
                        <GridItem colSpan={3}
                                  zIndex={1}
                                  gridColumnStart={1}
                                  gridColumnEnd={6}
                                  gridRowStart={3}
                                  gridRowEnd={5}
                                  display={["none", "flex"]}
                                  justifyContent={"flex-end"}
                                  pr={"10px"}
                        >
                            <Box
                                backgroundColor={"#00D1DE"}
                                borderRadius={"0px 50px 70px 100px"}
                                height={"100%"}
                                width={"80%"}

                            >
                            </Box>
                        </GridItem>
                        {/*white box*/}
                        <GridItem
                            backgroundColor={"white"}
                            gridColumnStart={1}
                            gridColumnEnd={5}
                            gridRowStart={3}
                            gridRowEnd={4}
                            zIndex={5}
                            color={"#333"}
                            borderRadius={"50px"}

                        >
                        </GridItem>

                        {/*circle*/}
                        <GridItem
                            gridColumnStart={3}
                            gridColumnEnd={7}
                            gridRowStart={1}
                            gridRowEnd={5}
                            zIndex={20}

                            justifyContent={"flex-end"}
                            alignItems={"flex-start"}
                            display={["none", "flex"]}
                            pb={"10px"}
                        >


                            <Box //width={"clamp(100px, 34vw, 500px)"}
                                //height={"clamp(100px, 34vw, 500px)"}
                                width={"100%"}
                                borderRadius={"100%"}

                                objectFit={"cover"}
                                backgroundColor={"white"}
                                backgroundSize={"cover"}
                                backgroundImage={"https://assets.crfconnect.com/meetings/tct2024/page-content/circlePhoto_1.jpg"}
                                aspectRatio={"1/1"}
                                border={"solid 6px #00D1DE"}
                            > </Box>


                        </GridItem>
                        {/*slider box*/}
                        <GridItem
                            gridColumnStart={1}
                            gridColumnEnd={[5, 3]}
                            gridRowStart={3}
                            gridRowEnd={4}
                            zIndex={15}
                            display={"flex"}
                            justifyContent={"center"}
                            alignItems={"center"}
                            padding={"20px"}
                            //border={"solid thin red"}
                        >
                            <Box width={["100%"]} as={Slider}
                                 aspectRatio={"3/1"}
                                //border={"solid thin green"}
                                 maxW={"900px"}
                                 {...infoSlideSlickSettings}
                                 margin={["0px", "0px", "0px", "0px 0px"]}
                                 display={"flex"}
                                 justifyContent={"center"}
                                 alignItems={"center"}

                            >
                                {infoSlides}

                            </Box>
                        </GridItem>
                    </Grid>
                    <Box height={["30px", "100px"]}></Box>

                </>}

            />


        </>
    )
}

function InfoSlide(slide) {
    return (
        <Box pos="relative"
             pointerEvents={"none"}
             display={"flex"}
             justifyContent={"center"}
             alignItems={"center"}

        >
            <Box
                pointerEvents={"none"}
                padding={["0px 45px", "0px 45px"]}
                color={"#333"}
                fontSize={"clamp(14px, 1.8vw, 20px)"}
                textAlign={"center"}

            >
                <Box>
                    "{slide.qoute}"
                </Box>
                {
                    slide.author && <Box textAlign={"center"} fontWeight={"600"}>— {slide.author}</Box>
                }
            </Box>
        </Box>
    )
}