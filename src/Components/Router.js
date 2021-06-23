import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

//최종경로가 폴더면 폴더 안에 있는 index.js 파일에 접근한다.
import Header from 'Components/Header';
import Home from 'Routes/Home';
import TV from 'Routes/TV';
import Search from 'Routes/Search';
import Detail from 'Routes/Detail';

export default () => (
  <Router>
    <>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/tv" exact component={TV} />
        <Route path="/search" exact component={Search} />
        <Route path="/movie/:id" exact component={Detail} />
        <Route path="/show/:id" exact component={Detail} />
        {/* :id는 url들의 id가 들어갈 자리이다. 어떠한 값이 들어가도 상관없다. */}
        <Redirect from="*" to="/" />
      </Switch>
    </>
  </Router>
);
