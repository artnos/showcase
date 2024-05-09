import { useRouter } from "next/router"
import { Box, List, ListItem, Link, Text } from "@chakra-ui/react"

import { findParent } from "src/util"
import Wrapper from "components/layout/wrapper"

export default function Breadcrumbs({ flatmenu }) {
    const router = useRouter()
    const urlSegments = router.asPath.split("?")[0].split("/")
    const lastSegment = urlSegments.pop()

    // TODO: this will not work for a faculty detail page (and others) because the last URL segment does not exist in the menu tree (it's a dynamic URL)
    // grab the current page from the menu based on the final URL segment
    const thisPage = flatmenu.find(menuItem => {
        if (menuItem.typeHandle === "path") {
            return menuItem.navigationPath === lastSegment
        }
        return menuItem.page?.length ? menuItem.page[0].slug === lastSegment : menuItem.slug === lastSegment
    })

    let breadcrumbs = []

    // if we found a page, then build the crumbs
    if (thisPage) {
        breadcrumbs = findParent(flatmenu, thisPage)
    }

    // add in the home page
    breadcrumbs.push({
        id: 0,
        title: "Home",
        slug: "/",
    })

    breadcrumbs = breadcrumbs.reverse()

    // if we found a page, then add it to the crumbs
    if (thisPage) {
        breadcrumbs.push(thisPage)
    }

    if (!breadcrumbs.length) {
        return null
    }

    return (
        <Box className="breadcrumbs" bg="color12" color="color10">
            <Wrapper>
                <nav aria-label="breadcrumbs">
                    <List py={2}>
                        {breadcrumbs.map((breadcrumb, i) => {
                            return (
                                <ListItem key={breadcrumb.id} display="inline-block" fontWeight="400">
                                    {i ? (
                                        <Text as="span" px={3}>
                                            &gt;
                                        </Text>
                                    ) : null}
                                    {breadcrumb.slug === "/" ? (
                                        <Link href="/">{breadcrumb.title}</Link>
                                    ) : (
                                        <Text as="span">{breadcrumb.title}</Text>
                                    )}
                                </ListItem>
                            )
                        })}
                    </List>
                </nav>
            </Wrapper>
        </Box>
    )
}
