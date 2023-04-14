import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { CssBaseline } from '@mui/material';
import {Routes, Route} from 'react-router-dom'

import './App.css'
import ClockInClockOut from './pages/ClockInClockOut';
import EmployeeList from './pages/EmployeeList';
import EmployeeProfile from './pages/EmployeeProfile';
import HomePage from './pages/HomePage';
import Layout from './pages/Layout';
import LogIn from './pages/LogIn';

function App() {

  return (
    <>
    <CssBaseline/>
<Routes>
  <Route element={<Layout/>}>
<Route path="/" element={<HomePage/>}/>
<Route path="/employees" element={<EmployeeList/>}/>
<Route path="/profile" element={<EmployeeProfile/>}/>
<Route path="/attendance" element={<ClockInClockOut/>}/>

  </Route>
  <Route path='/login' element={<LogIn/>}/>
</Routes>
    </>
  )
}

export default App
