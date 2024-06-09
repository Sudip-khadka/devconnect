import React, { useEffect, useState } from 'react';
import './Card.css'; // Assuming you have your CSS file for card styling
import localContests from '../Data';

const CodingContests = () => {
    const [hackerData, setHackerData] = useState([]);
    const [showDetails, setShowDetails] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const contestsPerPage = 6;

    useEffect(() => {
        const fetchContests = async () => {
            try {
                const url = 'https://codeforces.com/api/contest.list';
                const response = await fetch(url);
                const parsedData = await response.json();
                setHackerData(parsedData.result); // Assuming `parsedData.result` contains the array of contests
                setShowDetails(Array(parsedData.result.length).fill(false));
            } catch (error) {
                console.error('Error fetching contests:', error);
            }
        };

        fetchContests();
    }, []);

    const toggleDetails = (index) => {
        setShowDetails(prevState => {
            const newState = [...prevState];
            newState[index] = !newState[index];
            return newState;
        });
    };

    const toggleShowMore = () => {
        setCurrentPage(prev => prev + 1);
    };

    const hideExtraCards = () => {
        setCurrentPage(prev => Math.max(prev - 1, 0));
    };

    const startIndex = currentPage * contestsPerPage;
    const endIndex = startIndex + contestsPerPage;

    return (
        <div className="coding-contests-container">
            <div className="contests-column">
                <h1 className="contests-heading">Contests In This Platform</h1>
                <div className='card-container'>
                    {localContests.slice(startIndex, endIndex).map((data, index) => (
                        <div key={data.id} className='card'>
                            <img src={data.imageUrl} alt={data.title} className='card-image' />
                            <h4>{data.title}</h4>
                            <div className='tags'>
                                {data.tags.map((tag, tagIndex) => (
                                    <span key={tagIndex} className='tag'>{tag}</span>
                                ))}
                            </div>
                            <div className='dates'>
                                <span className='start'>Starts From: {data.startDate}</span><br />
                                <span className='end'>Ends In: {data.endDate}</span>
                            </div>
                            {showDetails[startIndex + index] && (
                                <>
                                    <p>{data.description}</p>
                                    <p className='requirements'>{data.requirements}</p>
                                </>
                            )}
                            <button onClick={() => toggleDetails(startIndex + index)} className="details-button">
                                {showDetails[startIndex + index] ? 'Hide Details' : 'Show Details'}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
            <div className="hacker-rank-column">
                <h1 className="contests-heading">Codeforces</h1>
                <div className='card-container-right'>
                    {hackerData.slice(startIndex, startIndex + 3).map((data, index) => (
                        <div key={data.id} className='card'>
                            <h4>{data.name}</h4>
                            <div className='dates'>
                                <span className='start'>Starts From: {new Date(data.startTimeSeconds * 1000).toLocaleString()}</span><br />
                                <p>Type: {data.type}</p>
                                <p>Phase: {data.phase}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="button-container">
                {currentPage > 0 && (
                    <button onClick={hideExtraCards} className="hide-button">Previous</button>
                )}
                {endIndex < Math.max(localContests.length, hackerData.length) && (
                    <button onClick={toggleShowMore} className="view-more-button">Next</button>
                )}
            </div>
        </div>
    );
};

export default CodingContests;
