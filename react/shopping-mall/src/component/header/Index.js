import React from 'react';
import { Link } from 'react-router-dom';

function Index() {
  return (
    <div className="header">
      <div className="inner">
        <Link to="/">Shopping Mall</Link>
        <Link to="/cart">Cart</Link>
      </div>
    </div>
  );
}

export default Index;
