import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import RegisterApp from './components/RegisterApp';
import { Router, Route, browserHistory } from 'react-router';
import registerServiceWorker from './registerServiceWorker';
import './index.css';


const Root = () => {
  return (
    <div className="container">
      <Router history={browserHistory}>
        <Route path="/" component={RegisterApp}/>
      </Router>
    </div>
  )
}


ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
