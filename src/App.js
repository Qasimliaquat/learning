
import './App.css';
import NavbarMenu from './Components/NavbarMenu';
import CompaniesCard from './Components/CompaniesCard';
import FooterItem from './Components/FooterItem';
 import {Container, Row, Col } from 'react-bootstrap';
function App() {
  return (
    <div>
  <NavbarMenu />

<CompaniesCard />
  <FooterItem />
  </div>
  );
}

export default App;
