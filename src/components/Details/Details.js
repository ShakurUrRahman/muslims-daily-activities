import React from 'react';

const Details = ({ times }) => {
    return (
        <div className='sticky top-0'>
            <h2>My Details are here: {times.length}</h2>
        </div>
    );
};

export default Details;