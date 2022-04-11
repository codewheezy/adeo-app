import React, { useEffect, useState } from 'react';
import QuizItems from '../components/quizItems';

const Quiz = () => {
    const pageNumberLimit = 5;
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [maxPageLimit, setMaxPageLimit] = useState(1);
    const [minPageLimit, setMinPageLimit] = useState(0);

    useEffect(()=>{
        setLoading(true);
        fetch(`https://adeo.app/api/questions/get?level_id=${currentPage}&course_id=1&limit=1`)
        .then((response) => response.json())
        .then((json) => { setData(json); setLoading(false);});
        
    },[currentPage]);

    const onPageChange= (pageNumber)=>{
        setCurrentPage(pageNumber);
    }
    
    const onPrevClick = ()=>{
        if((currentPage-1) % pageNumberLimit === 0){
            setMaxPageLimit(maxPageLimit - pageNumberLimit);
            setMinPageLimit(minPageLimit - pageNumberLimit);
        }
        setCurrentPage(prev=> prev-1);
    }
      
    const onNextClick = ()=>{
        if(currentPage+1 > maxPageLimit){
            setMaxPageLimit(maxPageLimit + pageNumberLimit);
            setMinPageLimit(minPageLimit + pageNumberLimit);
        }
        setCurrentPage(prev=>prev+1);
    }
    
    const paginationAttributes = {
        currentPage,
        maxPageLimit,
        minPageLimit,
        response: data,
    };

    return (
        <>
        {!loading ? (
            <>
                <QuizItems 
                    {...paginationAttributes}
                    onPrevClick={onPrevClick} 
                    onNextClick={onNextClick}
                    onPageChange={onPageChange} 
                />
            </>
        ): (
            <div> Loading.... </div>
        )}
        </>
    )
}

export default Quiz;