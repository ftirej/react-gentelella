import React from 'react'
import { Gentelella, BaseTheme, Footer } from 'react-gentelella';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Sidebar from "./app/sidebar";
import HeadNav from "./app/head-nav";
import PlainPage from './extras/plain-page'

const App = () => (
    <div>
        <BaseTheme/>
          <Router>
              <Gentelella fixedFooter={ true } fixedSidebar={ true } >
                  <Sidebar/>
                  <HeadNav/>

                  <Switch>
                    <Route path="/extras/plain-page" component={ PlainPage }/>
                    <Route component={ PlainPage }/>
                  </Switch>

                  <Footer>
                      React-Gentelella * Gentelella - Bootstrap Admin Template by <a href="https://colorlib.com">Colorlib</a>
                  </Footer>
              </Gentelella>
          </Router>
    </div>
);

export default App;
