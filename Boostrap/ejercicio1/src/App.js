import './App.css';
import {Col, Container, Row} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <div className="App">
            <header className="App-header" style={{
                backgroundImage: "url('./Fondo.jpg')",
                backgroundSize: 'cover',
                backgroundPosition: 'center center'
            }}>
                <Container>
                    <Row>
                        <Col xs={12} md={6} lg={2}>
                            <div>Hombre</div>
                        </Col>
                        <Col xs={12} md={6} lg={2}>
                            <div>Mujer</div>
                        </Col>
                        <Col xs={12} md={6} lg={2}>
                            <div>Niño</div>
                        </Col>
                    </Row>
                </Container>
            </header>
        </div>
    );
}

export default App;
