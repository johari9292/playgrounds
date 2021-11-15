import React from "react";
import Container from "react-bootstrap/Container";
import Identicon from "identicon.js";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Topbar = (props) => {
    return (
        <div className="Topbar">
            <Navbar bg="dark" variant="dark" sticky="top">
                <Container>
                    <Navbar.Brand href="/">Playgrounds</Navbar.Brand>

                    <Nav>
                        {
                            props.account ?
                                <>
                                    <Navbar.Text style={{ paddingRight: "1rem" }}>{props.account}</Navbar.Text>

                                    <img width="32" height="32" src={`data:image/png;base64,${new Identicon(props.account.toString())}`} alt="identicon" />
                                </>

                                : <span></span>
                        }
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
}

export default Topbar;