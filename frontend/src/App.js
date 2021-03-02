
import { HashRouter,Route, Redirect } from 'react-router-dom'
import './App.scss';

import Login from './pages/login/index'
import Layout from './layout/index'

function App() {
  return (
    <HashRouter>
      <Route exact path="/login" component={Login}></Route>
      <Layout></Layout>
      {/* <Route exact path="/">
            { 1 ?
                <Redirect to='/home' />
                : <Redirect to='/login' />
            }
      </Route> */}
    </HashRouter>
  );
}

export default App;
