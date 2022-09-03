import './App.css';
import Header from './Header';
import TinderCards from './TinderCards';
import SwipeButtons from './SwipeButtons';
import { red } from '@mui/material/colors';


function App() {
  return (
    <div className="app">
    
    <Header />
    <TinderCards />
   <SwipeButtons />
    </div>
  );
}

export default App;
