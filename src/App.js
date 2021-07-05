import HeroSection from './components/HeroSection';
import Header from './components/Header';
import Selection from './components/Selection';
import WhyRevive from './components/WhyRevive';
import Footer from './components/Footer';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <Selection />
      <WhyRevive />
      <Footer />
    </div>
  );
}

export default App;
