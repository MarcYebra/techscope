import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Blogs from "./Blogs";


const App = (props) => {

  return (
    <BrowserRouter>
    <Switch>
      <Route exact path="/blogs" component={Blogs} />
    </Switch>
    </BrowserRouter>
  )
}

export default App;