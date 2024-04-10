import React from 'react';

const Scheduled = ({ selectedDate, selectedTime, description }) => {
  return (
    <section className="bg-white rounded-lg p-6 shadow-lg flex flex-col  justify-center items-center">
      <div>
        <h2 className="text-xl font-semibold mb-4">Scheduled {selectedTime} - {selectedDate}</h2>
      </div>
      
      <div className=' flex flex-col justify-center items-center'> 
        <strong>Description:</strong>
        <p>{description}</p>
      </div>
    </section>
  );
}

export default Scheduled;
