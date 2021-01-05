import React, { useEffect } from 'react';
//components and pages
import { Home } from './pages/Home';
import GlobalStyles from './components/GlobalStyles';
//react router
import { Route } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <GlobalStyles />
      <Route path={['/games/:id/', '/']}>
        <Home />
      </Route>
    </div>
  );
}

export default App;
