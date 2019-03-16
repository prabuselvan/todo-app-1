import React from 'react';
import {Link} from 'react-router-dom';
import {Row,Col} from 'reactstrap';

const Header = () => {
    return (
        <Row>
            <Col>
                <Link to="/">Login</Link>
                <Link to="/dashboard">Dashboard</Link>
                <Link to="/profile">Profile</Link>
            </Col>
        </Row>
    )
}

export default Header;