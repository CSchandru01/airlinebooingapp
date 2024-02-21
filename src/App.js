import './App.css';
import Header from './modules/components/Header.jsx';
import Home from './modules/components/Home.jsx';
import { Login } from './modules/components/Login.jsx';


function App() {
  return (
    <div>
      <header >
        <Header /> 
        <Home />
        Demo
        <Login />
        
      </header>
    </div>
  );
}

export default App;
