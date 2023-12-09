import logo from './logo.svg';
import Navbar from './Components/Navbar';
import HeroSection from './Components/HeroSection';
import Intro from "./Components/Intro"
import "./App.css"
import Choose from './Components/Choose';
import Practices from './Components/Practices';
import HappyClients from './Components/HappyClients';
import Team from './Components/Team';
import Faq from './Components/Faq';
import Newsletter from './Components/Newsletter';
import Footer from './Components/Footer';

export default () =>{
  return (
    <div>
      <div style={{
      backgroundColor:'black'
    }}>
      <Navbar />
      <HeroSection />
    </div>
    <div className='bgColor'>
      <Intro />
      <Choose />
      <Practices />
      <HappyClients />
      <Team />
      <Faq />
      <Newsletter />
      <div style={{backgroundColor:'black'}}>
        <Footer />
      </div>
     
      </div>
    </div>
  )
}
