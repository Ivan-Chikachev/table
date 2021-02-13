import React from 'react';
import { connect } from 'react-redux';
import Pagination from './Pagination';
import { setTotalPersonsCount, setCurrentPage,
    setCurrentBlock, addPagination } from '../../redux/pagination-reducer';

class PaginationContainer extends React.Component {
	componentDidMount() {}
	render() {
        this.props.addPagination(this.props.filtredData, this.props.pageSize, this.props.currentPageState)

        return (
            <>
            {this.props.filtredData.length > this.props.pageSize
                ?
                <Pagination
                    totalPage={this.props.totalPage}
                    currentPage={this.props.setCurrentPage}
                    currentPageState={this.props.currentPageState}/>
                : null}
            </>
        )
	}
}
const mapStateToProps = (state) => ({
    currentPageState: state.pagination.currentPage,
    pageSize: state.pagination.pageSize,
    totalPage: state.pagination.totalPage,
    filtredData: state.search.filtredData
});
export default connect(mapStateToProps, {
	setTotalPersonsCount,
    setCurrentPage,
    setCurrentBlock,
    addPagination
})(PaginationContainer);
