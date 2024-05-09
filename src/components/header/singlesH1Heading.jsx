import { Heading } from "@chakra-ui/react"
import darkLightPageStyles from "styles/darkLightStyles"
import Wrapper from "components/layout/wrapper"

export default function SinglesH1Heading({ title }) {
    return (
        <Wrapper>
            <Heading
                as="h1"
                color={darkLightPageStyles.dark.pageTitleColor}
                fontWeight="600"
                dangerouslySetInnerHTML={{ __html: title }}
                pt={["40px", "60px", "80px"]}
                pb={10}
            />
        </Wrapper>
    )
}
