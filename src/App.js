
import './App.css';
import data from './data.json'
import NavBar from './component/NavBar.jsx';
import ImgSlider from './component/ImgSlider'
import NavItem from './component/NavItem';
import Footer from './component/Footer';
import Card from './component/Card';
import Product from "./component/Project"

function App() {
  return (
    <div className="App">
       <NavBar/>
       <NavItem/>
       <ImgSlider/>
       <Product/>
       <Card/>
       <Footer/>
    </div>
  );
}

export default App;
