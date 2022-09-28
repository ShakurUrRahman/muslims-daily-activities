import React, { useState } from 'react';

const Details = (props) => {
    const { times } = props;
    console.log(times);

    let totalTimes = 0;

    for (const time of times) {
        totalTimes = totalTimes + time.time;
    }

    const [ten, setTen] = useState(0);
    const [twenty, setTwenty] = useState(0);
    const [thirty, setThirty] = useState(0);
    const [forty, setForty] = useState(0);

    const clickTen = () => {
        const showTen = ten + 10;
        setTen(showTen);
    }
    const clickTwenty = () => {
        const showTwenty = twenty + 20;
        setTwenty(showTwenty);
    }
    const clickThirty = () => {
        const showThirty = thirty + 30;
        setThirty(showThirty);
    }
    const clickForty = () => {
        const showForty = forty + 40;
        setForty(showForty);
    }

    return (
        <div className='lg:sticky lg:top-0 p-10'>
            <div className='flex items-center justify-between mx-2 mb-3'>
                <div>
                    <img className='w-10 h-9 rounded-full' src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Shaqi_jrvej.jpg/1200px-Shaqi_jrvej.jpg' alt="" srcset="" />
                </div>
                <div className='font-serif font-bold text-amber-900'>
                    <h1>Shakurur Rahman</h1>
                    <p>Dhaka, Bangladesh</p>
                </div>
            </div>

            <div className='flex font-bold items-center justify-between my-8 bg-green-300 p-5 rounded-lg'>
                <div>
                    <h1 className='text-3xl text-green-900'>55<span className='text-green-600 text-base font-normal'>kg</span></h1>
                    <h1 className='text-green-600 font-normal'>Weight</h1>
                </div>
                <div>
                    <div>
                        <h1 className='text-3xl'>5.5</h1>
                        <h1 className='text-green-600 font-normal'>Height</h1>
                    </div>
                </div>
                <div>
                    <div>
                        <h1 className='text-3xl'>33<span className='text-green-600 text-base font-normal'>yrs</span></h1>
                        <h1 className='text-green-600 font-normal'>Age</h1>
                    </div>
                </div>
            </div>

            <div className=''>
                <h1 className='font-bold text-2xl from-neutral-focus'>Add A Break</h1>
                <div className='my-5'>
                    <button onClick={clickTen} className='btn btn-warning mr-2'>10</button>
                    <button onClick={clickTwenty} className='btn btn-warning mr-2'>20</button>
                    <button onClick={clickThirty} className='btn btn-warning mr-2'>30</button>
                    <button onClick={clickForty} className='btn btn-warning mr-2'>40</button>
                </div>
            </div>

            <h1 className='my-3'>Activity Details</h1>
            <div className='bg-green-300 p-3'>
                <h1>Activity Time {totalTimes}</h1>
            </div>
            <div className='bg-green-300 p-3 my-2'>
                <h1>Break Time {ten || twenty || thirty || forty}</h1>
            </div>
        </div>
    );
};

export default Details;