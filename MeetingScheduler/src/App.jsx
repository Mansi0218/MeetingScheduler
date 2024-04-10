// App.js
import React from 'react';
import Header from './components/Header';
import CalendarScheduling from './components/CalendarScheduling';

import Scheduled from './components/Scheduled';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <main className="container mx-auto py-8">
         <CalendarScheduling />
      </main>
      <Footer />
    </div>
  );
}

export default App;
