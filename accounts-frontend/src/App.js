import {BrowserRouter as Router, Route, Link, Switch, Routes, Navigate} from 'react-router-dom'

import HomePage from './Components/homePage';
import UserCreation from './Components/userCreation';
import UserSearch from './Components/userSearch';

function App() {
  return (<div>
        <Router>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/userSearch" element={<UserSearch />}></Route>
          <Route path="/userCreation" element={<UserCreation />}></Route>
        </Routes>
      </Router>
      </div>
  )
}

export default App;

