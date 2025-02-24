import './app.scss'
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import Parallax from './components/parallax/Parallax';
import Services from './services/Services';
import Portfolios from './components/portfolio/Portfolios'
import Contact from './components/contact/Contact';
const App = () => {
  return <div>
    <section id = "Homepage">
      <Navbar/>
      <Hero/>
    </section>
    <section id = "Services"><Parallax type = "services"/></section>
    <section><Services/></section>
    <section id = "Portfolio"><Parallax type = "portfolio"/></section>
    <Portfolios/>
    <section id = "Contacts">
      <Contact/>
    </section>

  </div>;
};

export default App;
