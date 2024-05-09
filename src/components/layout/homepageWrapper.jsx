import {Box, Stack, useBreakpointValue, useMediaQuery} from "@chakra-ui/react"

export default function HomepageMainWrapper({
                                                layoutMaxWidth = 1500,
                                                leftColumnBgColor = "color9",
                                                rightColumnWidth = 340,
                                                rightColumnBgColor = "#fff",
                                                rightGutterBgColor = false,
                                                bgColor = "#fff",
                                                roundedBottom = false,
                                                leftColumn,
                                                rightColumn,
                                                p = "30px 20px 0"
                                            }) {
    const [isLargerThanLayoutMaxWidth] = useMediaQuery(`(min-width: ${layoutMaxWidth}px)`)
    const isTwoColumn = useBreakpointValue({base: false, lg: true}, "md")

    if (rightColumn === undefined) {
        rightColumnWidth = 0
    }

    return (
        <Box position="relative" background={bgColor}>
            <Stack
                className="homepage__background"
                position="absolute"
                direction={isTwoColumn ? "row" : "column"}
                spacing={0}
                w="100%"
                h="100%"
            >
                <Box
                    w={
                        isLargerThanLayoutMaxWidth
                            ? `calc((100% - ${layoutMaxWidth}px)/2 + ${layoutMaxWidth - rightColumnWidth}px)`
                            : isTwoColumn
                                ? `calc(100% - ${rightColumnWidth}px)`
                                : "100%"
                    }
                    bgColor={leftColumnBgColor}
                />
                <Box

                    w={
                        isLargerThanLayoutMaxWidth
                            ? `calc((100% - ${layoutMaxWidth}px)/2 + ${rightColumnWidth}px)`
                            : isTwoColumn
                                ? `${rightColumnWidth}px`
                                : "100%"
                    }

                    backgroundColor={rightGutterBgColor ? rightGutterBgColor : rightColumnBgColor}
                    overflow={"hidden"}

                />
            </Stack>
            <Stack
                className="homepage__content"
                position="relative"
                direction={isTwoColumn ? "row" : "column"}
                spacing={0}
                maxW={{xl: layoutMaxWidth}}
                margin="0 auto"
            >
                <Box p={p} className="home" bgColor={leftColumnBgColor}
                     w={isTwoColumn ? `calc(100% - ${rightColumnWidth}px)` : "100%"}>
                    {leftColumn}
                </Box>
                <Box w={isTwoColumn ? rightColumnWidth : "100%"}
                     borderRadius={roundedBottom ? "0px 0px 40px 40px" : "0px"}
                     overflow={"hidden"}
                     backgroundColor={rightColumnBgColor}
                >{rightColumn}</Box>
            </Stack>
        </Box>
    )
}
