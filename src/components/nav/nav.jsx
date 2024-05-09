import { useEffect, useLayoutEffect, useRef, useState } from "react"
import { useRouter } from "next/router"
import { Flex, List, useDimensions } from "@chakra-ui/react"
import { useAuth } from "providers/auth"
import { useGlobalState } from "providers/globalState"
import { getAccessibleChannels } from "src/util/user"
import MenuItem from "components/nav/menuItem"
import LoginModal from "components/login/loginModal"
import LogoutModal from "components/login/logoutModal"
import stripeMenu from "config/stripe"

export default function Nav({ menu, setMenuIsTooWideForWindow, showMobileMenu }) {
    const user = useAuth()
    const { site, locale } = useGlobalState()
    const router = useRouter()

    const [isLoggingOut, setIsLoggingOut] = useState(false)
    const [loginModalIsOpen, setLoginModalIsOpen] = useState(false)

    const navRef = useRef()
    const dimensions = useDimensions(navRef)

    // useLayoutEffect(() => {
    //     const { width } = navRef.current.getBoundingClientRect();
    //     setMenuIsTooWideForWindow(width > window.innerWidth - 75)
    // },[])

    useEffect(() => {
        if (!dimensions?.borderBox) return

        const updateWindowDimensions = () => {
            setMenuIsTooWideForWindow(dimensions?.borderBox.width > window.innerWidth - 75)
        }

        updateWindowDimensions()

        window.addEventListener("resize", updateWindowDimensions)

        return () => window.removeEventListener("resize", updateWindowDimensions)
    }, [dimensions, setMenuIsTooWideForWindow])

    const userStatusFilter = user && user.isLoggedIn ? "loggedOutOnly" : "loggedInOnly"

    // recursively filter out menu items based on user status
    const filterByUserStatus = menuItem => {
        if (menuItem.userStatus === "crfStaffOnly" && !user?.isCrfStaff) return []
        if (menuItem.userStatus === userStatusFilter) return []

        menuItem.pages = menuItem.pages.flatMap(subitem => {
            return filterByUserStatus(subitem)
        })

        return menuItem
    }

    menu = menu.flatMap(item => {
        return filterByUserStatus(item)
    })

    // add a logout item if user is logged in
    if (user?.isLoggedIn) {
        menu.push({
            label: "Logout",
            typeHandle: "action",
            menuItemHandler: "logout",
        })
    }

    const versionLabels = {
        live: "Live",
        ondemand: "On Demand",
    }

    // build Channels/ menu
    const channelsMenuIndex = menu.findIndex(item => item.typeHandle === "channels")
    const channelsMenu = menu[channelsMenuIndex]

    if (channelsMenuIndex > -1) {
        const userAccessibleChannels = getAccessibleChannels(user, site, locale)
        const channelsMenuPages = userAccessibleChannels.length
            ? generateChannelsMenuItems(channelsMenu, userAccessibleChannels)
            : []

        if (!channelsMenuPages.length) {
            menu.splice(channelsMenuIndex, 1)
        } else {
            // Create the "All" menu item
            const sessionTypeTerm = site.meeting.sessionTypeTerm || "Channel"
            const allChannelsMenuItem = {
                title: "All " + sessionTypeTerm + "s",
                typeHandle: "path",
                navigationPath: "portal",
            }
            // insert channel items above any existing menu items
            channelsMenu.children = [allChannelsMenuItem, ...channelsMenuPages, ...channelsMenu.pages]
        }
    }

    function generateChannelsMenuItems(menuItem, channels) {
        return channels.flatMap(channel => {
            // generate menu items for available channels
            const channelSubPages = channel.currentlyAvailableVersions.map(version => {
                return {
                    title: versionLabels[version],
                    typeHandle: "path",
                    navigationPath: `${version}/${channel.slug}`,
                }
            })

            // add subhead
            if (channelSubPages.length) {
                channelSubPages.unshift({
                    title: channel.title,
                    typeHandle: "subhead",
                })
            }

            return channelSubPages
        })
    }

    const actions = {
        logout: async () => {
            setIsLoggingOut(true)
            await fetch("/api/auth/logout")
            // either redirect to the homepage or reload the homepage if we're already there
            if (router.asPath === "/") {
                router.reload()
            } else {
                router.push("/")
            }
        },
        login: () => {
            setLoginModalIsOpen(true)
        },
    }

    const doAction = action => {
        actions[action].call()
    }

    const crfmenu = [
        {
            title: "Cardiovascular Research Foundation",
            typeHandle: "null",
            bgColor: "#e7e7e7",
            grayscale: true,
            pages: stripeMenu.sites.map(site => {
                return {
                    ...site,
                    string: site.url,
                    typeHandle: "link",
                    grayscale: true,
                }
            }),
        },
        {
            title: "CRF Meetings",
            typeHandle: "null",
            bgColor: "#e7e7e7",
            grayscale: true,
            pages: stripeMenu.meetings.map(site => {
                return {
                    ...site,
                    string: site.url,
                    typeHandle: "link",
                    grayscale: true,
                }
            }),
        },
    ]

    return (
        <>
            <Flex as={List} ref={navRef} direction={showMobileMenu ? "column" : "row"}>
                {menu.map((item, i) => {
                    return (
                        <MenuItem
                            key={i}
                            item={item}
                            level={0}
                            isLast={menu.length === i + 1}
                            doAction={doAction}
                            isMobile={showMobileMenu}
                        />
                    )
                })}

                {showMobileMenu &&
                    crfmenu.map((item, i) => {
                        return (
                            <MenuItem
                                key={i}
                                item={item}
                                level={0}
                                isLast={crfmenu.length === i + 1}
                                doAction={doAction}
                                isMobile={showMobileMenu}
                            />
                        )
                    })}
            </Flex>

            {loginModalIsOpen && <LoginModal onClose={setLoginModalIsOpen} />}

            {isLoggingOut && <LogoutModal />}
        </>
    )
}
