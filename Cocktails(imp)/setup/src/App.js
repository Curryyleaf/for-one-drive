import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// import pages
import Home from './pages/Home'
import About from './pages/About'
import SingleCocktail from './pages/SingleCocktail'
import Error from './pages/Error'
// import components
import Navbar from './components/Navbar'
function App() {
  return (
    <Router>
      {/* here router is wrapping the navbar , providing the routing context needed  */}
      <Navbar />
      <Switch>
        <Route path="">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/cocktail/:id">
          {/* the :id in the route path might look like a normal string, but it actually serves as a placeholder for a dynamic value.  */}
          {/* In the context of a route path, a colon (:) followed by a string, such as :id, denotes a route parameter. */}

          <SingleCocktail />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  );
}

export default App
