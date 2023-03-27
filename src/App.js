import Header from "./components/header/Header"
import Footer from "./components/footer/footer"
import Aboutme from "./components/aboutme/aboutme"
import Services from "./components/services/myservices"
import Projects from "./components/Projects/projects"
import Chats from "./components/chatnow/chat"

function App() {
  return (
    <div style={{overflowX:"hidden"}} >
        <Header />
     <Aboutme /> 
     <Services />
     <Projects />
  <Footer />

    </div>
  );
}

export default App;
