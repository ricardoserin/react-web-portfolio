import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import HomePage from './home/HomePage';
import AboutMe from './aboutMe/AboutMe';
import Layout from './common/Layout';
import PageNotFound from './PageNotFound';
import 'react-toastify/dist/ReactToastify.css';

const App = () => (
  <Layout>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/about-me" component={AboutMe} />
      <Route component={PageNotFound} />
    </Switch>
    <ToastContainer autoClose={3000} hideProgressBar />
  </Layout>
);

export default App;
