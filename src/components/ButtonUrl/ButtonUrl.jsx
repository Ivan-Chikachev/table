import React from 'react';

const ButtonUrl = (props) => {
    return (
        <div className="buttons">
            <button
                className='btn-data small btn'
                onClick={() => {
                    props.setUrl('small')}}>
                32
            </button>
            <button
                className='btn-data big btn'
                onClick={() => {
                    props.setUrl('big')}}>
                1000
            </button>
        </div>
    );
};

export default ButtonUrl;
