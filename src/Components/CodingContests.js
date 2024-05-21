import React, { useState } from 'react';
import './Card.css'; // Assuming you have your CSS file for card styling
import contests from '../Data';

const CodingContests = () => {
    const [showDetails, setShowDetails] = useState(Array(contests.length).fill(false));
    const [currentPage, setCurrentPage] = useState(0);
    const contestsPerPage = 8;

    const toggleDetails = (index) => {
        setShowDetails(prevState=>{
            const newState = [...prevState];
            newState[index]=!newState[index];
            return newState;
        }

        );
    };

    const toggleShowMore = () => {
        setCurrentPage(prev => prev + 1);
    };

    const hideExtraCards = () => {
        setCurrentPage(prev=> Math.max(prev-1),0);
    };

    const startIndex = currentPage * contestsPerPage;
    const endIndex = startIndex + contestsPerPage;

    return (
        <div className="coding-contests-container">
            <h1 className="contests-heading">Contests</h1>
            <div className='card-container'>
                {contests.slice(startIndex, endIndex).map((data,index) => (
                    <div key={data.id} className='card'>
                        <img src={data.imageUrl} alt={data.title} className='card-image' />
                        <h4>{data.title}</h4>
                        <div className='tags'>
                            {data.tags.map((tag, index) => (
                                <span key={index} className='tag'>{tag}</span>
                            ))}
                        </div>
                        <div className='dates'>
                            <span className='start'>Starts From : {data.startDate}</span><br />
                            <span className='end'>Ends In : {data.endDate}</span>
                        </div>
                        {showDetails[startIndex + index] && (
                            <>
                                <p>{data.description}</p>
                                <p className='requirements'>{data.requirements}</p>
                            </>
                        )}
                        <button onClick={()=>toggleDetails(startIndex+index)} className="details-button">
                            {showDetails[startIndex + index] ? 'Hide Details' : 'Show Details'}
                        </button>
                    </div>
                ))}
            </div>
            <div className="button-container">
                {currentPage > 0 && (
                    <button onClick={hideExtraCards} className="hide-button">Previous</button>
                )}
                {endIndex < contests.length && (
                    <button onClick={toggleShowMore} className="view-more-button">Next</button>
                )}
            </div>
        </div>
    );
};

export default CodingContests;
