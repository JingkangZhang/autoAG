import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import HomeworkEditor from './HomeworkEditor';
import SubmitSolution from './containers/SubmitSolution';

// if (process.env.NODE_ENV !== 'production') {
//   const {whyDidYouUpdate} = require('why-did-you-update');
//   whyDidYouUpdate(React);
// }
export default () => (
  <div>
    <HashRouter baseName="/">
      <Switch>
        <Route path="/submit">
          <SubmitSolution />
        </Route>
        <Route path="/">
          <HomeworkEditor />
        </Route>

      </Switch>
    </HashRouter>
  </div>
);
