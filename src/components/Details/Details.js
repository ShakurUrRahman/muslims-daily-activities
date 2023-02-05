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

    const [items, setItems] = useState(0);

    const setIBreakTime = (t) => {
        localStorage.setItem('items', t);
        console.log(items);
        setItems(t);
    }

    useEffect(() => {
        const items = localStorage.getItem('items');
        if (items) {
            setItems(items);
        }
    }, []);




    // Toast
    const myToast = () => {
        toast.success("Alhumdulillah, You have completed your daily activities!", {
            position: "top-center"
        });
    }

    return (
        <div className='lg:sticky lg:top-0 lg:p-8 lg:mt-0 mt-5 ml-4 px-8 py-5 border-4 border-indigo-200 border-l-indigo-500 bg-lime-100'>
            <div className='flex items-center justify-between mx-2 mb-3'>
                <div>
                    <img className='w-10 h-9 rounded-full' src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Shaqi_jrvej.jpg/1200px-Shaqi_jrvej.jpg' alt="" />
                </div>
                <div className='font-serif font-bold text-amber-900'>
                    <h1>Shakurur Rahman</h1>
                    <p>Dhaka, Bangladesh</p>
                </div>
            </div>

            <div className='border-4 border-indigo-200 border-l-indigo-500 flex font-bold items-center justify-between my-8 bg-green-300 p-3 rounded-lg'>
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

            <div className='mb-3'>
                <h1 className='font-bold text-2xl font-serif text-amber-900'>Add A Break</h1>
                <div className='border-4 border-indigo-200 border-l-indigo-500 mt-5 lg:p-2 p-3 flex lg:gap-1 gap-2 bg-green-300  rounded-lg'>
                    <button onClick={() => setIBreakTime(10)} className='btn btn-success hover:bg-green-500 border-1 border-indigo-200 border-l-indigo-500'>10</button>
                    <button onClick={() => setIBreakTime(20)} className='btn btn-success hover:bg-green-500 border-1 border-indigo-200 border-l-indigo-500'>20</button>
                    <button onClick={() => setIBreakTime(30)} className='btn btn-success hover:bg-green-500 border-1 border-indigo-200 border-l-indigo-500'>30</button>
                    <button onClick={() => setIBreakTime(40)} className='btn btn-success hover:bg-green-500 border-1 border-indigo-200 border-l-indigo-500'>40</button>
                </div>
            </div>

            <h1 className='mt-5 font-bold text-2xl font-serif text-amber-900'>Activity Details</h1>
            <div className='bg-green-300 p-1 rounded-lg border-4 border-indigo-200 border-l-indigo-500 my-4'>
                <h1 className='font-bold text-center text-lg '>Activity Time <span className='text-green-700 font-extrabold text-2xl'>{totalTimes}</span> minutes</h1>
            </div>
            <div className='bg-green-300 p-2 my-2 rounded-lg border-4 border-indigo-200 border-l-indigo-500'>
                <h1 className='font-bold text-center text-lg'>Break Time <span className='text-green-700 font-extrabold text-2xl'>{items}</span> minutes</h1>
            </div>
            <div>
                <button onClick={myToast} className='btn btn-success lg:mx-6 mx-12 my-3 font-bold hover:bg-green-500 border-4 border-indigo-200 border-l-indigo-500'>Activity Completed</button>
                <ToastContainer />
            </div>
        </div>
    )
}
export default Details;