import { Box, Button, ListItem, Menu, MenuButton, MenuItem, MenuList, UnorderedList } from "@chakra-ui/react"
import React, { useState } from "react"
import { ChevronDownIcon } from "@chakra-ui/icons"

export const useSelectCountry = () => {
    const [activeCountry, setActiveCountry] = useState("")

    const countryProps = {
        activeCountry,
        setActiveCountry,
    }

    const reset = () => {
        setActiveCountry("")
    }

    return [countryProps, activeCountry, reset]
}

export const SelectCountry = ({ data, activeCountry, setActiveCountry }) => {
    if (data == null) {
        return <Box>Loading...</Box>
    }

    const countries = data
        .reduce((accumulator, currentValue) => {
            if (accumulator.includes(currentValue.country.trim())) {
                return accumulator
            } else {
                return [...accumulator, currentValue.country.trim()]
            }
        }, [])
        .sort()

    return (
        <Box>
            <Menu>
                <MenuButton
                    rightIcon={<ChevronDownIcon />}
                    as={Button}
                    backgroundColor={"purple"}
                    border={"solid 1px #511c74"}
                    borderRadius={"0px"}
                    color={"white"}
                    _expanded={{ bg: "purple" }}
                    _focus={{ bg: "purple" }}
                    width={"222px"}
                    _hover={{
                        backgroundColor: "white",
                        color: "purple",
                    }}
                    // onClick={() => setOpen(!open)}
                >{`Filter by Country`}</MenuButton>
                {open && (
                    <MenuList
                        // position={"absolute"}
                        // backgroundColor={"white"}
                        // border={"solid 1px"}
                        // borderColor={"purple"}

                        right={"0px"}
                        // pt={"10px"}
                        height={"50vh"}
                        overflow={"hidden"}
                        overflowY={"auto"}
                        pt={"10px"}
                        mt={"0px"}
                        width={"200px"}
                        sx={{ width: "200px" }}
                    >
                        {countries.map(country => {
                            return (
                                <MenuItem
                                    fontWeight={activeCountry === country && "bold"}
                                    cursor={"pointer"}
                                    _hover={{
                                        fontWeight: "bold",
                                    }}
                                    onClick={e => setActiveCountry(country)}
                                    key={country}
                                >
                                    {country}
                                </MenuItem>
                            )
                        })}
                    </MenuList>
                )}
            </Menu>
        </Box>
    )
}
