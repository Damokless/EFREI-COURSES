import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function FavoriteEventHistory() {
  const [allFavoriteEvents, setAllFavoriteEvents] = useState([]);
  const [totalFavoriteEvents, setTotalFavoriteEvents] = useState(0);
  // useEffect to fetch data in localstorage to get favorite ID event
  // and fetch spaceX api with specific ID
  useEffect(() => {
    let eventhistory = localStorage.getItem('EventHistory');
    eventhistory = JSON.parse(eventhistory);
    if (eventhistory == null) {
      eventhistory = '';
      localStorage.setItem('EventHistory', JSON.stringify(''));
    }
    const arrayEvents = eventhistory.split(',').filter((element) => element !== null && element !== undefined && element !== '');
    setTotalFavoriteEvents(arrayEvents.length);
    async function fetchApi(id) {
      let response = await fetch(`https://api.spacexdata.com/v4/history/${id}`);
      response = await response.json();
      setAllFavoriteEvents((oldEvents) => [...oldEvents, response]);
    }
    arrayEvents.forEach((element) => {
      fetchApi(element);
    });
  }, []);
  // function to delete item with specific ID
  function deleteLocalStorage(id, title) {
    const data = localStorage.getItem('EventHistory').replace(id, '');
    localStorage.setItem('EventHistory', data);
    toast.success(`Article ${title} delete from favorite`, {
      position: 'bottom-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    });
    window.location.reload(false);
  }
  // clear all local storage
  function clearLocalStorage() {
    localStorage.clear();
    toast.success('LocalStorage cleared', {
      position: 'bottom-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    });
  }

  if (allFavoriteEvents.length >= totalFavoriteEvents) {
    return (
      <div>
        {allFavoriteEvents.map((event) => (
          <div className="flex items-center justify-center mb-6">
            <card className="bg-white/60 bg-clip-padding navBackground p-8 w-1/2 rounded-lg">
              <h2 className="font-bold text-2xl mt-2">
                {event.title}
              </h2>
              <h3 className="font-bold text-xl mt-8"> Description </h3>
              <p className="font-light">
                {event.details}
              </p>
              <button type="submit" onClick={() => deleteLocalStorage(`${event.id},`, event.title)} className=" border-2 border-black hover:bg-black hover:text-white font-semibold py-2 px-5 text-sm mt-6 ml-6 inline-flex items-center group rounded-md">
                delete
              </button>
            </card>
          </div>
        ))}
        <ToastContainer />
        <button type="submit" onClick={() => clearLocalStorage()} className=" border-2 border-white text-white hover:bg-black hover:text-white hover:border-black font-semibold py-2 px-5 text-sm mt-6 ml-6 inline-flex items-center group rounded-md">
          delete all favorite
        </button>
      </div>
    );
  }
  return (
    <p>loading</p>
  );
}

export default FavoriteEventHistory;
