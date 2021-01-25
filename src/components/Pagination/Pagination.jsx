import React from 'react';

const Pagination = (props) => {
	let pages = [];
	for (let i = 1; i <= props.totalPage; i++) {
		pages.push(i);
	}
	return (
		<div className='pagination'>
			<ul>
				{pages.map((page) => {
					return <li className={props.currentPageState === page? 'active' : null}  onClick={()=> {props.currentPage(page)}}>{page}</li>;
				})}
			</ul>
		</div>
	);
};
export default Pagination;
