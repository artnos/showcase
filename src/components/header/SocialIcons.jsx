import {Flex, Link, Icon} from "@chakra-ui/react"
import {FiFacebook, FiTwitter, FiInstagram, FiLinkedin, FiYoutube} from "react-icons/fi"
import {FaXTwitter} from "react-icons/fa6";

export default function SocialIcons({
                                        color = "color5",
                                        hoverColor = "color2",
                                        size = "16px",
                                        padding = 1,
                                        m = "0px 15px 0px 0px",
                                    }) {
    return (
        <Flex className="social-icons" m={m}>
            <Link p={padding} href="https://twitter.com/CRFHeart" target="_blank" role="group">
                <Icon
                    className="social-icon-solid"
                    as={FaXTwitter}
                    w={size}
                    h={size}
                    fill={color}
                    stroke="none"
                    _groupHover={{fill: hoverColor}}
                />
            </Link>
            <Link p={padding} color={color} href="https://www.facebook.com/CRFheart/" target="_blank" role="group">
                <Icon
                    className="social-icon-solid"
                    as={FiFacebook}
                    w={size}
                    h={size}
                    fill={color}
                    stroke="none"
                    _groupHover={{fill: hoverColor}}
                />
            </Link>
            <Link p={padding} color={color} href="https://www.instagram.com/crfheart/" target="_blank" role="group">
                <Icon
                    className="social-icon-outline"
                    as={FiInstagram}
                    w={size}
                    h={size}
                    stroke={color}
                    _groupHover={{stroke: hoverColor}}
                />
            </Link>
            <Link
                p={padding}
                color={color}
                href="https://www.linkedin.com/company/cardiovascular-research-foundation"
                target="_blank"
                role="group"
            >
                <Icon
                    className="social-icon-solid"
                    as={FiLinkedin}
                    w={size}
                    h={size}
                    fill={color}
                    stroke="none"
                    _groupHover={{fill: hoverColor}}
                />
            </Link>
            <Link
                p={padding}
                color={color}
                href="https://www.youtube.com/channel/UCy4VDgT1jGbdDq6tU3NwoRQ"
                target="_blank"
                role="group"
            >
                <Icon
                    className="social-icon-outline"
                    as={FiYoutube}
                    w={size}
                    h={size}
                    stroke={color}
                    _groupHover={{stroke: hoverColor}}
                />
            </Link>
        </Flex>
    )
}
