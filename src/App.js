import { Route, Switch } from 'react-router-dom'
import Message from './components/message';
import Login from './components/login';
import Register from './components/register';
import Header from './components/header';
import Profile from './components/profile';
import { getCurrentUser } from './utils/user';

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

function App() {
  const user = getCurrentUser()

  return <>
    {
      user &&
      <Header />
    }
    <Switch>
      <Route path='/message' component={Message} />
      <Route path='/login' component={Login} />
      <Route path='/profile' component={Profile} />
      <Route path='/' component={Register} />
    </Switch>
  </>
}

export default App;
