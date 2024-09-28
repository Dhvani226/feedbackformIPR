import React from 'react';
import FeedbackForm from './components/FeedbackForm'; // Ensure the path matches your directory structure

function App() {
  return (
    <div className="App container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">National Science Day Feedback Form</h1>
      <FeedbackForm /> {/* Render the FeedbackForm component */}
    </div>
  );  
}

export default App;
