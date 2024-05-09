import React from "react"
import PropTypes from "prop-types"
import Profile from "./Profile"
import { Box, Flex, Grid } from "@chakra-ui/react"
import { lastNameFilter } from "./filters/filter.js"
import { Pagination, usePagination } from "./usePagination.jsx"

const ProfileList = ({ data, selectFaculty, activeLetter }) => {
    const [paginationProps, createPagination] = usePagination()

    let filteredData = data.filter(lastNameFilter(activeLetter))

    let paginatedData = createPagination(filteredData)

    return (
        <>
            <Grid templateColumns={["1fr", " 1fr 1fr", "1fr 1fr 1fr"]} gap={6}>
                {paginatedData?.map(d => {
                    return <Profile detail={d} key={`${d.id}`} selectFaculty={selectFaculty} />
                })}
                {paginatedData?.length === 0 && <>Nothing matched your search</>}
            </Grid>
            <Box my={"20px"} display={"flex"} justifyContent={"flex-end"}>
                <Pagination {...paginationProps} data={filteredData} />
            </Box>
        </>
    )
}

export default ProfileList
