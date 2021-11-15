import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

const Home = (props) => {
    return (
        <Container>
            <Row>
                {
                    props.playgroundData?.map((item) => (
                        <Col lg="4" md="6" key={item.id}>
                            <Card>
                                <Card.Body>
                                    <Card.Title>{item.id}. {item.title}</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">{item.description}</Card.Subtitle>
                                    <Card.Link href={item.website} target="_blank">Website</Card.Link>
                                    <Card.Link href={item.imageUrl} target="_blank">Another Link</Card.Link>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))
                }

            </Row>
        </Container>
    );
}

export default Home;