import React from 'react';

const SelectBox = ({ key, data }) => {
    return(
        <div key={key} className='option'>{data.text}</div>
    )
}

export default SelectBox;