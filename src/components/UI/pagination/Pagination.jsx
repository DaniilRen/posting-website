import React from 'react'
import { usePagesArray } from '../../../utils/pages'


export default function Pagination({totalPages, page, changePage}) {
	let pagesArray = usePagesArray([], totalPages)
	return (
		<div className={'page__wrapper'}>
			{pagesArray.map(p =>
				<span 
					onClick={() => changePage(p)}
					key={p}
					className={page === p ? 'page page__current' : 'page'}
				>
					{p}
				</span>
			)}
		</div>
	)
}
