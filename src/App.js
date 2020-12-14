import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Read from "./components/Read/Read";
import NotFound from "./components/NotFound/NotFound";
import Create from "./components/Create/Create";
import { UserProvider } from "./components/UserContext/UserContext";

function App() {
  return (
    <UserProvider> 
      <>
        <Router>
          <Switch>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/read/:id">
              <Read />
            </Route>
            <Route path="/edit">
              <Home />
            </Route>
            <Route path="/delete">
              <Home />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </Router>
      </>
    </UserProvider>
  );
}

export default App;
