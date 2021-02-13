import React from 'react';
import {Field, reduxForm} from "redux-form";

const NewPerson = (props) => {
    let person
    const push = (values) => {
        person = {
            id: values.id, firstName: values.firstName,
            lastName: values.lastName, email: values.email,
            phone: values.phone, address: {city: ''}
        };
        props.pushPerson(person);
        values.id = values.firstName = values.lastName = values.phone = values.email = undefined
    };
    const addPerson = (values) => {
        debugger
        if (values.id === undefined ||
            values.firstName === undefined ||
            values.lastName === undefined) {
            return
        } else push(values);
    };
    return (
        <div className='new-person'>
            <NewPersonReduxForm onSubmit={addPerson}/>
        </div>
    );
};

const NewPersonForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field
                component={'input'}
                name={'id'}
                type="text"
                placeholder='Id..'
            />
            <Field
                component={'input'}
                name={'firstName'}
                type="text"
                placeholder='Firstname..'
            />
            <Field
                component={'input'}
                name={'lastName'}
                type="text"
                placeholder='Lastname..'
            />
            <Field
                component={'input'}
                name={'email'}
                type="text"
                placeholder='E-mail..'
            />
            <Field
                component={'input'}
                name={'phone'}
                type="text"
                placeholder='Phone..'
            />
            <button className="btn">Ок</button>
        </form>
    )
}
const NewPersonReduxForm = reduxForm({form: 'addNewMassage'})(NewPersonForm)
export default NewPerson;
