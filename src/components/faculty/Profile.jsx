import React from "react"
import { Box, GridItem, Heading, Text } from "@chakra-ui/react"

export default function Profile({ detail, selectFaculty }) {
    const { address, country, fullname, id, institution, title } = detail

    return (
        <GridItem>
            <Heading
                as={"h5"}
                color={"#511c74"}
                fontWeight={300}
                fontSize={"1.5rem"}
                dangerouslySetInnerHTML={{ __html: fullname }}
                onClick={e => selectFaculty(id)}
            />
            {/* eslint-disable-next-line react/jsx-no-undef */}
            <Text dangerouslySetInnerHTML={{ __html: institution }} />
            <Text>
                <em>
                    <span className="address" dangerouslySetInnerHTML={{ __html: address }} />
                </em>
            </Text>
        </GridItem>
    )
}
