import { Container } from 'react-bootstrap';
import './styles/App.css';
import Header from './components/header/Header';
import LegendContainer from './components/legends/LegendContainer';

function App() {
  return (
  <Container className='text-center my-5' >
    <Header />
    <LegendContainer/>


  </Container>
  )
}

export default App;
