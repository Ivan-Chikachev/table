import React from 'react';
import {connect} from 'react-redux';
import Table from './Table';
import {
    setDirectionSort,
    setField,
    setCurrentPerson,
    pushPerson,
    setUrl,
    sortingData
} from '../../redux/table-reducer';
import Loader from '../Loader';
import ButtonUrl from '../ButtonUrl/ButtonUrl';

class TableContainer extends React.Component {
    componentDidMount() {
    }

    render() {
        const sorting = (field) => {
            return this.props.sortingData(this.props.persons, this.props.directionSort, field)
        }

        return (
            <>
                <ButtonUrl setUrl={this.props.setUrl}/>

                {this.props.isFetching ? <Loader/> : null}

                {this.props.isLoadUrl ?
                    <Table
                        sortingData={sorting}
                        directionSort={this.props.directionSort}
                        setField={this.props.setField}
                        isField={this.props.isField}
                        currentPerson={this.props.currentPerson}
                        setCurrentPerson={this.props.setCurrentPerson}
                        currentBlock={this.props.currentBlock}/>
                    : null}
            </>
        )

    }
}

const mapStateToProps = (state) => ({
    persons: state.tablePage.persons,
    isFetching: state.tablePage.isFetching,
    directionSort: state.tablePage.directionSort,
    isField: state.tablePage.field,
    currentPerson: state.tablePage.currentPerson,
    isLoadUrl: state.tablePage.isLoadUrl,
    currentBlock: state.pagination.currentBlock
});

export default connect(mapStateToProps, {
    setDirectionSort,
    setField,
    setCurrentPerson,
    pushPerson,
    setUrl,
    sortingData

})(TableContainer);
