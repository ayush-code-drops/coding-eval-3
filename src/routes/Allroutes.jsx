import { Route, Switch } from "react-router-dom";
import Checkout from "../components/Checkout";
import Home from "../components/Home";

function Allroutes(){
  return (
    <Switch>
      <Route exact path="/">
<Home/>
      </Route>
      <Route exact path="/checkout">
<Checkout/>
</Route>
<Route>
  <h3>Something went wrong</h3>
</Route>
      </Switch>
  )
}

export default Allroutes