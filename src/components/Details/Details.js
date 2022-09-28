import React from 'react';

const Details = (props) => {
    const { times } = props;
    console.log(times);

    let totalTimes = 0;

    for (const time of times) {
        totalTimes = totalTimes + time.time;
    }

    return (
        <div className='lg:sticky lg:top-0 p-10'>
            <div className='flex font-serif font-bold items-center justify-between mx-2 mb-3'>
                <div>
                    <img className='w-10 h-9 rounded-full' src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Shaqi_jrvej.jpg/1200px-Shaqi_jrvej.jpg' alt="" srcset="" />
                </div>
                <div>
                    <h1>Shakurur Rahman</h1>
                    <p>Dhaka, Bangladesh</p>
                </div>
            </div>

            <div className='flex font-bold items-center justify-between my-8'>
                <div>
                    <h1>55</h1>
                    <h1>Weight</h1>
                </div>
                <div>
                    <h1>5.5</h1>
                    <h1>Height</h1>
                </div>
                <div>
                    <h1>33</h1>
                    <h1>Age</h1>
                </div>
            </div>

            <div className='my-3'>
                <h1>Add a break</h1>
                <button className='btn btn-warning mr-2'>10</button>
                <button className='btn btn-warning mr-2'>20</button>
                <button className='btn btn-warning mr-2'>30</button>
                <button className='btn btn-warning mr-2'>40</button>
            </div>

            <h1 className='my-3'>Activity Details</h1>
            <div className='bg-green-300 p-3'>
                <h1>Activity Time {totalTimes}</h1>
            </div>
            <div className='bg-green-300 p-3 my-2'>
                <h1>Break Time </h1>
            </div>
        </div>
    );
};

export default Details;