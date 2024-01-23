import logo from './logo.svg';
import './App.css';
import Nav from './components/nav'
import { BrowserRouter ,Routes,Route } from 'react-router-dom'
import Footer from './components/footer';
import Signup from  './components/signup';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path="/" element={<h1>product Listing component</h1>}/>
        <Route path="/Add" element={<h1> Add product  component</h1>}/>
        <Route path="/update" element={<h1>Update  component</h1>}/>
        <Route path="/logouts" element={<h1>logout component</h1>}/>
        <Route path="/Profile" element={<h1>Profile component</h1>}/>
        <Route path="/signup" element={<Signup/>} />
      </Routes>
      </BrowserRouter>
     <Footer/>
    </div>
  );
}

export default App;
