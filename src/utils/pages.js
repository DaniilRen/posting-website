import { useMemo } from "react"


export const getPagesCount = (totalCount, limit) => {
	return Math.ceil(totalCount / limit)
}


export const usePagesArray = (pagesArray, totalPages) => {
	const newPages = useMemo(() => {
		const additionalPages = totalPages - pagesArray.length
		for (let i = pagesArray.length; i < additionalPages; i++) {
			pagesArray.push(i + 1)
		}
		return pagesArray
	}, [totalPages, pagesArray])

	return newPages
}