import React from 'react';
import { useNavigate } from 'react-router-dom';

function Profiles() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Profiles Page</h1>
      <button
        onClick={() => {
          navigate('/home');
        }}
      >
        go to Home!
      </button>
    </div>
  );
}

export default Profiles;
