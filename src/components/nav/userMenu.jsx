import {Flex, List, ListItem, Avatar, useBreakpointValue, useDisclosure, useTheme} from "@chakra-ui/react"
import {FiUser} from "react-icons/fi";

import MenuItem from "components/nav/menuItem";



// *** NOTE: This component is unused




export default function UserMenu({user, doAction}) {

    const theme = useTheme();

    const {isOpen, onToggle, onOpen, onClose} = useDisclosure({defaultIsOpen: false})
    const isMobile = useBreakpointValue({ base: true, xl: false }, 'xl')

    const menu = {
        title: 'User',
        slug: 'user',
        typeHandle: 'null',
        highlight: false
    }

    menu.children = user?.isLoggedIn ? [
        {
            title: 'Actions',
            slug: 'actions',
            typeHandle: 'subhead',
            highlight: false,
            children: []
        },
        {
            title: 'My Meeting',
            slug: 'profile',
            typeHandle: 'path',
            navigationPath: 'profile',
            highlight: false,
            children: []
        },
        {
            title: 'Logout',
            slug: 'logout',
            typeHandle: 'action',
            menuItemHandler: 'logout',
            highlight: false,
            children: []
        }
    ] : [
        {
            title: 'Actions',
            slug: 'actions',
            typeHandle: 'subhead',
            highlight: false,
            children: []
        },
        {
            title: 'Login',
            slug: 'login',
            typeHandle: 'action',
            menuItemHandler: 'login',
            highlight: false,
            children: []
        }
    ]

    return (
        <ListItem
            display="block"
            onMouseOver={isMobile ? undefined : onOpen}
            onMouseOut={isMobile ? undefined : onClose}
            borderLeft="1px solid white"
        >
            <Flex as="a"
                  justify="space-between"
                  href={null}
                  cursor="pointer"
                  onClick={onToggle}
                  h={theme.header.h}
                  align="center"
                  position="relative"
                  fontSize="14px"
                  color="#fff"
                  _hover={{color: "color4"}}

                  bg="color10"
                  p={{ base: "20px 10px", menu: "20px 20px" }}
            >
                <Avatar h="32px" w="32px"
                        border="1px solid #fff"
                        bgColor="color10"
                        icon={user ? null : <FiUser color="#ccc" />}
                        name={user ? user.name : null}
                />
            </Flex>
            {menu.children?.length ? (
                <List
                    bg="color10"
                    minW={200}
                    zIndex={1000}
                    display={{base: isOpen ? "block" : "none"}}
                    position={{base: "relative", md: "absolute"}}
                    // transform={{base: "none", md: "translateX(-10px)"}}
                    top={{base: 0, md: "100%"}}
                    right={0}
                    pb={4}
                    borderTop="1px solid"
                    borderTopColor="#fff"
                >
                    {menu.children.map((subitem, i) => {
                        return (
                            <MenuItem key={i} item={subitem} level={1} doAction={doAction}/>
                        )
                    })}
                </List>) : null
            }
        </ListItem>
    )
}
