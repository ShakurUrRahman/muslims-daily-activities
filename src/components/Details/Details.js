import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Details.css'

const Details = (props) => {
    const { times } = props;
    console.log(times);

    let totalTimes = 0;
    for (const time of times) {
        totalTimes = totalTimes + time.time;
    }

    // Setting break time
    let [breaks, setBreaks] = useState(0);

    const setBreakTime = (time) => {
        setBreaks(time)
        localStorage.setItem('break-time', time)
    }

    const storedBreakTime = () => {
        const storedTime = localStorage.getItem('break-time');
        return storedTime;
    }

    const result = storedBreakTime();
    // useEffect(() => {
    //     const storedTime = localStorage.getItem('break-time');
    //     console.log(storedTime);
    // }, [breaks])



    const myToast = () => {
        toast.success("You have completed your daily activities!", {
            position: "top-center"
        });
    }

    return (
        <div className='lg:sticky lg:top-0 p-8 border-4 border-indigo-200 border-l-indigo-500 bg-lime-100'>
            <div className='flex items-center justify-between mx-2 mb-3'>
                <div>
                    <img className='w-10 h-9 rounded-full' src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Shaqi_jrvej.jpg/1200px-Shaqi_jrvej.jpg' alt="" />
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
                    <button onClick={() => setBreakTime(10)} className='btn btn-warning mr-2'>10</button>
                    <button onClick={() => setBreakTime(20)} className='btn btn-warning mr-2'>20</button>
                    <button onClick={() => setBreakTime(30)} className='btn btn-warning mr-2'>30</button>
                    <button onClick={() => setBreakTime(40)} className='btn btn-warning mr-2'>40</button>
                </div>
            </div>

            <h1 className='my-3'>Activity Details</h1>
            <div className='bg-green-300 p-3'>
                <h1>Activity Time {totalTimes}</h1>
            </div>
            <div className='bg-green-300 p-3 my-2'>
                <h1>Break Time {result} minutes</h1>
            </div>
            <div>
                <button onClick={myToast} className='btn btn-warning mx-8 my-3'>Activity Completed</button>
                <ToastContainer />
            </div>
        </div>
    )
}
export default Details;