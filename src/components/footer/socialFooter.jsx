import { Text, Center } from "@chakra-ui/react"

export default function SocialFooter({text}) {
    return (
        <Center className="socialFooter" w="100%" bg="color3" py={4} >
            <Text m={0} color="color6" fontSize={{ base: 20, lg: 24 }} fontWeight={600}>
                {text}
            </Text>
        </Center>
    )
}
