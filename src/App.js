import './App.css';
import Footer from './components/Footer/Footer';
import Form from './components/Form/Form';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Process from './components/Process';
import Section from './components/Section/Section';
import collage from './images/collage.png'
import shirt from './images/t-shirt.png'





function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Section 
        bg='bg-slate-800'
        title='WALL STICKERS AND VINYL'
        image={collage}
      />
      <Section 
        bg='bg-teal-600'
        reverse
        title='T-SHIRT CUSTOM DESIGNS'
        image={shirt}
      />
      <Process />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
