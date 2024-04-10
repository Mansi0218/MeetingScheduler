// components/MeetingForm.js
import React, { useState } from 'react';
import Scheduled from './Scheduled';

const MeetingForm = ({selectedDate, selectedTime}) => {

  const [description, setDescription] = useState("")
  const [showScheduled, setShowScheduled] = useState(false);

  console.log(selectedDate);
  console.log(selectedTime);

  const handleDescriptionChange = event => {
    setDescription(event.target.value);
    console.log(event);
  }

   const handleSubmit = event => {
    event.preventDefault();
    setShowScheduled(true);
  };

 
  return (
    <section className="bg-white rounded-lg  p-6 mb-8 md:flex-col">
      
      {!showScheduled &&
       <form onSubmit={handleSubmit} >
        {/* Form inputs */}
        <div className="mb-4">
          <label htmlFor="date" className="block text-gray-700 font-bold mb-2">Date</label>
          <input type="text" id="date" placeholder={selectedDate} readOnly  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div className="mb-4">
          <label htmlFor="time" className="block text-gray-700 font-bold mb-2">Time</label>
          <input type="text" id="time" placeholder={selectedTime} readOnly  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-gray-700 font-bold mb-2">Description</label>
          <textarea id="description"  value={description} onChange={handleDescriptionChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></textarea>
        </div>
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Schedule Event</button>
      </form>
      }
      {showScheduled && (
        <Scheduled
          selectedDate={selectedDate}
          selectedTime={selectedTime}
          description={description}
        />
      )}

    </section>
  );
}

export default MeetingForm;
