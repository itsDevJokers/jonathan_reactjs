import ContactForm from './tugas/2_styling_component/ContactForm';
import Footer from './tugas/2_styling_component/Footer';
import Jumbotron from './tugas/2_styling_component/Jumbotron';
import Navbar from './tugas/2_styling_component/Navbar';
import Skills from './tugas/2_styling_component/Skills';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Jumbotron />
      <Skills />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
