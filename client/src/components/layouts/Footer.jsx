import { Container, Row, Col } from "react-bootstrap";


function Footer(props) {
    return (
        <footer>
            <Container fluid>
                <Row className="mt-5">
                    <Col className="bg-dark text-white text-center py-5">
                        Copyright &copy; Best Online Shop
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;