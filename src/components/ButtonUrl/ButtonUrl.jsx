import React from 'react';

const ButtonUrl = (props) => {
    return (
        <div className="buttons">
            <button
                className='btn-data small'
                onClick={() => {
                    props.setUrl('small')}}>
                32
            </button>
            <button
                className='btn-data big'
                onClick={() => {
                    props.setUrl('big')}}>
                1000
            </button>
        </div>
    );
};

export default ButtonUrl;
