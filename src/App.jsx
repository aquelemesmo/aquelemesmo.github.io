import Header from './components/Header'
import Container from './components/Container';
import Languages from './components/Languages';
import Projetos from './components/Projetos';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <div className='Effect-circle'/>
      <div className='Effect2-circle'/>

      <Header/>

      <Container/>

      <div className='Effect-circle2'/>
      <div className='Effect2-circle2'/>
      
      <Languages/>

      <Projetos/>

      <div className='Effect-circle3'/>
      <div className='Effect3-circle3'/>

      <Footer/>
    </>
  );
}

export default App;