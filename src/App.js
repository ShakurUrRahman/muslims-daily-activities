import './App.css';
import { useEffect, useState } from 'react';
import Activity from './components/Activity/Activity';
import Details from './components/Details/Details';
import Answers from './components/Answers/Answers';


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
      <div>
        <div className='grid lg:grid-cols-4'>
          <div className='col-span-3 lg:ml-28 mx-16'>
            <h1 className='text-3xl font-bold text-green-800 mb-3 pt-8'>Muslims Daily Activities</h1>
            <h1 className='text-2xl font-bold text-green-500 mb-5'>Select your activities</h1>
            <div className='grid lg:grid-cols-3 gap-3'>
              {
                activities.map(activity => <Activity
                  key={activity.id}
                  activity={activity}
                  handleAddToList={handleAddToList}
                ></Activity>)
              }
            </div>
          </div>
          <div className='col-span-1'>
            <Details
              times={times}
            ></Details>
          </div>
        </div>
        <div>
          <Answers></Answers>
        </div>
      </div>
    )
  }
}

export default App;
