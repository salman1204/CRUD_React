import "./App.css";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./components/Home/Home";
import Read from "./components/Read/Read";
import NotFound from "./components/NotFound/NotFound";
import Create from "./components/Create/Create";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/create">
            <Create />
          </Route>
          <Route path="/read">
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
  );
}

export default App;
