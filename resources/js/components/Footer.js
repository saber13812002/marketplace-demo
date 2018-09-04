import React from 'react';
import { Navbar, Grid, Row, Table, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => (
    <footer className={'footer'}>
    <Navbar>
        <Grid>
            <Row>
                <Col lgOffset={2}>
                    <br/>
                    <Table responsive className={'table-footer'}>
                        <tbody>
                            <tr>
                                <td><Link to={"/myaccount"}>My Account</Link></td>
                                <td><Link to={"/myorders"}>My Orders</Link></td>
                                <td><Link to={"/about"}>About Project</Link></td>
                            </tr>
                        </tbody>
                    </Table>
                </Col>
            </Row>

            <Row>
                <Col lg={12}>
                    <div className={"text-center copyright-height"}>
                        Copyright &copy; Tom Penzer {(new Date().getFullYear())}
                    </div>
                </Col>
            </Row>
        </Grid>
    </Navbar>
    </footer>
);

export default Footer;
