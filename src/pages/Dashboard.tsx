import { useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';

const App = () => {
  const data = useParams();
  console.log('url data', data);
  return (
    <>
      dashboard
      <Outlet />
    </>
  );
};

export default App;
