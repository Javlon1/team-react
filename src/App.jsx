import './App.css';
import Header from './components/header/Header';
import Intro from './page/home/components/intro/Intro';
import About from './page/home/components/about/about';
import Team from './page/home/components/team/Team';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Intro/>
      <About/>
      <Team/>
      <Footer/>
    </div>
  );
}

export default App;
