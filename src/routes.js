import { Switch, Route } from "react-router-dom";
import Landing from "./components/Landing";

export default function routes(){
return (
    <Switch>
      <Route exact path="/" component={Landing} />
    </Switch>
  );
}

