import { Box, Text, Flex, Grid, GridItem, Heading, Tooltip, Divider } from "@chakra-ui/react"
import Wrapper from "../components/layout/wrapper"
import { PhoneIcon, InfoOutlineIcon } from "@chakra-ui/icons"

export default function Tct2024Register() {


    /*
    [tooltip industry]
Full Access bade for industry professionals does not include access to MedTech Innovation Forum. Please select the MedTech Forum add-on, if desired, when you register.

     */
    const data = [

        {
            role: "Physician",
            prices: ["$1,399",
                "$1,499",
                "$1,599",
                "$699"]

        },
        {
            role: "Allied Health Professional",
            prices: ["$349",
                "$399",
                "$449",
                "$199"]
        },
        {
            role: "Industry",
            // tooltip: "Full Access for industry professionals does not include access to MedTech Innovation Forum. Please select the MedTech Forum add-on, if desired, when you register.",
            options: [

                {
                    title: "Industry Professional",
                    prices: [
                        "$1,799",
                        "$1,899",
                        "$1,999",
                        "$799"
                    ]
                },
                {
                    title: "<Box>Industry Startup<br/><small>(See Exclusive Discounts Below)</small></Box>",
                    small: "(See Exclusive Discounts Below)",
                    prices: [
                        "$1,099",
                        "$1,199",
                        "$1,299",
                        "$599"
                    ]
                }

            ]
        },
        {
            role: "Fellow**",
            prices: ["FREE", "FREE", "FREE", "FREE"]
        }
        , {
            role: "U.S. Government†",
            prices: ["$175", "$175", "$175", "$99"]
        }
    ]

    //Primary Colors
    const colorList = ["#194969", "#ee3d2c", "#00d1de", "#1E2349", "#F3BD00"]
    //Secondary Colors
    const colorListAlt = ["#194969", "#ee3d2c", "#00d1de", "#1E2349", "#F3BD00"]


    const center = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }


    const ColumnTab = ({
                           start,
                           alt = false,
                           startRow = gridAttr.vertStart,
                           title = false,
                           subText = false,
                           color1,
                           color2,
                           children
                       }) => {
        let offset = 0
        if (alt) {
            offset = 1
        }
        return <GridItem gridColumnStart={3 + start + offset * -1} gridColumnEnd={3 + start + offset * 2}
                         gridRowStart={startRow}
                         gridRowEnd={alt ? gridAttr.rowMax : gridAttr.rowMax - 4}
                         backgroundColor={color2}
                         border={`solid 2px ${color1}`}
                         borderRadius={"20px"}
                         overflow={"hidden"}
                         boxShadow={alt ? "1px 1px 3px rgba(0,0,0,.4)" : "none"}

                         zIndex={2}>
            <Box backgroundColor={color1} color={"white"} {...center} height={alt ? "60px" : "auto"}>
                <Box textAlign={"center"} p={"10px"}>
                    <Box fontWeight={"500"} fontSize={"20px"} textTransform={"uppercase"}
                         {...center}
                    >
                        {
                            title ? <>{title}</> : <>{children}</>
                        }
                        {alt && <Tooltip label="Includes access to TCT 2024 for one day of your choice."
                                         backgroundColor={color2}
                                         border={"solid 2px"}
                                         borderColor={color1}
                                         borderRadius={"15px"}
                                         color={color1}
                                         boxShadow={alt ? "1px 1px 3px rgba(0,0,0,.4)" : "none"}
                                         p={"10px"}
                                         fontSize="sm">
                            <InfoOutlineIcon fontSize={"16px"} ml={"10px"} cursor={"pointer"} />
                        </Tooltip>}
                    </Box>
                    {!alt && children}
                </Box>
            </Box>
            <Box color={color1} fontSize={"20px"} fontWeight={"500"} textAlign={"center"}>

                {alt &&
                    <Box mt={"30px"} fontSize={"20px"} color={"#333"} lineHeight={"26px"}>{children}</Box>}

            </Box>

        </GridItem>
    }


    const PriceRow = ({ data, start }) => {
        const singleRow = data.prices ? true : false

        return <GridItem gridColumnStart={gridAttr.horizontalStart} gridColumnEnd={gridAttr.columnMax}
                         gridRowStart={5 + start}
                         gridRowEnd={5 + start}
                         overflow={"hidden"}
                         borderRadius={"20px"}
                         p={singleRow ? "16px 20px 16px 20px" : "12px 20px 22px 20px"}
                         border="solid thin #B1CCFC"
                         boxShadow={"1px 1px 3px rgba(0,0,0,.4)"}
                         backgroundColor={"rgba(255,255,255,.5)"}
                         zIndex={2}>
            {
                !singleRow &&
                <Box fontWeight={"500"} {...center} justifyContent={"flex-start"}>{data.role}
                    {data.tooltip && <Tooltip label={data.tooltip}
                                              backgroundColor={"white"}
                                              border={"solid 2px"}
                                              borderColor={"#333"}
                                              borderRadius={"15px"}
                                              color={"#333"}
                                              boxShadow={"1px 1px 3px rgba(0,0,0,.4)"}
                                              p={"10px"}
                                              fontSize="sm">
                        <InfoOutlineIcon fontSize={"16px"} ml={"10px"} cursor={"pointer"} />
                    </Tooltip>}
                </Box>
            }

            <Grid
                width={"100%"}
                templateColumns={`190px repeat(3,1fr) 30px 190px`}
                templateRows={`repeat(${data.options ? data.options.length : "1"},auto)`}
            >
                {
                    data.options && data.options.map((o, i) => {
                        return <><GridItem {...center}
                                           borderBottom={(data.options.length - 1) == i ? "none" : "solid 1px #B1CCFC"}
                                           alignItems={"center"}
                                           justifyContent={"flex-start"}
                                           flexDirection={"row"}
                                           lineHeight={"16px"}
                                           p={"15px 0px"}


                        >
                            <Box as={"span"} dangerouslySetInnerHTML={{ __html: o.title }}></Box>
                            {
                                o.tooltip &&
                                <Tooltip
                                    label={o.tooltip}
                                    backgroundColor={"white"}
                                    border={"solid 1px"}
                                    borderColor={"#518cfc"}
                                    borderRadius={"15px"}
                                    color={"#333"}
                                    boxShadow={"1px 1px 3px rgba(0,0,0,.4)"}
                                    p={"10px"}
                                    fontSize="sm">
                                    <InfoOutlineIcon fontSize={"16px"} ml={"10px"} cursor={"pointer"} />
                                </Tooltip>
                            }


                        </GridItem>
                            <GeneratePrices border={(data.options.length - 1) == i ? false : true} priceList={o.prices} />
                        </>
                    })
                }
                {
                    singleRow && <>
                        <GridItem {...center} justifyContent={"flex-start"}

                                  fontWeight={500}>{data.role}</GridItem>
                        <GeneratePrices priceList={data.prices} border={false} />
                    </>
                }


            </Grid>

        </GridItem>
    }

    const GeneratePrices = ({ priceList, border = true }) => {
        return <>
            {
                priceList.map((p, ii) => {

                    let color = colorList[1]

                    switch (ii) {
                        case 1:
                            color = colorList[2]
                            break
                        case 2:
                            color = colorList[3]
                            break
                        case 3:
                            color = "#333" //colorList[4];
                            break
                    }

                    if (ii == 2) {
                        return <><GridItem {...center} color={color}
                                           borderBottom={border ? "solid 1px #B1CCFC" : "none"}
                                           fontWeight={500}
                                           fontSize={"22px"}
                        ><Box>{p}</Box></GridItem><GridItem
                            borderBottom={border ? "solid 1px #B1CCFC" : "none"}
                        ></GridItem></>
                    } else {
                        return <GridItem {...center} color={color}
                                         borderBottom={border ? "solid 1px #B1CCFC" : "none"}
                                         fontWeight={500}
                                         fontSize={"22px"}
                        ><Box>{p}</Box></GridItem>
                    }


                })
            }</>
    }

    const gridAttr = { //grid attributes
        dividerCol: 7,
        rowMax: 19,
        columnMax: 9,
        vertStart: 3,
        horizontalStart: 2,
        horizontalEnd: function() {
            return gridAttr.dividerCol
        }
    }

    return <>
        <Wrapper>
            <Heading>Register</Heading>
            <Box className="table--ScrollWrapper" overflow={"scroll"}>
                <Grid mt={"20px"}
                      mb={"15px"}

                      templateColumns={`0px repeat(4,1fr) 0px 0px 1fr 0px`}
                      templateRows={`60px 0px 75px 0px auto 0px auto 0px auto 0px auto  0px auto 10px 20px auto 20px`}
                      color={"#333"}
                      columnGap={"15px"}
                      rowGap={"8px"}
                      width={"100%"}
                      minWidth={"1140px"}


                >
                    <GridItem gridColumnStart={1} gridColumnEnd={gridAttr.dividerCol} gridRowStart={1}
                              gridRowEnd={gridAttr.rowMax}
                              borderRadius="20px 20px"
                              overflow="hidden"
                              fontSize="20px"
                              fontWeight="500"
                              textTransform="uppercase"
                              border="solid thin #B7C0D1"
                              boxShadow={"1px 1px 3px rgba(0,0,0,.4)"}
                              zIndex={0}>
                        <Box backgroundColor={colorList[0]} height={"60px"} color={"white"}{...center}>
                            Full Access
                        </Box>
                    </GridItem>

                    <ColumnTab title={"Early-Bird"} start={0} color1={colorList[1]}
                               color2={colorListAlt[1] + "20"}>
                        THROUGH JUNE 26, 2024
                    </ColumnTab>
                    <ColumnTab title={"Standard"} start={1} color1={colorList[2]}
                               color2={colorListAlt[2] + "20"}>
                        JUNE 26 TO SEPT. 10, 2024
                    </ColumnTab>
                    <ColumnTab title={"On-Site"} start={2} color1={colorList[3]}
                               color2={colorListAlt[3] + "20"}>
                        STARTING SEPT. 11, 2024
                    </ColumnTab>
                    <ColumnTab title="One-Day Access*" alt start={5} startRow={1} color1={colorList[4]}
                               color2={colorListAlt[4] + "20"}>
                        Purchase Any Time<br />
                        Same Price
                    </ColumnTab>
                    <PriceRow data={data[0]} start={0} />
                    <PriceRow data={data[1]} start={2} />
                    <PriceRow data={data[2]} start={4} />
                    <PriceRow data={data[3]} start={6} />
                    <PriceRow data={data[4]} start={8} />
                    <GridItem
                        gridColumnStart={gridAttr.horizontalStart} gridColumnEnd={gridAttr.columnMax}
                        gridRowStart={gridAttr.rowMax - 3}
                        gridRowEnd={gridAttr.rowMax - 3}
                        lineHeight={"18px"}
                        zIndex={20}
                    >
                        <Text mt={"0px"}>
                            All figures are in U.S. dollars. Rate changes take effect at 12:00 <small>AM EDT (UTC
                            −4)</small>.
                        </Text>
                        <small>

                            ** Fellows: See Terms and Conditions below.<br />
                            † Available to U.S. government employees with a valid government ID.
                        </small>
                    </GridItem>
                    <GridItem
                        gridColumnStart={gridAttr.dividerCol + 1} gridColumnEnd={gridAttr.columnMax}
                        gridRowStart={gridAttr.rowMax - 3}
                        gridRowEnd={gridAttr.rowMax - 3}
                        lineHeight={"18px"}
                        zIndex={20}
                    >
                        <small>
                            *See Terms and Conditions below.<br />
                        </small>
                    </GridItem>
                </Grid>
            </Box>

            <br />
        </Wrapper>

    </>
}
