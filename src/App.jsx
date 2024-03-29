import Home from './components/Home/';

import { Amplify } from 'aws-amplify';
import '@aws-amplify/ui-react/styles.css';
import Login from './components/Auth/Login';

import Register from './components/Auth/Register'
import config from './amplifyconfiguration.json';
import { Authenticator } from '@aws-amplify/ui-react';

import ResetPassword from './components/Auth/ResetPassword'
import ForgotPassword from './components/Auth/ForgotPassword'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
Amplify.configure({
  API: {
    GraphQL: {
      endpoint: 'https://lijl6chabbclpa6hpwl4zzkjyq.appsync-api.us-east-1.amazonaws.com/graphql',
      region: 'us-east-1',
      // Set the default auth mode to "apiKey" and provide the API key value
      defaultAuthMode: 'apiKey',
      apiKey: '64grtotzrbdtzarjh54tzkb5by'
    }
  }
});
// Amplify.configure(config);

export function App() {
  
  return (
        //  <Authenticator>
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={ <Register/>}/>
        <Route path='/reset-password'element={<ResetPassword/>}   />
        <Route path='/forgot-password' element={<ForgotPassword/>} />
      </Routes>
      </Router>
      // {/* </Authenticator> */}
  
  );
}

export default App; 