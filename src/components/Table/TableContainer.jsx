import React from 'react';
import { connect } from 'react-redux';
import Table from './Table';
import {
  setPersons,
  toggleIsFetching,
  sortData,
  setDirectionSort,
  setField,
  setCurrentPerson,
  loadUrl,
  pushPerson
} from '../../redux/table-reducer';
import {setCurrentPage} from '../../redux/pagination-reducer';
import Loader from '../Loader';
import { personsAPI } from '../../api/PersonAPI';
import ButtonUrl from '../ButtonUrl/ButtonUrl';

class TableContainer extends React.Component {
  componentDidMount() {
  }
  render() {
    const setUrl = (i) => {
        this.props.toggleIsFetching(true);
        personsAPI.getPersons(i).then((data) => {
        this.props.setPersons(data);  
        this.props.loadUrl(true)
        this.props.toggleIsFetching(false);
        this.props.setCurrentPage(1)
      });
    }
    const sortingData = (field) => {
      const persons = this.props.persons; 
      const copyPersons = persons.concat();
      let sort;
      if (this.props.directionSort === true) {
        sort = copyPersons.sort((a, b)=>{return a[field] > b[field] ? 1 : -1});
      }
      else sort = copyPersons.reverse((a, b)=>{return a[field] > b[field] ? 1 : -1});
      this.props.sortData(sort);
      if (this.props.directionSort === true) {
        this.props.setDirectionSort(false)
      }
      else this.props.setDirectionSort(true)
    }

    return (
      <>
      <ButtonUrl setUrl={setUrl}/>
      {this.props.isFetching? <Loader /> : null}
      {this.props.isLoadUrl? 
          <Table 
             sortData={sortingData}
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
  toggleIsFetching,
  setPersons,
  sortData,
  setDirectionSort,
  setField,
  setCurrentPerson,
  loadUrl,
  setCurrentPage,
  pushPerson
})(TableContainer);
