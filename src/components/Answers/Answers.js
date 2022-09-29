import React from 'react';

const Answers = () => {
    return (
        <div className='mx-10 mt-10 bg-green-100 border-4 border-indigo-200 border-l-indigo-500'>
            <h2 className='text-center font-bold text-4xl px-2 pt-8'>Questions and Answers</h2>
            <div className='lg:p-5 m-5 lg:text-2xl'>
                <h4 className='mb-2 font-bold text-green-900'>Q1. How does react work?</h4>
                <h4 className=''>A1. A React application is made of multiple components, each responsible for rendering a small, reusable piece of HTML. Components can be nested within other components to allow complex applications to be built out of simple building blocks. A component may also maintain an internal state - for example, a TabList component may store a variable corresponding to the currently open tab.</h4>
            </div>
            <div className='lg:p-5 m-5 lg:text-2xl'>
                <h4 className='mb-2 font-bold text-green-900'>Q2. What is the difference between props and state?</h4>
                <h4>A2. State is the local state of the component which cannot be accessed and modified outside of the component. It's equivalent to local variables in a function. Props, on the other hand, make components reusable by giving components the ability to receive data from their parent component in the form of props.</h4>
            </div>
            <div className='lg:p-5 m-5  lg:text-2xl'>
                <h4 className='mb-2 font-bold text-green-900'>Q3. Without data loading What is the uses of useEffect?</h4>
                <h4 className='mb-5'>A3. State is the local state of the component which cannot be accessed and modified outside of the component. It's equivalent to local variables in a function. Props, on the other hand, make components reusable by giving components the ability to receive data from their parent component in the form of props.</h4>
            </div>

        </div>
    )
};

export default Answers;