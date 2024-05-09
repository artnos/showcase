import React, { useState } from "react"
import { Box, Button, Input, InputGroup, InputRightAddon } from "@chakra-ui/react"
import { Search2Icon } from "@chakra-ui/icons"

export const useSearch = () => {
    const [inputSearch, setInputSearch] = useState("")
    const [activeInputSearch, setActiveInputSearch] = useState("")

    const searchProps = {
        inputProps: {
            onChange: e => {
                setInputSearch(e.target.value)
            },
            onKeyPress: e => {
                e.code === "Enter" && setActiveInputSearch(inputSearch)
            },
            value: inputSearch,
        },
        buttonProps: {
            callback: "test",
            onClick: () => {
                setActiveInputSearch(inputSearch)
                //callback()
            },
            cursor: "pointer",
        },
    }

    const reset = () => {
        setActiveInputSearch("")
        setInputSearch("")
    }

    return [searchProps, activeInputSearch, reset]
}

// eslint-disable-next-line react/prop-types
export const Search = ({ inputProps, buttonProps, callback }) => {
    return (
        <Box key={"searchInput"}>
            <InputGroup borderColor={"purple"}>
                <Input type={"text"} name={"search"} placeholder={"Search"} {...inputProps} borderRadius={"0px"} />
                <InputRightAddon {...buttonProps} callback={callback} backgroundColor={"purple"} borderRadius={"0px"}>
                    <Search2Icon color={"white"} />
                </InputRightAddon>
            </InputGroup>
        </Box>
    )
}
