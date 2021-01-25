import React from 'react';
import ArrowDown from '../arrow/arrowDown';
import ArrowUp from '../arrow/arrowUp';
import DetailItem from '../DetailItem/DetailItem';
import NewPersonContainer from '../NewPerson/NewPersonContainer';
import PaginationContainer from '../Pagination/PaginationContainer';
import SearchContainer from '../Search/SearchContainer';

const Table = (props) => {
const arrow = props.directionSort ? <ArrowDown/> : <ArrowUp/>;
const sortData = (field)=> {
  props.sortData(field)
  props.setField(field)
}
  return (
    <>
    <NewPersonContainer /> 
    < SearchContainer />
    <table className='table'>
      <tr>
        <th onClick={() => {sortData('id')}}>ID {props.isField === 'id'? arrow : null}</th>
        <th onClick={() => {sortData('firstName')}}>First Name{props.isField === 'firstName'? arrow : null}</th>
        <th onClick={() => {sortData('lastName')}}>Last Name{props.isField === 'lastName'? arrow : null}</th>
        <th onClick={() => {sortData('email')}}>E-mail{props.isField === 'email'? arrow : null}</th>
        <th onClick={() => {sortData('phone')}}>Phone{props.isField === 'phone'? arrow : null}</th>
      </tr>
      {props.currentBlock.map((u) => (
        <tr>
          <td onClick={()=> {props.setCurrentPerson(u);}}>{u.id}</td>
          <td onClick={()=> {props.setCurrentPerson(u);}}>{u.firstName}</td>
          <td onClick={()=> {props.setCurrentPerson(u);}}>{u.lastName}</td>
          <td onClick={()=> {props.setCurrentPerson(u);}}>{u.email}</td> 
          <td onClick={()=> {props.setCurrentPerson(u);}}>{u.phone}</td>
        </tr>
      ))}
    </table>
    <PaginationContainer />
    {props.currentPerson.id === null?
    null : <DetailItem currentPerson={props.currentPerson}/>}
    </>
  );
};

export default Table;
