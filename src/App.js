import './App.css';
import Navbar from './components/Navbar.js'
import Header from './components/Header.js'
import Join from './components/Join.js'
import Footer from './components/Footer.js'
import Discover from './components/Discover.js'

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Discover />
      <Join />
      <Footer />
    </div>
  );
}
