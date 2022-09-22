import { Switch, Route } from "react-router-dom";
import Contact from "../pages/contact/contact";
import Services from "../pages/services/services";
import Home from "../pages/home/home";
import Partners from "../pages/partners/Partners"
import About from "../pages/about/about";
import DetailServices from "../components/detailsServices";
import servicos from "../dataSources/servicos";

const Routes = () =>{

 return (
    <Switch>
    <Route exact path="/">
      <Home /> 
    </Route>
    <Route exact path="/about">
      <About />
    </Route>
    <Route exact path="/services">
      <Services/>
    </Route>
    <Route  exact path="/partners">
      <Partners />
    </Route>
    <Route exact path="/contacts">
      <Contact  />
    </Route>  
    

  </Switch>
 )


}

export default Routes