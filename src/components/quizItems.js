import React, { useState } from 'react';
import SelectBox from './selectbox';

const questionData = (data) => {
    return (
        <>
            {data.map((d) => (
                <div key={d.id} className='question-wrapper'>
                    {d.text.replace(/<\/?[^>]+(>|$)/g, '')}
                </div>
            ))}
        </>
    )
}

// const answerData = (data) => {
//     const [toggle, setToggle] = useState(false);
//     // option-selected

//     let queAnswers = [];
//     for (let i = 0, len = data.length; i < len; i++){
//         queAnswers.push(data[i].answers)
//     }
    
//     return(
//         <div className='select'>
//             {queAnswers[0].map(d => (
//                 <div key={d.id} className='option'>{d.text.replace(/<\/?[^>]+(>|$)/g, '')}</div>
//             ))}
//         </div>
//     )
// }


const QuizItems = (props) => {
    const { currentPage, maxPageLimit, minPageLimit} = props;
    const totalPages = props.response.totalPages-1;
    const data = props.response.data;

    const pages = [];
    for(let i=1 ; i<=totalPages; i++){
        pages.push(i);
    }

    const handlePrevClick = ()=>{
        props.onPrevClick();
    }

    const handleNextClick = ()=>{
        props.onNextClick();
    }

    const handlePageClick = (e)=>{
        props.onPageChange(Number(e.target.id));
    }


    return (
        <>
        <div className='pagination-header'>
            <div className='main-pagi'>
                <span className='main-pagi-item main-pagi-item-active'>1</span>
                <span className='main-pagi-item'>2</span>
                <span className='main-pagi-item'>3</span>
            </div>
            <div className='time-count'>19:24</div>
        </div>
        {questionData(data)}
        <div className='desc-wrapper'>
            Choose the right answer to the question above
        </div>
        <div className='main-content'>
            <div className="left-side">
                <h2 className="story-title">The story of Ananse</h2>
                <p className="lore-text">Meta is proud to be an Equal Employment Opportunity and Affirmative Action employer. We do not discriminate based upon race, religion, color, 
                national origin, sex (including pregnancy, childbirth, reproductive health decisions, or related medical conditions), sexual orientation, gender identity, gender expression, age, 
                status as a protected veteran, status as an individual with a disability, genetic information, political views or activity, or other applicable legally protected characteristics.</p>
            </div>
            <div className='right-side'>
                <SelectBox {...data} />
                <div className='btn-wrap'>
                    <button onClick={handlePrevClick} className='btn-previous'>Previous</button>
                    <button onClick={handleNextClick} className='btn-next'>Next</button>
                </div>
            </div>
        </div>
        </>
    )
}

export default QuizItems;