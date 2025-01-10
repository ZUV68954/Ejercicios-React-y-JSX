import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Col, Container, Image, Row, Stack} from "react-bootstrap";

function App() {
    return (<div className="App">
        <header className="App-header">
            <Container>
                <Stack>
                    <Row>
                        <Col xs={6} md={6} lg={6}>
                            <Image src={"./Espaiderman.jpg"}
                                   style={{height: '70%', width: '100%'}}
                                   class="rounded mx-auto d-block"/>
                        </Col>
                        <Col xs={6} md={6} lg={6} style={{paddingLeft: "5%"}}>
                            <Row>
                                <Col style={{paddingLeft: "7%"}}>
                                    <Image src={"./dr_octupos.jfif"}
                                           style={{height: '50%', width: '50%'}}
                                           class="rounded mx-auto d-block"/>
                                </Col>
                                <Col>
                                    Lorem ipsum
                                </Col>
                            </Row>
                            <Row style={{paddingTop: "8%"}}>
                                <Col style={{paddingLeft: "7%"}}>
                                    <Image src={"./dr_octupos.jfif"}
                                           style={{height: '50%', width: '50%'}}
                                           class="rounded mx-auto d-block"/>
                                </Col>
                                <Col>
                                    Lorem ipsum
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Stack>
                <Stack>
                    <Row>
                        <Col xs={6} md={6} lg={6}>
                            Texto texto texto
                        </Col>
                        <Col style={{paddingLeft: "7%"}}>
                            <Image src={"./dr_octupos.jfif"}
                                   style={{height: '50%', width: '50%'}}
                                   class="rounded mx-auto d-block"/>
                        </Col>
                        <Col>
                            Lorem ipsum
                        </Col>
                    </Row>

                    <Row>
                        <Col xs={6} md={6} lg={6}>
                        </Col>
                        <Col style={{paddingLeft: "7%"}}>
                            <Image src={"./dr_octupos.jfif"}
                                   style={{height: '50%', width: '50%'}}
                                   class="rounded mx-auto d-block"/>
                        </Col>
                        <Col>
                            Lorem ipsum
                        </Col>
                    </Row>
                </Stack>
            </Container>
        </header>
    </div>);
}

export default App;
