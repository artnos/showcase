import { useEffect, useMemo, useState } from "react"
import { Flex, Spacer, Box, Link, Icon, Img, useDisclosure, useBreakpointValue, useTheme } from "@chakra-ui/react"
import { FiX, FiMenu } from "react-icons/fi"
//import Nav from "components/nav/nav"
import CrfStripe from "./crfStripe"

export default function Header({ site, hideNav = false }) {
    const { isOpen, onToggle } = useDisclosure({ defaultIsOpen: false })


    return (
        <>
            <CrfStripe />
            <Flex className="menubar" backgroundColor={"#194969"} maxW="100%"  zIndex={11} p={"15px 0px"}>
                <Flex w="100%" align="center">
                    <MeetingLogo site={site} />
                    <Spacer />
                    <Box pr="15px" display={"none"}>
                        <Icon
                            as={FiMenu}
                            cursor="pointer"
                            onClick={onToggle}
                            w="24px"
                            h="30px"
                            verticalAlign="-webkit-baseline-middle"
                        />
                    </Box>
                </Flex>
            </Flex>
        </>
    )
}

const MeetingLogo = ({ site }) => {
    return (
        <Box pl="10px" mr="10px">
            <Link href={"#"}>
                <Img
                    h={{ base: "20px", md: "24px" }}
                    src={"https://assets.crfconnect.com/meetings/tct2024/theme/TCT2024_web_logo.png"}
                    alt={"tct 2024"}
                />
            </Link>
        </Box>
    )
}
