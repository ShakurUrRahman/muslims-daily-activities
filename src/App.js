import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Activity from './components/Activity/Activity';

function App() {
  return (
    <div className="App">
      <LoadActivities></LoadActivities>
    </div>
  );

  function LoadActivities() {
    const [activities, setActivities] = useState([]);
    const [time, setTime] = useState([])

    useEffect(() => {
      fetch('activities.json')
        .then(res => res.json())
        .then(data => setActivities(data))
    }, [])




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
              ></Activity>)
            }
          </div>
        </div>
        <div className='col-span-1'>
          <h1>Details</h1>
        </div>
      </div>
    )
  }
}

export default App;
