import {
    Box,
    Link,
    Heading,
    Text,
    Flex,
    Img,
    Grid,
    GridItem,
    Divider,
    UnorderedList,
    ListItem,
    useMediaQuery
} from "@chakra-ui/react"


import HomepageMainWrapper from "../../components/layout/homepageWrapper"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

export default function Tct2023HomeMain() {
    const h1Styles = {
        mb: "0px",
        fontSize: ["30px", "60px"],
        overflowWrap: "normal"
    }
    const h2Styles = {
        mb: "0px",
        fontSize: ["22px", "32px"],
        overflowWrap: "normal"
    }

    const h3Styles = {
        mb: "0px",
        fontSize: ["20px", "20px"],
        overflowWrap: "normal"
    }

    const buttonStyles = {
        display: "flex",
        textTransform: "uppercase",
        textDecoration: "none !important",
        bg: "#0CBFCB",
        color: "#ffffff !important",
        p: {
            base: "7px 20px",
            sm: "30px 40px"
        },
        width: "100%",
        // maxW: "350px",

        fontWeight: "500",
        textAlign: "center",
        fontSize: "18px",
        lineHeight: "18px",
        _hover: { bgColor: "#194969", color: "#F96300" },
        height: "60px",
        justifyContent: "center",
        alignItems: "center"
    }

    const circleData = [
        {
            title: "TCT<sup>®</sup> MedTech Innovation Forum",
            body: "Experience the Future of Global Medtech Innovation",
            ul: [
                "Global Market Dynamics",
                "Hot Topics in Medtech Innovation",
                "FDA University for Startups",
                "Modern Era Pharmacology: From Intervention to Prevention"
            ],
            color: "#00D1DE",
            img: "https://assets.crfconnect.com/meetings/tct2024/homepage/tct2024_homepage_medtech.jpg"
        },
        {
            title: "Nurse and Technologist Symposium",
            body: "The Premier Full-Day Forum for Front-Line Nurses, Advanced Practice Providers, and Technologists In or Out of the Cardiac Cath Lab",
            color: "#EE3D2C",
            img: "https://assets.crfconnect.com/meetings/tct2024/homepage/tct2024_homepage_nurse.jpg"
        },
        {
            title: "WorldLink Forum",
            body: "Your Passport to a Global Journey of Knowledge, Innovation, and Collaboration",
            color: "#F3BC00",
            img: "https://assets.crfconnect.com/meetings/tct2024/homepage/tct2024_homepage_worldlink.jpg"
        },
        {
            title: "Welcome Networking Reception",
            body: "Forge Valuable Connections on Sunday! Mingle With Esteemed World Leaders and Connect With Peers!",
            color: "#2A194B",
            img: "https://assets.crfconnect.com/meetings/tct2024/page-content/tct2024_home_networking1.jpg"
        },
        {
            title: "Exhibit Hall",
            body: "Experience the Ultimate Convergence of Knowledge and Networking",
            ul: [
                "Events and Demonstrations for Every Specialty",
                "Engagement Hubs for Expert Discussions, Data-Based Learning, and Hands-On Training"
            ],
            color: "#194969",
            img: "https://assets.crfconnect.com/meetings/tct2024/page-content/tct2024_homepage_exhibithall.jpg"
        }
    ]

    return (
        <>
            <HomepageMainWrapper
                rightColumnBgColor={"#fff"}
                p={"2px"}
                leftColumn={<Box height={"3px"}></Box>}
                leftColumnBgColor={"#fff"}
            />
            <HomepageMainWrapper
                rightColumnBgColor={"#EE3D2C"}
                leftColumnBgColor={"#EE3D2C"}
                p={"20px 15px 20px 15px"}
                leftColumn={
                    <Box size={"2xl"} resize={"both"} containerType={"size"} color={"#fff"}>
                        <Box fontWeight={"600"} fontSize={"clamp(25px, 6vw, 50px)"} lineHeight={["42px", "50px"]}>
                            EARLY-BIRD REGISTRATION IS OPEN FOR TCT
                            <Text
                                as={"sup"}
                                // fontSize={"clamp(18px, .9rem, 30px)"}
                                // top={"-.6em"}
                                // verticalAlign={"super"}
                                top={"-1.1em !important"}
                                position={"relative !important"}
                                fontSize={"40% !important"}
                                lineHeight={"0 !important"}
                                verticalAlign={"baseline !important"}
                                marginLeft={"2px !important"}
                            >
                                ®
                            </Text>{" "}
                            2024!
                            <br />
                        </Box>
                    </Box>
                }
                // rightColumn={<></>}
            />
            <HomepageMainWrapper
                rightColumnBgColor={"#fff"}
                p={"2px"}
                leftColumn={<Box height={"3px"}></Box>}
                leftColumnBgColor={"#fff"}
            />
            <HomepageMainWrapper

                bgColor={"#fff"}
                roundedBottom={true}
                leftColumnBgColor={"#ffffff"}
                rightGutterBgColor={"#ffffff"}

                p={"20px 30px 0px 15px"}
                leftColumn={
                    <>
                        <Heading as={"h2"} {...h2Styles} mt={"0px"}>
                            Take Advantage of Early-Bird Pricing Through June 26
                        </Heading>

                        {/*<Flex mt={"10px"} gap={"10px"} justifyContent={"space-between"} maxW={"1200px"}>*/}
                        {/*    <Box>*/}

                        {/*    </Box>*/}
                        {/*    <Box>*/}
                        {/*        <Circle color1={"#0CBFCB"} color2={"#194969"}>*/}
                        {/*            <Link href="https://www.addevent.com/event/Zc16287238" isExternal*/}
                        {/*                  borderRadius={0} color="white !important"*/}
                        {/*                  fontWeight={"500"}*/}
                        {/*                  display={"flex"}*/}
                        {/*                  justifyContent={"space-between"}*/}
                        {/*                  alignItems={"center"}*/}
                        {/*                  padding={"20px 20px"}*/}
                        {/*                  width={"100%"}*/}
                        {/*                  maxW={"415px"}*/}
                        {/*                  textDecoration={"none !important"}*/}
                        {/*                  height={"57px"}*/}

                        {/*            >*/}

                        {/*                <CalendarIcon fill={"white"} fontSize={"30px"} />*/}

                        {/*            </Link>*/}
                        {/*        </Circle>*/}

                        {/*    </Box>*/}
                        {/*</Flex>*/}

                        <Flex
                            gap={"30px"}
                            flexDirection={["column", "column", "row"]}
                            maxW={"1200px"}
                            mt={"30px"}
                            mb={"40px"}
                        >
                            <Flex
                                flexDirection={"column"}
                                justifyContent={"space-between"}
                                flex={"1 1 49%"}
                                border={"solid 1px #B1CCFC"}
                                p={"20px"}
                                borderRadius={"20px"}
                                boxShadow="2px 2px 8px rgba(80,80,80,.4)"
                            >
                                <Flex
                                    flexDirection={"column"}
                                    gap={"20px"}
                                    justifyContent={"space-between"}
                                    height={"100%"}
                                >
                                    <Box>
                                        <Heading as={"h2"} {...h2Styles} mt={"0px"}>
                                            Join Us in Revolutionizing Cardiovascular Care
                                        </Heading>
                                        <Heading as={"h3"} {...h3Styles} color={"#594C73 !important"} mt={"10px"}>
                                            The Global Forum for Interventional Cardiology is in Washington, D.C.
                                        </Heading>
                                        {/*<Heading as={"h3"} {...h3Styles} color={"#594C73 !important"} mt={"10px"}>*/}
                                        {/*    Our 2024 Theme is From Intervention to Prevention: Comprehensive Management for*/}
                                        {/*    Durable*/}
                                        {/*    Outcomes.*/}
                                        {/*</Heading>*/}
                                    </Box>
                                    <Link href="/register" {...buttonStyles}>
                                        Register Now
                                    </Link>
                                    {/*<Link href="https://www.addevent.com/event/aE14908254" isExternal*/}
                                </Flex>
                            </Flex>
                            <Flex
                                flexDirection={"column"}
                                justifyContent={"space-between"}
                                flex={"1 1 49%"}
                                border={"solid 1px #B1CCFC"}
                                p={"20px"}
                                borderRadius={"20px"}
                                boxShadow="2px 2px 8px rgba(80,80,80,.4)"
                            >
                                <Flex
                                    flexDirection={"column"}
                                    gap={"20px"}
                                    justifyContent={"space-between"}
                                    height={"100%"}
                                >
                                    <Box>
                                        <Heading as={"h2"} {...h2Styles} mt={"0px"}>
                                            Exclusive Heart Team&nbsp;Discount!
                                        </Heading>
                                        <Text>
                                            Join TCT<sup>®</sup> 2024 with your heart team and save up to 40% on
                                            registration. Act now while exclusive offer is&nbsp;available!
                                        </Text>
                                    </Box>
                                    <Link href={"/heart-team-discount"} {...buttonStyles}>
                                        LEARN MORE ABOUT THE HEART TEAM&nbsp;DISCOUNT
                                    </Link>
                                </Flex>
                            </Flex>
                        </Flex>

                        <Heading
                            as={"h1"}
                            {...h1Styles}
                            textAlign={"left"}
                            mt={["10px", "10px", "20px"]}
                            lineHeight={"32px"}
                        >
                            From INTERVENTION to PREVENTION
                        </Heading>
                        <Heading as={"h2"} {...h2Styles} mt={"0px"}>
                            Comprehensive Management for Durable Outcomes
                        </Heading>
                        <Text mt={"10px !important"}>
                            Embark on a groundbreaking journey to enhance clinical outcomes! TCT<sup>®</sup> 2024 will
                            focus on ongoing integration of preventive modalities to maintain the beneficial outcomes of
                            interventional procedures.
                        </Text>
                        <Text>
                            We are embracing a comprehensive approach, integrating preventive measures to proactively
                            combat and mitigate cardiovascular disease. Discover innovative strategies through dynamic
                            discussions, presentations, and research. With a focus on integrating preventive measures
                            alongside interventional treatments, we’re shaping the evolution of patient care. Don’t miss
                            your chance to be part of this transformative journey.
                        </Text>
                        <Link href="/overview" {...buttonStyles} mt={"20px"} maxW={"500px"}>
                            Learn More
                        </Link>
                        <Divider mb={"30px"} />

                        <Heading as={"h2"} {...h2Styles} mt="30px" color={"#194969 !important"}>
                            Start Strong on Sunday! Every Moment Counts!
                            <br />
                            TCT<sup>®</sup> 2024 Launches Sunday With These Essential Programs and Events
                        </Heading>
                        <Heading as={"h3"} {...h3Styles} color={"#594C73 !important"} maxW={"100%"}>
                            The highly sought-after day-one TCT<sup>®</sup> programs are back for another successful
                            year of igniting inspiration and innovation!
                        </Heading>
                        <Flex
                            mt={"30px"}
                            mb={"30px"}
                            flexWrap={"wrap"}
                            flexDirection={["row", "row", "row"]}
                            gap={"15px"}
                        >
                            {circleData.map((c, i) => {
                                return (
                                    <Box
                                        flex={["1 1 100%", "1 1 50%", "1 1 24%"]}
                                        maxW={["211px", "211px", "211px"]}
                                        key={`circleCard${i}`}
                                    >
                                        <Grid
                                            templateColumns={`3% 1fr 5%`}
                                            templateRows={[`1fr 1fr 340px 20px`, `1fr 1fr 340px 20px`]}
                                        >
                                            {/*circle*/}
                                            <GridItem
                                                zIndex={10}
                                                gridColumnStart={1}
                                                gridColumnEnd={5}
                                                gridRowStart={1}
                                                gridRowEnd={3}
                                                borderRadius={"50%"}
                                                overflow={"hidden"}
                                                border={`solid 4px ${c.color}`}
                                                boxShadow={"1px 1px 3px rgba(0,0,0,.4)"}
                                            >
                                                <Img src={c.img} width={"100%"} />
                                            </GridItem>

                                            {/*white box*/}
                                            <GridItem
                                                borderRadius={"40px"}
                                                zIndex={1}
                                                border="solid thin #C2CAD8"
                                                boxShadow={"1px 1px 3px rgba(0,0,0,.4)"}
                                                gridColumnStart={2}
                                                gridColumnEnd={2}
                                                gridRowStart={2}
                                                gridRowEnd={4}
                                                backgroundColor={"white"}
                                            ></GridItem>

                                            <GridItem
                                                gridColumnStart={2}
                                                gridColumnEnd={2}
                                                gridRowStart={3}
                                                gridRowEnd={4}
                                                zIndex={10}
                                                textAlign={"left"}
                                                p={["15px 0px 30px 0px", "15px 0px 10px 0px"]}
                                            >
                                                <Heading
                                                    fontSize={"clamp(20px, 1.4vw, 24px) !important"}
                                                    lineHeight={"clamp(20px, 1.4vw, 24px) !important"}
                                                    mt={"0px"}
                                                    color={"#00D1DE !important"}
                                                    p={"0px 10px"}
                                                    textTransform={"uppercase"}
                                                    dangerouslySetInnerHTML={{ __html: c.title }}
                                                />
                                                <Text
                                                    mt={"10px"}
                                                    fontSize={"clamp(14px, .9vw, 14px) !important"}
                                                    p={"0px 10px"}
                                                >
                                                    {c.body}
                                                </Text>
                                                {c.ul ? (
                                                    <UnorderedList
                                                        m={"5px 0 0 1.3em"}
                                                        color={"#333!important"}
                                                        p={"0px 10px"}
                                                        fontSize={"clamp(14px, .9vw, 14px) !important"}
                                                        textAlign={"left"}
                                                    >
                                                        {c.ul.map((li, i) => {
                                                            return <ListItem key={"circleList-" + i}>{li}</ListItem>
                                                        })}
                                                    </UnorderedList>
                                                ) : (
                                                    ""
                                                )}
                                            </GridItem>
                                            {/*bg color*/}
                                            <GridItem
                                                gridColumnStart={1}
                                                gridColumnEnd={3}
                                                gridRowStart={2}
                                                gridRowEnd={5}
                                                pr={"20px"}
                                            >
                                                <Box
                                                    width={"100%"}
                                                    height={"99%"}
                                                    backgroundColor={c.color}
                                                    borderRadius={"0px 0px 50px 50px"}
                                                ></Box>
                                            </GridItem>
                                        </Grid>
                                    </Box>
                                )
                            })}
                        </Flex>

                        <Heading as={"h2"} {...h2Styles} mt="30px" color={"#194969 !important"}>
                            Round Out Your Sunday With More Scientific Programming!
                        </Heading>
                        <Heading as={"h3"} {...h3Styles} color={"#594C73 !important"} mt={"30px"}>
                            Moderated Posters: Begin your four-day journey witnessing groundbreaking abstracts presented
                            by physicians and scientists worldwide!
                        </Heading>
                        <Divider id={"program-leadership"} display={["none", "block"]} />
                    </>
                }
            />
        </>
    )
}
