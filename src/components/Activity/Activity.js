import React from 'react';
import './Activity.css'

const Activity = (props) => {
    const { handleAddToList, activity } = props
    const { picture, name, time } = props.activity;


    return (
        <div className="card w-64 shadow-xl bg-green-300 border-4 border-indigo-200 border-l-indigo-500">
            <figure className="px-4 pt-5">
                <img src={picture} alt="Shoes" className="rounded-xl h-52 w-96" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title font-bold">{name}</h2>
                <p>Estimated Time: <span className='font-bold text-amber-900'>{time}</span> minutes</p>
                <div className="card-actions mt-2">
                    <button onClick={() => handleAddToList(activity)} className="btn btn-success border-4 border-indigo-200 border-l-indigo-500 hover:bg-green-500">Add to list</button>
                </div>
            </div>
        </div>

    );
};

export default Activity;