import { Home, About, Product, Contact, MainLayout, SignIn, SignUp,ProductDetail,Order } from "../containers";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from 'react';

const MainRouter = () => {
  return (
    <Router>
      <MainLayout >
        <Switch>
          <Route
            exact
            component={Home}
            path="/home"
          />

          <Route
            exact
            path="/product"
            component={Product}
          />

          <Route
            exact
            path="/about"
            component={About}
          />
          <Route
            exact
            path="/contact"
            component={Contact}
          />
          <Route
            exact
            path="/signIn"
            component={SignIn}
          />
          <Route
            exact
            path="/signUp"
            component={SignUp}
          />
          <Route
            exact
            path="/productDetail"
            component={ProductDetail}
          />
          <Route
            exact
            path="/order"
            component={Order}
          />
          <Route 
          exact path="/" 
          component={ProductDetail}
          />

        </Switch>
    </MainLayout>
    </Router>
  )
};
export default MainRouter;