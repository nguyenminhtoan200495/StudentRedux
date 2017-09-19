import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import { Route, Router, IndexRoute, hashHistory, browserHistory } from 'react-router'
import App from './components/App.jsx';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import '.././css/style.css';
import StudentManagement from './components/StudentManagement.jsx'
import AddStudent from './components/AddStudent.jsx'
import EditStudent from './components/EditStudent.jsx'
import StudentDetail from './components/StudentDetail.jsx'


const store = createStore(reducer);

render(
  <App />,
  document.getElementById('app')
)

render((
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={StudentManagement} />
        <Route path="/addstudent" component={AddStudent} />
        <Route path="/editstudent/:id" component={EditStudent} />
      </Route>
    </Router>
  </Provider>
), document.getElementById('app'))