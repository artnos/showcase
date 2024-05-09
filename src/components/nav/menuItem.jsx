import { Flex, Icon, List, ListItem, useBreakpointValue, useDisclosure, useTheme } from "@chakra-ui/react"
import { FiChevronDown, FiChevronUp, FiChevronRight } from "react-icons/fi"

export default function MenuItem({ item, level, isFirst, isLast, doAction, isMobile = false }) {
    const theme = useTheme()

    const { isOpen, onToggle, onOpen, onClose } = useDisclosure({ defaultIsOpen: false })

    const href = () => {
        switch (item.typeHandle) {
            case "htmlPage":
                return "/" + item.page[0]?.slug

            case "path":
                return "/" + item.navigationPath

            case "link":
                return item.string

            default:
                return null
        }
    }

    function onClick() {
        if (item.menuItemHandler) {
            doAction(item.menuItemHandler)
        } else if (isMobile) {
            onToggle()
        }
    }

    const isSubhead = item.typeHandle === "subhead"

    const cursorStyle = ["null", "subhead"].includes(item.typeHandle) ? "default" : "pointer"

    const target = item.typeHandle === "link" || item.openInNewTab ? "_blank" : null

    const hoverStyles = item.highlight
        ? {
              bgColor: "color4",
              color: "#fff",
          }
        : isMobile ? item.grayscale ? { bgColor: "rgba(220,220,220)" } : { bgColor: "rgba(0,0,0,0.1)" } : { color: "color4" }

    const anchorPadding =
        level === 0
            ? isMobile ? "10px 20px" : "20px 30px"
            : isMobile ? `10px 20px 10px ${20 + level*10}px` : "5px 15px"

    const borderLeft =
        level === 0
            ? isMobile ? "none" : "1px solid white"
            : "none"

    let buttonStyles = {}
    if (item.grayscale) {
        buttonStyles.color = "#323232"
        buttonStyles.bg = "#e7e7e7"
    } else if (item.highlight) {
        buttonStyles.color = "#fff"
        buttonStyles.bg = theme.colors.color1
    } else if (isSubhead) {
        buttonStyles.color = theme.colors.color4
        buttonStyles.bg = null
    }

    return (
        <ListItem
            display="block"
            position="relative"
            onMouseOver={isMobile ? undefined : onOpen}
            onMouseOut={isMobile ? undefined : onClose}
            borderLeft={borderLeft}
            bg={item.bgColor || "transparent"}
            className={item.highlight ? "highlight" : ""}
        >
            <Flex
                className={isSubhead ? "menu-subhead" : null}
                as="a"
                justify="space-between"
                href={href()}
                target={target}
                cursor={cursorStyle}
                onClick={onClick}
                h={isMobile ? "unset" : level > 0 ? "auto" : theme.header.h}
                p={anchorPadding}
                mt={isSubhead || isFirst ? "15px" : 0}
                // mb={isMobile ? "1px" : 0 }
                align="center"
                position="relative"
                textTransform={isSubhead || level === 0 ? "uppercase" : "normal"}
                fontSize={isSubhead ? "12px" : "13px"}
                fontWeight={isSubhead ? "700" : "normal"}
                wrap={level === 0 ? "nowrap" : "unset"}
                color={buttonStyles.color}
                bgColor={buttonStyles.bg}
                _hover={hoverStyles}
                sx={item.styles}
            >
                {item.label || item.title}
                {item.pages?.length ? (
                    <Icon
                        display={
                            level < 1
                                ? isMobile ? "inline" : "none"
                                : "inline"
                        }
                        as={isMobile ? (isOpen ? FiChevronUp : FiChevronDown) : FiChevronRight}
                        m="3px 0 0 5px"
                        w="16px"
                        h="16px"
                    />
                ) : null}
            </Flex>
            {item.pages?.length ? (
                <List
                    className="menu"
                    bg={item.bgColor || "color2"}
                    minW={270}
                    zIndex={1000}
                    display={isOpen ? "block" : "none" }
                    position={isMobile ? "relative" : "absolute" }
                    top={isMobile ? 0 : level < 1 ? "100%" : "-15px" }
                    left={isMobile || level < 1 ? "unset" : "100%"}
                    right={isLast ? 0 : "unset"}
                    pb={4}
                    borderTop={isMobile ? "none" : level === 0 ? "1px solid white" : "none"}
                    borderTopColor="#fff"
                >
                    {item.pages.map((subitem, i) => {
                        return (
                            <MenuItem
                                key={i}
                                item={subitem}
                                level={level + 1}
                                isFirst={i === 0}
                                isLast={item.pages.length === i + 1}
                                doAction={doAction}
                                isMobile={isMobile}
                            />
                        )
                    })}
                </List>
            ) : null}
        </ListItem>
    )
}
