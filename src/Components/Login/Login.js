import React from 'react';
import {Container,
    Row,
    Col,
    Form,
    FormGroup,
    Input,
    Label,
    Button
} from 'reactstrap';

const Login = () => (
    <Container>
        <Row>
            <Col md="4" className="column">
                <Form>
                    <FormGroup>
                        <Label for="email">Email</Label>
                        <Input type="email" name="email" id="email" />
                    </FormGroup>

                    <FormGroup>
                        <Label for="password">password</Label>
                        <Input type="text" name="password" id="password" />
                    </FormGroup>

                    <Button color="primary" className="float-right">Login</Button>
                </Form>
            </Col>
        </Row>
    </Container>
);

export default Login;
