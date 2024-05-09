import { useState, useEffect } from "react"
import { useRouter } from "next/router"
import find from "lodash/find"
import { Box, Heading, useTheme } from "@chakra-ui/react"
import { findParent } from "src/util"
import Wrapper from "components/layout/wrapper"

export default function SectionBanner({ flatmenu, bgColor, bgImage, label, blurb }) {
    const theme = useTheme()
    const router = useRouter()
    const [bannerLabel, setBannerLabel] = useState("")
    const [bannerBg, setBannerBg] = useState("")

    useEffect(() => {
        if (!router.query) return
        let menuSection = null

        if (label) {
            setBannerLabel(label)
        } else {
            let lastSegment

            if (router.query.slug) {
                // html pages
                const urlSegments = router.query.slug
                lastSegment = urlSegments.pop()
            } else {
                // singles
                lastSegment = router.asPath.split("/").pop()
            }

            // grab the current page from the menu based on the final URL segment
            const thisPage = find(flatmenu, menuItem => {
                return menuItem.page?.length ? menuItem.page[0].slug === lastSegment : menuItem.slug === lastSegment
            })

            // if we found a page, then find its parents
            if (thisPage) {
                let parents = findParent(flatmenu, thisPage)

                // catch for top-level pages: if there is no parent, then use the current page info
                parents = parents.length ? parents : [thisPage]

                menuSection = parents.pop()
            }

            setBannerLabel(menuSection?.title || "")
        }

        let bannerBgImage = bgImage
        if (!bannerBgImage) {
            bannerBgImage =
                menuSection && menuSection.backgroundImage?.length
                    ? menuSection.backgroundImage[0]?.url
                    : theme.backgroundImage?.[0]?.url
        }

        const bannerBgColor = bgColor || theme.colors.color2

        setBannerBg(bannerBgColor + ` url(${bannerBgImage})`)
    }, [bgColor, bgImage, flatmenu, label, router, theme.backgroundImage, theme.colors])

    return (
        <Box className="section-banner" as="header" bg={bannerBg} bgSize="cover" bgPosition="top right">
            <Wrapper py="52px">
                <Heading
                    as="h3"
                    className="sectionBanner__head"
                    mt={0}
                    fontFamily="canada-type-gibson"
                    fontWeight={600}
                    fontSize={40}
                    textTransform="uppercase"
                >
                    {bannerLabel}
                </Heading>
                {blurb && (
                    <Box
                        className="sectionBanner__body"
                        color="color1"
                        dangerouslySetInnerHTML={{ __html: blurb }}
                        sx={{
                            p: {
                                m: 0,
                                textTransform: "uppercase",
                                fontSize: [14, 18],
                            },
                        }}
                    />
                )}
            </Wrapper>
        </Box>
    )
}
