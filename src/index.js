import React from 'react';
import { Routes, Route } from 'react-router-dom';

import ExpanseTracker from './components/ExpanseTracker';

export default () => {
  return (
    <div>
      <Routes path="/">
        <Route path="/" element={<ExpanseTracker />} />
      </Routes>
    </div>
  );
};
