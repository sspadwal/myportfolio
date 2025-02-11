import './App.css'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Hero from './components/Hero/Hero'
import MyWork from './components/Mywork/Mywork'
import Navbar from './components/Navbar/Navbar'

function App() {
  return (
    <div >
     
      <Navbar />
      <Hero />
      <About />
      <MyWork />
      <Contact />
      <Footer />
    </div>
  )
}

export default App;
