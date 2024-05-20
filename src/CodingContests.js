import React, { useState } from 'react';
import './Card.css'; // Assuming you have your CSS file for card styling
import contests from './Data';

const CodingContests = () => {
    const [showDetails, setShowDetails] = useState(false);
    const [numCardsToShow, setNumCardsToShow] = useState(8);

    const toggle = () => {
        setShowDetails(!showDetails);
    };

    const toggleShowMore = () => {
        setNumCardsToShow(prev => prev + 4);
    };
    const hideExtraCards = () => {
        setNumCardsToShow(8);
    };

    return (
        <div className="coding-contests-container">
            <h1 className="contests-heading">Contests</h1>
            <div className='card-container'>
                {contests.slice(0, numCardsToShow).map(data => (
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
                        {showDetails && (<><p>{data.description}</p>
                            <p className='requirements'>{data.requirements}</p></>)}
                        <button onClick={toggle} className="details-button">
                            {showDetails ? 'Hide Details' : 'Show Details'}
                        </button>
                    </div>
                ))}
            </div>
            <div className="button-container">
                {numCardsToShow < contests.length && (
                    <button onClick={toggleShowMore} className="view-more-button">View More</button>
                )}
                {numCardsToShow > 8 && (
                    <button onClick={hideExtraCards} className="hide-button">Hide Extra Contests</button>
                )}
            </div>
        </div>
    );
};

export default CodingContests;
