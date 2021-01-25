import React from 'react';
import { connect } from 'react-redux';
import { setNewPerson } from '../../redux/newPerson-reducer';
import { pushPerson } from '../../redux/table-reducer';
import NewPerson from './NewPerson';

class NewPersonContainer extends React.Component {
	componentDidMount() {}
	render() {
        return (
            <>
        		<NewPerson person={this.props.newCurrentPerson}
				setNewPerson={this.props.setNewPerson}
				addPerson={this.props.addPerson}
				pushPerson={this.props.pushPerson}/>
            </>
        )
	}
}
const mapStateToProps = (state) => ({
	newCurrentPerson: state.newPerson.newCurrentPerson,
});
export default connect(mapStateToProps, {
	pushPerson,
	setNewPerson
})(NewPersonContainer);
