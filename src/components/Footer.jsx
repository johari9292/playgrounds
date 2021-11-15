import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <div className="Footer">
            <Container>
                <Row>
                    <Col>
                        <p>© {year} Playgrounds Inc. All Rights Reserved.</p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Footer;