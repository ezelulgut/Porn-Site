import {Navbar, Container, Nav} from "react-bootstrap"

const NavigationBar = () => {
    return (
        <div>
        <Navbar variant="dark">
            <Container>
                <Navbar.Brand href="https://unitypornsite.web.app/">Home</Navbar.Brand>
                <Nav>
                    <Nav.Link href="#pictures">Pictures</Nav.Link>
                    <Nav.Link href="#videos">Videos</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
        </div>
    )
}

export default NavigationBar