import './App.css';
import { useEffect, useState } from 'react';
import Activity from './components/Activity/Activity';
import Details from './components/Details/Details';

function App() {
  return (
    <div className="App">
      <LoadActivities></LoadActivities>
    </div>
  );

  function LoadActivities() {
    const [activities, setActivities] = useState([]);
    const [times, setTimes] = useState([])

    useEffect(() => {
      fetch('activities.json')
        .then(res => res.json())
        .then(data => setActivities(data))
    }, [])

    const handleAddToList = (activity) => {
      // console.log(activity);
      const newTimes = [...times, activity];
      setTimes(newTimes);
    }

    return (
      <div className='grid lg:grid-cols-4'>
        <div className='col-span-3 ml-28 my-20'>
          <h1 className='text-3xl font-bold text-green-800 mb-3'>Muslims Daily Activities</h1>
          <h1 className='text-2xl font-bold text-green-500 mb-5'>Select your activities</h1>
          <div className='grid lg:grid-cols-3 gap-2'>
            {
              activities.map(activity => <Activity
                key={activity.id}
                activity={activity}
                handleAddToList={handleAddToList}
              ></Activity>)
            }
          </div>
        </div>
        <div className='lg:col-span-1 bg-lime-100'>
          <Details
            times={times}
          ></Details>
        </div>
      </div>
    )
  }
}

export default App;
