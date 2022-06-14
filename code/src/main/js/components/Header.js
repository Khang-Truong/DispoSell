import {Container, Nav, Navbar} from "react-bootstrap";
import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import AuthService from "../services/auth.service";
import EventBus from "../common/EventBus";

function Header() {
    const [isDelivery, setIsDelivery] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);
    const [currentUser, setCurrentUser] = useState(null);

    const logOut = () => {
        AuthService.logout();
        setIsDelivery(false);
        setIsAdmin(false);
        setCurrentUser(null);
    }

    useEffect(() => {
        const user = AuthService.getCurrentUser();

        if (user) {
            setCurrentUser(user);
            setIsAdmin(user.roles.includes("ROLE_ADMIN"));
            setIsDelivery(user.roles.includes("ROLE_DELIVERY"));
        }

        EventBus.on("logout", () => {
            logOut();
        });

        return () => {
            // Anything in here is fired on component unmount.
            EventBus.remove("logout");
        }
    }, []);

    return (
        <header>
            <Navbar bg="dark" variant="dark" expand="sm">
                <Container>
                    <Navbar.Brand as={Link} to="/">DispoSell</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                        <Nav>
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                            <Nav.Link as={Link} to="/category">Category</Nav.Link>
                            <Nav.Link as={Link} to="/leadership">Leadership</Nav.Link>
                            {currentUser != null && <Nav.Link as={Link} to="/user">User</Nav.Link>}
                            {isDelivery && <Nav.Link as={Link} to="/delivery">Delivery</Nav.Link>}
                            {isAdmin && <Nav.Link as={Link} to="/admin">Admin</Nav.Link>}
                            {currentUser ? (
                                <>
                                    <Nav.Link as={Link} to="/profile" style={{color: "darkgreen"}}>{currentUser.username}</Nav.Link>
                                    <Nav.Link as={Link} to="/login" onClick={logOut}>LogOut</Nav.Link>
                                </>
                            ) : (
                                <>
                                    <Nav.Link as={Link} to="/login">Login</Nav.Link>
                                    <Nav.Link as={Link} to="/register">Sign Up</Nav.Link>
                                </>
                            )}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header;