import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import LoginScreen from './components/LoginScreen/LoginScreen';
import CardView from './components/HomeScreen/CardView';
import CardViewListing from './components/HomeScreen/CardViewListing';

function App() {
  return (
    <Router>
    <Routes>
          <Route path='*' element={< LoginScreen/>}></Route>
          <Route exact path='/homescreen' element={< CardViewListing />}></Route>
   </Routes>
</Router>
  );
}

export default App;
