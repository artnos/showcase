import { Flex, Spacer, Box, List, ListItem, Link, useDisclosure } from "@chakra-ui/react"
import SocialIcons from "./SocialIcons"
import CrfLogo from "../graphics/crfLogo"
import { ChevronDownIcon } from "@chakra-ui/icons"
export const stripeMenu = {
    sites: [
        {
            label: "CRF",
            url: "http://www.crf.org",
        },
        {
            label: "SKIRBALL",
            url: "https://www.skirballresearch.org/",
        },
        {
            label: "CTC",
            url: "https://www.crf.org/clinical-trials-center",
        },
        {
            label: "CED",
            url: "https://www.crf.org/center-for-education",
        },
        {
            label: "TCTMD",
            url: "https://www.crf.org/center-for-education/tctmd",
        },
        {
            label: "SHJ",
            url: "https://www.crf.org/crf/shj",
        },
    ],

    meetings: [
        {
            label: "TCT",
            url: "https://tct.crfconferences.com/",
        },
        {
            label: "NY VALVES",
            url: "https://nyvalves.crfconferences.com/",
        },
        {
            label: "THT",
            url: "https://tht.crfconferences.com/",
        },
        {
            label: "CTO",
            url: "https://cto.crfconferences.com/",
        },
        {
            label: "FELLOWS",
            url: "https://fellows.crfconferences.com/",
        },
        {
            label: "COMPLICATIONS COURSE",
            url: "https://complications.crfconferences.com/",
        },
    ]
}




export default function CrfStripe() {
    const { isOpen, onOpen, onClose } = useDisclosure({ defaultIsOpen: false })

    return (
        <Flex className="crf-stripe" h={42} bg="white" maxW="100%" align="center" zIndex={20}>
            <Box ml="15px" mr="5">
                <CrfLogo w={70} h={70} />
            </Box>
            <nav role="navigation">
                <Flex as={List} alignItems="center" borderLeft="1px solid #e2e2e2">
                    {stripeMenu.sites.map((site, i) => {
                        return (
                            <ListItem
                                key={i}
                                display="flex"
                                alignItems="center"
                                h="42px"
                                borderRight="solid 1px #e2e2e2"
                            >
                                <StyledLink {...site} />
                            </ListItem>
                        )
                    })}
                    <ListItem
                        position="relative"
                        display="flex"
                        alignItems="center"
                        h="42px"
                        borderRight="solid 1px #e2e2e2"
                        onMouseOver={onOpen}
                        onMouseOut={onClose}
                    >
                        <StyledLink
                            label={
                                <>
                                    CRF Meetings <ChevronDownIcon color="#9d9d9f" />
                                </>
                            }
                        />
                        <List
                            w={180}
                            zIndex={1000}
                            display={isOpen ? "block" : "none"}
                            position="absolute"
                            top="100%"
                            left={0}
                            pb={1}
                            bgColor="#fff"
                            borderTop="1px solid #e2e2e2"
                        >
                            {stripeMenu.meetings.map((site, i) => {
                                return (
                                    <ListItem key={i}>
                                        <StyledLink {...site} />
                                    </ListItem>
                                )
                            })}
                        </List>
                    </ListItem>
                </Flex>
            </nav>
            <Spacer />
            <SocialIcons />
        </Flex>
    )
}

function StyledLink({ url, label }) {
    return (
        <Link
            href={url}
            p={2}
            color="#9d9d9f"
            fontSize="12px"
            isExternal
            lineHeight={"15px"}
            display={"block"}
            _hover={{
                color: "#ed2638",
                textDecoration: "none",
            }}
        >
            {label}
        </Link>
    )
}
