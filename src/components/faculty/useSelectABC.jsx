import { ListItem, UnorderedList } from "@chakra-ui/react"
import React, { useState } from "react"

export const useSelectABC = () => {
    const [activeLetter, setActiveLetter] = useState("")
    const [filterLetters, setFilterLetters] = useState(false)

    //onClick={ ()=>setShowModal(false) }
    const abcProps = {
        activeLetter,
        setActiveLetter,
        filterLetters,
    }

    const reset = () => {
        setActiveLetter("")
    }

    return [abcProps, activeLetter, reset]
}

// eslint-disable-next-line react/prop-types
export const SelectorABC = ({ activeLetter, setActiveLetter, data = false, filterLetters = false }) => {
    // prettier-ignore
    let letters = ["", "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

    if (filterLetters) {
        const tempLetters = data
            // eslint-disable-next-line react/prop-types
            .reduce(
                (acc, curr) => {
                    const formatLetter = curr.lastname.substring(0, 1).toLowerCase()
                    if (!acc.includes(formatLetter)) {
                        acc.push(formatLetter)
                    }
                    return acc
                },
                [""],
            )
            .sort()
        letters = [...tempLetters]
    }

    return (
        <div id="SelectorABC">
            <UnorderedList display={"flex"} flexWrap={"wrap"} listStyleType={"none"}>
                {letters.map((letter, i) => {
                    const active = activeLetter === letter

                    return (
                        <ListItem
                            key={`letter${i}`}
                            onClick={() => setActiveLetter(letter)}
                            backgroundColor={active ? "purple" : "transparent"}
                            color={active ? "white" : "purple"}
                            borderRadius={"5px"}
                            padding={"5px"}
                            cursor={"pointer"}
                            textTransform={"uppercase"}
                            fontWeight={"bold"}
                            _hover={{
                                backgroundColor: "purple",
                                color: "white",
                            }}
                        >
                            {letter === "" ? "all" : letter}
                        </ListItem>
                    )
                })}
            </UnorderedList>
        </div>
    )
}
