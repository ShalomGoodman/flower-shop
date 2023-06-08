import logo from './logo.svg';
import './App.css';
import './index.css';
import NavBar from './components/NavBar';
import BigImage from './components/BigImage';
import Footer from './components/Footer';
import ProductCard from './components/ProductCard';
import data from './data.js';

function App() {
  const products = data.map((product, index) => {
    return (
      <ProductCard key={index} {...product} />
    )
  });

  return (
    <div className="App">
      <div className="nav-bar">
        <NavBar />
      </div>
      <div className="left"></div>
      <div className="right"></div>
        <Footer />
        <BigImage />
      <div className="content">
      <div className="product-row">  {/* Add this div */}
          {products}
        </div>
      </div>
    </div>
  );
}

export default App;
