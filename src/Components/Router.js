import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from 'Routes/Home';
import TV from 'Routes/TV';
import Search from 'Routes/Search';

export default () => (
  <Router>
    {/* Route의 path는 Route가 보여질 URL을 적어주면 된다. exact
    component는 렌더링 될 컴포넌트를 적어주면 된다.*/}
    <Route path="/" exact component={Home} />
    <Route path="/tv" exact component={TV} />
    <Route path="/search" exact component={Search} />
  </Router>
);
