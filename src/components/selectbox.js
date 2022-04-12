import React, {useState} from 'react';

const SelectBox = (data) => {
    const [selectedColor, setSelectedColor] = useState(0);
    const changeColor = () => setSelectedColor(selectedColor + 1)

    console.log(data[0].answers)
    return(
        <div className='select'>
            {data[0].answers.map((d, i) => (
                <div 
                  onClick={changeColor} 
                  key={i} 
                  className={selectedColor === i ? 'option-selected' : 'option' }>{d.text.replace(/<\/?[^>]+(>|$)/g, '')}</div>
            ))}
        </div>
    )
}

export default SelectBox;