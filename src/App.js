import Header from './Header'
import Introduction from './Introduction'
import Skills from './Skills'
import Projects from './Projects'
import Form from './Form'
import Footer from './Footer'
// import BackToTop from './BackToTop'

function App() {
  return (
    <div className="App">
      <Header />
      <Introduction/>
      <Skills/>
      <Projects />
      <Form />
      <Footer />
      {/* <BackToTop/> */}
    </div>
  );
}

export default App;
