import './App.css';
import Footer from './components/Footer/Footer';
import Form from './components/Form/Form';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Process from './components/Process/Process';
import Section from './components/Section/Section';
import collage from './images/collage.png'
import shirt from './images/t-shirt.png'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';





function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Section 
        bg='bg-slate-800'
        title='WALL STICKERS AND VINYL'
        image={collage}
        text="Our vinyls leave no damage on the wall, is temporary and are designed accurately to the customers's needs.
        These wall vinyls have better adhesion and last longer when they are applied on smooth surface, on surfaces that re completely free of grease and dust.
        Instructions will be given on how to use these vinyls to get the best results."
      />
      <Section 
        bg='bg-teal-600'
        reverse
        title='T-SHIRT CUSTOM DESIGNS'
        image={shirt}
        text="We also offer the service of creating custom T-shirt designs tailored to the customers' wants and needs all you need to do is 
        kindly let us know your choice of colour and size and the design you would like on your clothing."
      />
      <Process />
      <Form />
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
