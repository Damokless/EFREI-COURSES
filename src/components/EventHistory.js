import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import fetch from 'node-fetch';

export default function App() {
  const [EventHistory, setEventHistory] = useState([]);
  const [allEvents, setAllEvents] = useState([]);
  const [fetchState, setFetchState] = useState(false);
  // UseEffect to fetch api
  useEffect(() => {
    fetch('https://api.spacexdata.com/v4/history')
      .then((response) => response.json())
      .then((data) => {
        setAllEvents(data);
        setEventHistory(data[Math.floor(Math.random() * data.length)]);
      });
  }, []);
  // fetchState set with onClick to get another random event
  if (fetchState) {
    setEventHistory(allEvents[Math.floor(Math.random() * allEvents.length)]);
    setFetchState(false);
  }
  // function to set the event id in local storage and send a toaster
  function addToFavorite(id, title) {
    let dataStored = localStorage.getItem('EventHistory');
    dataStored = JSON.parse(dataStored);
    if (dataStored == null) {
      dataStored = '';
      localStorage.setItem('EventHistory', JSON.stringify(`${id},`));
      toast.success(`Article ${title} added to favorite`, {
        position: 'bottom-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      });
    }
    dataStored += `${id},`;
    localStorage.setItem('EventHistory', JSON.stringify(dataStored));

    toast.success(`Article ${title} added to favorite`, {
      position: 'bottom-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    });
  }
  // check if event has article link before render to render a button or not
  if (!EventHistory.links || !EventHistory.links.article) {
    return (
      <div className="flex items-center justify-center">
        <div className="bg-white/60 bg-clip-padding navBackground p-8 w-1/2 rounded-lg">
          <h2 className="font-bold text-2xl mt-2">
            {EventHistory.title}
          </h2>
          <h3 className="font-bold text-xl mt-8"> Description </h3>
          <p className="font-light">
            {EventHistory.details}
          </p>
          <button type="button" onClick={() => setFetchState(true)} className=" border-2 border-black hover:bg-black hover:text-white font-semibold py-2 px-5 text-sm mt-6 ml-6 inline-flex items-center group rounded-md">
            More event
          </button>
          <button type="button" onClick={() => addToFavorite(EventHistory.id, EventHistory.title)} className=" border-2 border-black hover:bg-black hover:text-white font-semibold py-2 px-5 text-sm mt-6 ml-6 inline-flex items-center group rounded-md">
            add to favorite
          </button>
        </div>
        <ToastContainer />
      </div>
    );
  }
  return (
    <div className="flex items-center justify-center">
      <div className="bg-white/60 bg-clip-padding navBackground p-8 w-1/2 rounded-lg">
        <h2 className="font-bold text-2xl mt-2">
          {EventHistory.title}
        </h2>
        <h3 className="font-bold text-xl mt-8"> Description </h3>
        <p className="font-light">
          {EventHistory.details}
        </p>
        <a href={EventHistory.links.article} target="_blank" rel="noreferrer">
          <button type="button" className=" border-2 border-black hover:bg-black hover:text-white font-semibold py-2 px-5 text-sm mt-6 ml-6 inline-flex items-center group rounded-md">
            Read this article
          </button>
        </a>
        <button type="button" onClick={() => setFetchState(true)} className=" border-2 border-black hover:bg-black hover:text-white font-semibold py-2 px-5 text-sm mt-6 ml-6 inline-flex items-center group rounded-md">
          More event
        </button>
        <button type="button" onClick={() => addToFavorite(EventHistory.id, EventHistory.title)} className=" border-2 border-black hover:bg-black hover:text-white font-semibold py-2 px-5 text-sm mt-6 ml-6 inline-flex items-center group rounded-md">
          add to favorite
        </button>
      </div>
      <ToastContainer />
    </div>
  );
}
