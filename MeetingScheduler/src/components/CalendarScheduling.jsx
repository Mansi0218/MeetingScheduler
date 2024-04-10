// components/Calendar.js

import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './custom-style.css';

import MeetingForm from './MeetingForm'


const CalendarScheduling = () => {

  const [date, setDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState('');

  const handleDateChange = date => {
    setDate(date)
    console.log(date);
  }

  const handleTimeChange = event => {
    setSelectedTime(event.target.value);
  }
  
  
 
  return (
    <section className="bg-white rounded-lg shadow-md p-6 flex-col ">
     
      
      <div className=' bg-blue-50 p-4 m-2 flex justify-center items-center flex-col '>
          <img src="https://img.freepik.com/free-vector/business-team-discussing-ideas-startup_74855-4380.jpg?size=626&ext=jpg&uid=R142748379&ga=GA1.2.1347944305.1711273145&semt=sph" alt="image" />

            <div className='  m-10 p-10 text-center flex justify-center items-center '>
              <h2 className='font-bold text-center text-3xl shadow-lg bg-white p-4 text-blue-900'>Book a Meeting with our Meeting Scheduler</h2> 
            </div> 
      </div>

<div className='flex justify-center items-center flex-col   '>
   <div className=' mt-2 pt-4 justify-center items-center  '>
       <Calendar className={`m-2 p-4 shadow-lg sm:w-min`} onChange={handleDateChange} value={date} />  
    </div>

    <div className='mt-4  '>
        <label htmlFor="time">Select Time:</label>
        <select  id="time" onChange={handleTimeChange} value={selectedTime} className="block w-full  border rounded py-2 px-3 mt-1 ">
              <option  value="">Select time...</option>
              <option  value="09:00 AM">09:00 AM</option>
              <option  value="10:00 AM">10:00 AM</option>
              <option  value="11:00 AM">11:00 AM</option>
              <option  value="04:00 PM">04:00 PM</option>
              <option  value="05:00 PM">05:00 PM</option>
              <option  value="06:00 PM">06:00 PM</option>
        </select>
    </div>
</div>
      
{selectedTime &&(
  <MeetingForm selectedDate={date.toDateString()} selectedTime={selectedTime}/>
)}
          
    </section>
  );
}

export default CalendarScheduling;
