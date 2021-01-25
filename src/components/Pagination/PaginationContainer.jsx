import React from 'react';
import { connect } from 'react-redux';
import Pagination from './Pagination';
import { setTotalPersonsCount, setTotalPage, setCurrentPage, setCurrentBlock } from '../../redux/pagination-reducer';

class PaginationContainer extends React.Component {
	componentDidMount() {}
	render() {
		this.props.setTotalPersonsCount(this.props.filtredData.length);
		const totalPage = Math.ceil(this.props.filtredData.length / this.props.pageSize);
		this.props.setTotalPage(totalPage);
		const currentPage = (page) => {
            this.props.setCurrentPage(page);
            
        };
        const lastBlockRow = this.props.currentPageState * this.props.pageSize;
        const firstBlockRow = lastBlockRow - this.props.pageSize;
        const currentBlock = this.props.filtredData.slice(firstBlockRow, lastBlockRow );
        this.props.setCurrentBlock(currentBlock);
        

        return (
            <>
            {this.props.filtredData.length > this.props.pageSize? <Pagination
             totalPage={totalPage} 
             currentPage={currentPage} 
             currentPageState={this.props.currentPageState}/> : null}
            </>
        )
	}
}
const mapStateToProps = (state) => ({
    pageSize: state.pagination.pageSize,
    currentPageState: state.pagination.currentPage,
    pageSize: state.pagination.pageSize,
    totalPage: state.pagination.totalPage,
    filtredData: state.search.filtredData
});
export default connect(mapStateToProps, {
	setTotalPersonsCount,
	setTotalPage,
    setCurrentPage,
    setCurrentBlock
})(PaginationContainer);
