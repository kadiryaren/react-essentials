import {Navbar, Nav, Container, NavDropdown, Form, FormControl, Button} from 'react-bootstrap';
import {useLocation} from 'react-router-dom';
import "bootstrap-icons/font/bootstrap-icons.css";


export default function NavbarComponent(props){
    const location = useLocation();



    return(
    
        <>
            
           <Navbar bg={props.theme === "dark" ? "dark" : "light"} expand="lg">
            <Container >
                <Navbar.Brand className={props.theme === "dark" ? "text-light" : "text-dark"} href="/">ReactJS Essentials</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                >

                    {location.pathname === '/' ? (<Nav.Link className='text-success' href="/">Home</Nav.Link>) : (<Nav.Link className={props.theme === "dark" ? "text-light" : "text-dark"} href="/">Home</Nav.Link>)}
                 
                    {location.pathname === '/about' ? (<Nav.Link className='text-warning' href="/about">About</Nav.Link>) : (<Nav.Link className={props.theme === "dark" ? "text-light" : "text-dark"} href="/about">About</Nav.Link>)}
   
                    {location.pathname === '/contact' ? (<Nav.Link className='text-danger' href="/contact">Contact</Nav.Link>) : (<Nav.Link className={props.theme === "dark" ? "text-light" : "text-dark"} href="/contact">Contact</Nav.Link>)}
                    
                </Nav>
                <Form className="d-flex">
                    <FormControl
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    />
                    <Button variant="outline-warning text-danger">Search</Button>
                </Form>
                <Button className={props.theme === "dark" ? ' btn btn-dark btn-outline-light m-3 scale' : 'btn btn-light btn-outline-dark m-3 scale' } onClick={() => {

                    props.theme === 'light' ? props.setTheme('dark') : props.setTheme('light');
                    console.log(props.theme);
                    
                    }}>

                    {props.theme === 'light' ? (<i className="bi bi-moon m-2"></i>) : (<i className="bi bi-sun m-2"></i>)}
                    Change Theme
                </Button>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </>

    )

}