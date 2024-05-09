import ProfileList from "../components/faculty/ProfileList"

import { Container, Box, Heading, Flex } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { useSelectABC, SelectorABC } from "../components/faculty/useSelectABC.jsx"
import { Search, useSearch } from "../components/faculty/useSearch.jsx"
import { SelectCountry, useSelectCountry } from "../components/faculty/useSelectCountry.jsx"
import useSelectRegion from "../components/faculty/useSelectRegion.jsx"
import { countryFilter, regionFilter, searchFilter } from "../components/faculty/filters/filter.js"

//have to implement search
//reset region
export default function Faculty() {
    const [allProfiles, setAllProfiles] = useState([])
    const [filteredProfiles, setFilteredProfiles] = useState([])
    const [SelectRegion, activeRegion] = useSelectRegion()
    const [searchProps, activeInputSearch, resetActiveInput] = useSearch()
    const [abcProps, activeLetter, resetLetter] = useSelectABC()
    const [countryProps, activeCountry, resetCountry] = useSelectCountry()

    const getData = async () => {
        const response = await fetch("https://artsir.com/faculty")
        const result = await response.json()
        setAllProfiles(result)
        setFilteredProfiles(result)
    }

    useEffect(() => {
        getData()
    }, [])

    useEffect(() => {
        let filters = [regionFilter(activeRegion), searchFilter(activeInputSearch)]
        if (activeInputSearch === "") {
            filters.push(countryFilter(activeCountry))
        }
        const filteredData = allProfiles.filter(profile => filters.every(f => f(profile)))
        setFilteredProfiles(filteredData)
    }, [activeLetter, activeInputSearch, activeCountry, activeRegion, allProfiles])

    useEffect(() => {
        resetCountry()
    }, [activeRegion])

    useEffect(() => {
        resetCountry()
        resetLetter()
    }, [activeInputSearch])

    useEffect(() => {
        resetActiveInput()
        resetLetter()
    }, [activeCountry])

    const modalActive = id => {
        console.log(id)
    }

    //console.log("State Review", { activeRegion, activeInputSearch, activeCountry, activeLetter })

    return (
        <Box>
            <Container maxW="1200px">
                <Heading color={"purple"} mt={"30px"}>
                    Faculty
                </Heading>
                <Flex gap={"20px"} mt={"20px"} flexWrap={"wrap"} justifyContent={"space-between"}>
                    <Box flex={"1 1 50%"}>
                        <SelectRegion />
                    </Box>
                    <Box flex={"1 1 23%"} minW={"200px"}>
                        <Search {...searchProps} />
                    </Box>
                    <Box>
                        <SelectCountry {...countryProps} data={allProfiles} />
                    </Box>
                </Flex>
                <Box mt={"10px"}>
                    {/*Filter By Country*/}
                    {activeInputSearch != "" ? (
                        "Search By: " + activeInputSearch
                    ) : (
                        <>
                            {activeCountry === "" && <>{activeRegion}</>}
                            {activeRegion && activeCountry == null ? activeRegion + " Faculty" : ""}
                            {activeCountry && activeCountry}
                            {activeLetter ? " > " + activeLetter.toUpperCase() : ""}
                        </>
                    )}
                </Box>
                <Flex justifyContent={"center"} my={"20px"}>
                    <SelectorABC
                        {...abcProps}
                        filterLetters={activeCountry === "" ? false : true}
                        data={filteredProfiles}
                    />
                </Flex>

                {allProfiles.length == 0 ? (
                    <>Loading...</>
                ) : (
                    <ProfileList data={filteredProfiles} selectFaculty={modalActive} activeLetter={activeLetter} />
                )}

                {/*{faculty_id !== null ? <Modal faculty_id={faculty_id} closeModal={closeModal}/> : ''}*/}
            </Container>
        </Box>
    )
}
