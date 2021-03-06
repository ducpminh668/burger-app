import React, { Component } from 'react';

import './App.css';
import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import classes from './App.module.css';

class App extends Component {
  render() {
    return (
     <div className={classes.Test}>
       <Layout>
         <BurgerBuilder />
       </Layout>
     </div>
    );
  }
}

export default App;
