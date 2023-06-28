import React, { useEffect, useState } from 'react';
import './Loadingscreen.css'; // Update the CSS file name here

const Loadingscreen = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3200); // Simulating a 3-second loading time

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`loading-screen ${loading ? 'show' : 'hide'}`}>
      <div className="loading-animation">
        <div className="code-typing">
          {/* eslint-disable-next-line */}
          <code>Print("welocome! to My Portfolio")</code>
          {/* eslint-disable-next-line */}
          <code>var my_name="Lahiru pramuditha"</code>
          {/* eslint-disable-next-line */}
          <code>Print("Have a good day!")</code>
        </div>
        <div className="welcome-screen">
          <h1 className="loading-title">Welcome!</h1>
        </div>
      </div>
    </div>
  );
};

export default Loadingscreen;
