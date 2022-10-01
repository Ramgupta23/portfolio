
import Header from "../components/header/Header"
import Footer from "../components/footer/footer"
import Aboutme from "../components/aboutme/aboutme"
import Services from "./services"
import Projects from "../components/Projects/projects"
export default function Home() {
  return (
    <div>
      <Header />
     <Aboutme /> 
     <Services />
     <Projects />
  <Footer />
     

      
    </div>
  )
}
