import React from 'react';
import { BrowserRouter, Route, Routes as Switch } from 'react-router-dom';

import Landing from '@/pages/landing';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" element={<Landing />} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
