import React from 'react';

const Activity = (props) => {
    const { handleAddToList, activity } = props
    const { picture, name, time } = props.activity;


    return (
        <div className="card w-64 bg-base-100 shadow-xl">
            <figure className="px-5 pt-5">
                <img src={picture} alt="Shoes" className="rounded-xl h-52 w-96" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{time} minutes</p>
                <div className="card-actions">
                    <button onClick={() => handleAddToList(activity)} className="btn btn-primary">Add to list</button>
                </div>
            </div>
        </div>

    );
};

export default Activity;