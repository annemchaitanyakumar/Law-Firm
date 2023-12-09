import logo from './logo.svg';
import Navbar from './Components/Navbar';
import HeroSection from './Components/HeroSection';
import Intro from "./Components/Intro"
import "./App.css"
import Choose from './Components/Choose';
import Practices from './Components/Practices';
import HappyClients from './Components/HappyClients';
import Team from './Components/Team';

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
      </div>
    </div>
  )
}
