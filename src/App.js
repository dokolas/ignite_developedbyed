import React, { useEffect } from "react";
//components and pages
import { Home } from "./pages/Home";
import Nav from "./components/Nav";
//react router
import { Route } from "react-router-dom";
//styles
import GlobalStyles from "./components/GlobalStyles";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Nav />
      <Route path={["/games/:id/", "/"]}>
        <Home />
      </Route>
    </div>
  );
}

export default App;
