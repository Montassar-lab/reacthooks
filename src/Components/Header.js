import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const Header =()=>{

    return(
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">MOVILIX</Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link><Link to='/'>Home</Link></Nav.Link>
                            <Nav.Link><Link to='/Listmovies'>Listmovies</Link></Nav.Link>
                            <Nav.Link><Link to='/CONTACT'>CONTACT</Link></Nav.Link>
                        </Nav>
                </Container>
            </Navbar>

        </div>
    )
}

export default Header