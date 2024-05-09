import {Flex, Box} from "@chakra-ui/react"

export default function Wrapper({children, fullWidth = false, ...rest}) {

    return (
        <Flex
            className="pageWrapper__outer"
            direction="column"
            w="100%"
            align="center"
            backgroundSize="cover"
            px="20px"
            {...rest}
        >
            <Box
                className="pageWrapper__inner"
                w="100%"
                maxW={fullWidth ? "none" : {xl: 1200}}
            >
                {children}
            </Box>
        </Flex>
    )
}