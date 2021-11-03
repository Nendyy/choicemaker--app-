import { BrowserRouter, Switch, Route } from "react-router-dom";
import NewQuestion from "./Screens/NewQuestion";
import Result from "./Screens/Result";
import Questions from "./Screens/Questions";
import StateProvider from "./context";
import "./App.css";

function App() {
  return (
    <StateProvider>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <NewQuestion />
          </Route>
          <Route path="/view_result" exact>
            <Result />
          </Route>
          <Route path="/questions" exact>
            <Questions />
          </Route>
        </Switch>
      </BrowserRouter>
    </StateProvider>
  );
}

export default App;
