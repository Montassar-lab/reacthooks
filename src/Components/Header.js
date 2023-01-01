import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header =()=>{

    return(
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">MOVILIX</Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link href="#home">MOVIES</Nav.Link>
                            <Nav.Link href="#features">TV SHOWS</Nav.Link>
                            <Nav.Link href="#pricing">CONTACT</Nav.Link>
                        </Nav>
                </Container>
            </Navbar>

        </div>
    )
}

export default Header