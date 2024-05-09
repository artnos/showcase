import { Flex, Link } from "@chakra-ui/react"
import { useState, useEffect } from "react"
import { ArrowLeftIcon, ArrowRightIcon, ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons"

export const usePagination = () => {
    const [page, setPage] = useState(0)
    const [limit, setLimit] = useState(27)

    const createPagination = data => {
        const tempCopy = [...data]
        const splitData = tempCopy.splice(page * limit, limit)
        //setPageData([...splitData])
        return [...splitData]
    }

    const paginationProps = {
        page,
        setPage,
        limit,
    }
    return [paginationProps, createPagination]
}

export const Pagination = ({ page, setPage, data, limit }) => {
    const numOfPages = Math.ceil(data.length / limit)

    const handlePageChange = num => {
        setPage(num)
    }

    const rows = []
    // if (numOfPages > pageRangeDisplay) {
    // }

    const startNum = Math.max(page - 2, 0)
    const pageMax = startNum + 5
    const lastNum = pageMax > numOfPages ? numOfPages : pageMax

    for (let i = startNum; i < lastNum; i++) {
        //console.log("check", i, startNum)
        const active = page === i

        if (i === startNum && i !== 0) {
            rows.push(
                <Link key={`back${i}`} onClick={() => handlePageChange(1)}>
                    <ChevronLeftIcon />
                </Link>,
            )
            rows.push(
                <Link key={`first${i}`} onClick={() => handlePageChange(i - 1)}>
                    <ArrowLeftIcon fontSize={"8px"} />
                </Link>,
            )
        }
        rows.push(
            <Link
                key={i}
                fontWeight={active ? "bold" : "normal"}
                _hover={{
                    textDecoration: active ? "none" : "underline",
                }}
                cursor={active ? "default" : "pointer"}
                onClick={() => handlePageChange(i)}
            >
                {i + 1}
            </Link>,
        )

        if (i === lastNum - 1 && i != numOfPages - 1) {
            rows.push(
                <Link key={`back${i}`} onClick={() => handlePageChange(i + 1)}>
                    <ChevronRightIcon />
                </Link>,
            )
            rows.push(
                <Link key={`first${i}`} onClick={() => handlePageChange(numOfPages - 1)}>
                    <ArrowRightIcon fontSize={"8px"} />
                </Link>,
            )
        }
    }
    return (
        <Flex gap={"10px"} mt={"30px"}>
            {rows}
        </Flex>
    )
}
