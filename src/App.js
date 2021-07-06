import HeroSection from './components/HeroSection';
import Header from './components/Header';
import Selection from './components/Selection';
import WhyRevive from './components/WhyRevive';
import Footer from './components/Footer';
import Main from './components/checkout/Main';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './styles/App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/checkout'>
          <Main />
        </Route>
      </Switch>
    </Router>
  );
}

function Home() {
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
