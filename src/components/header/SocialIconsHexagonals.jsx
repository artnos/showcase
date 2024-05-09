import { Flex, Link, Icon } from "@chakra-ui/react"
import { createIcon } from "@chakra-ui/icons"
import styles from './socialIcons.module.scss'

export default function SocialIcons(props) {

    const color = props.color || "gray.600"
    const size = props.size || "16px"

    return (
        <Flex mr="15px">
            <Link p={2}  href="https://twitter.com/CRFHeart" target="_blank" className={styles.icon}>
                <Icon as={TwitterHex} w={size} h={size} fill={color} stroke="none"/>
            </Link>
            <Link p={2} color={color} href="https://www.facebook.com/CRFheart/" target="_blank" className={styles.icon}>
                <Icon as={FacebookHex} w={size} h={size} fill={color} stroke="none"/>
            </Link>
            <Link p={2} color={color} href="https://www.instagram.com/crfheart/" target="_blank" className={styles.icon}>
                <Icon as={LinkedInHex} w={size} h={size} stroke={color}/>
            </Link>
            <Link p={2} color={color} href="https://www.linkedin.com/company/cardiovascular-research-foundation" target="_blank" className={styles.icon}>
                <Icon as={InstagramHex} w={size} h={size} fill={color} stroke="none"/>
            </Link>
        </Flex>
    )

}

export const TwitterHex = createIcon({
    displayName: "TwitterHex",
    viewBox: "0 0 178 206",
    path: (
        <g data-name="Layer 2">
            <g data-name="Layer 1">
                <path fill="#041d50" d="M178 154.5v-103L89 0 0 51.5v103L89 206l89-51.5z"></path>
                <path d="M128.3 79.4a34.74 34.74 0 01-9.61 2.6 16.6 16.6 0 007.31-9.18 33.37 33.37 0 01-10.58 4A16.68 16.68 0 0086.6 88.26a17.43 17.43 0 00.39 3.8 47.18 47.18 0 01-34.37-17.44 16.67 16.67 0 005.12 22.29 16.48 16.48 0 01-7.53-2V95a16.76 16.76 0 0013.36 16.39 16.74 16.74 0 01-4.38.55 15 15 0 01-3.15-.29 16.83 16.83 0 0015.58 11.62 33.49 33.49 0 01-20.68 7.11 30.78 30.78 0 01-4-.23 46.91 46.91 0 0025.59 7.49c30.69 0 47.46-25.43 47.46-47.46 0-.74 0-1.45-.06-2.16a33.27 33.27 0 008.37-8.62z" fill="#e8d5c1"></path>
            </g>
        </g>
    ),
})

export const FacebookHex = createIcon({
    displayName: "FacebookHex",
    viewBox: "0 0 178 206",
    path: (
        <g data-name="Layer 2">
            <g data-name="Layer 1">
                <path fill="#041d50" d="M178 154.5v-103L89 0 0 51.5v103L89 206l89-51.5z"></path>
                <path d="M77 76.79V89.3h-9.21v15.31H77v45.48h18.79v-45.48h12.64s1.19-7.34 1.76-15.36H95.87V78.78c0-1.56 2-3.67 4.08-3.67h10.26V59.18H96.26C76.49 59.18 77 74.5 77 76.79z" fill="#e8d5c1"></path>
            </g>
        </g>
    ),
})

export const LinkedInHex = createIcon({
    displayName: "LinkedInHex",
    viewBox: "0 0 178 206",
    path: (
        <g id="Layer_2" data-name="Layer 2">
            <g id="Layer_1-2" data-name="Layer 1">
                <path fill="#041d50" d="M178 154.5v-103L89 0 0 51.5v103L89 206l89-51.5z"></path>
                <path fill="#e8d5c1" d="M53.62 88H68.8v48.75H53.62zM61.21 81.33a8.79 8.79 0 10-8.79-8.79 8.79 8.79 0 008.79 8.79zM93.46 112.63c0-6.35 1.2-12.51 9.09-12.51s7.88 7.27 7.88 12.93v23.7h15.15V110c0-13.13-2.83-23.23-18.18-23.23-7.37 0-12.32 4-14.35 7.88h-.2V88H78.31v48.75h15.15z"></path>
            </g>
        </g>
    ),
})

export const InstagramHex = createIcon({
    displayName: "InstagramHex",
    viewBox: "0 0 178 206",
    path: (
        <g id="Layer_2" data-name="Layer 2">
            <g id="Layer_1-2" data-name="Layer 1">
                <path fill="#041d50" d="M178 154.5v-103L89 0 0 51.5v103L89 206l89-51.5z"></path>
                <path fill="#e8d5c1" d="M104.4 64.89H73.6a21.48 21.48 0 00-21.42 21.42v32.82a21.48 21.48 0 0021.42 21.42h30.8a21.48 21.48 0 0021.42-21.42V86.31a21.48 21.48 0 00-21.42-21.42zm15.76 54.24a15.81 15.81 0 01-15.76 15.76H73.6a15.81 15.81 0 01-15.76-15.76V86.31A15.81 15.81 0 0173.6 70.55h30.8a15.81 15.81 0 0115.76 15.76z"></path>
                <path fill="#e8d5c1" d="M89.11 82.15a20.28 20.28 0 1020.28 20.28 20.28 20.28 0 00-20.28-20.28zM89 115.72a13.28 13.28 0 1113.28-13.28A13.27 13.27 0 0189 115.72z"></path>
                <circle fill="#e8d5c1" cx="109.72" cy="81.83" r="4.8"></circle>
            </g>
        </g>
    ),
})
