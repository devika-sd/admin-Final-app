import React, { Component } from 'react';
import { Row, Col, Card, Form, Button } from 'react-bootstrap';

import Aux from "../../hoc/_Aux";
import DEMO from "../../store/constant";
import avatar2 from '../../assets/images/user/avatar-2.jpg';


class ProfilePage extends Component {
    render() {
        return (
            <Aux>
                <Row>
                    <Col>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h5">User Profile
                                </Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Card.Text>
                                    <Form>
                                        <div className="row">
                                            <div className="col-2" sm={12}>
                                                <Form.Group as={Row} className="mb-3" >

                                                    <div className="media friendlist-box align-items-center justify-content-center m-b-20">
                                                        <div className="m-r-10 photo-table">
                                                            <a href={DEMO.BLANK_LINK}><img className="rounded-circle" style={{ marginLeft: "50px", marginTop: "-20px", width: '220px', height: "220px" }} src={avatar2} alt="activity-user" /></a>
                                                        </div>
                                                    </div>
                                                </Form.Group>
                                            </div>
                                            <div className="col-10" sm={12}>
                                                <Form.Group as={Row} className="mb-3" >
                                                    <Form.Label style={{
                                                        // border: '1px solid lightgrey',
                                                        padding: '10px 15px',
                                                        textTransform: 'capitalize',
                                                        fontSize: '18px'
                                                        // borderRadius: '5px',
                                                        // outline: 'none'

                                                    }} column sm={2} style={{ marginLeft: '200px' }}><b>Name</b></Form.Label>
                                                    <Col sm={6}>
                                                        <Form.Control readOnly plaintext style={{
                                                            border: '1px solid lightgrey',
                                                            padding: '10px 15px',
                                                            textTransform: 'capitalize',
                                                            borderRadius: '5px',
                                                            outline: 'none',
                                                        }} type="text" placeholder="Enter Name" />
                                                    </Col>
                                                </Form.Group>

                                                <Form.Group as={Row} className="mb-3" >
                                                    <Form.Label style={{
                                                        // border: '1px solid lightgrey',
                                                        padding: '10px 15px',
                                                        textTransform: 'capitalize',
                                                        fontSize: '18px'
                                                        // borderRadius: '5px',
                                                        // outline: 'none'

                                                    }} column sm={2} style={{ marginLeft: '200px' }}><b>Email</b></Form.Label>
                                                    <Col sm={6}>

                                                        <Form.Control readOnly plaintext style={{
                                                            border: '1px solid lightgrey',
                                                            padding: '10px 15px',
                                                            borderRadius: '5px',
                                                            outline: 'none'
                                                        }} type="email" placeholder="Enter Email" />
                                                    </Col>
                                                </Form.Group>

                                                <Form.Group as={Row} className="mb-3" >
                                                    <Form.Label style={{
                                                        // border: '1px solid lightgrey',
                                                        padding: '10px 15px',
                                                        textTransform: 'capitalize',
                                                        fontSize: '18px'
                                                        // borderRadius: '5px',
                                                        // outline: 'none'

                                                    }} column sm={2} style={{ marginLeft: '200px' }}><b>Password</b></Form.Label>
                                                    <Col sm={6}>

                                                        <Form.Control readOnly plaintext style={{
                                                            border: '1px solid lightgrey',
                                                            padding: '10px 15px',
                                                            borderRadius: '5px',
                                                            outline: 'none'
                                                        }} type="password" placeholder="Password" />
                                                    </Col>
                                                </Form.Group>

                                                <Form.Group as={Row} className="mb-3" >
                                                    <Form.Label style={{
                                                        // border: '1px solid lightgrey',
                                                        padding: '10px 15px',
                                                        textTransform: 'capitalize',
                                                        fontSize: '18px'
                                                        // borderRadius: '5px',
                                                        // outline: 'none'

                                                    }} column sm={2} style={{ marginLeft: '200px' }}><b>Confirm Password</b></Form.Label>
                                                    <Col sm={6}>

                                                        <Form.Control readOnly plaintext style={{
                                                            border: '1px solid lightgrey',
                                                            padding: '10px 15px',
                                                            borderRadius: '5px',
                                                            outline: 'none'
                                                        }} type="password" placeholder="Confirm Password" />
                                                    </Col>
                                                </Form.Group>

                                                <Form.Group as={Row} className="mb-3" >
                                                    <Form.Label style={{
                                                        // border: '1px solid lightgrey',
                                                        padding: '10px 15px',
                                                        textTransform: 'capitalize',
                                                        fontSize: '18px'
                                                        // borderRadius: '5px',
                                                        // outline: 'none'

                                                    }} column sm={2} style={{ marginLeft: '200px' }}><b>Contact</b></Form.Label>
                                                    <Col sm={6}>
                                                        <Form.Control readOnly plaintext style={{
                                                            border: '1px solid lightgrey',
                                                            padding: '10px 15px',
                                                            borderRadius: '5px',
                                                            outline: 'none'
                                                        }} type="text" placeholder="Enter Contact Number" />
                                                    </Col>
                                                </Form.Group>

                                                <Form.Group as={Row} className="mb-3" >
                                                    <Form.Label style={{
                                                        // border: '1px solid lightgrey',
                                                        padding: '10px 15px',
                                                        textTransform: 'capitalize',
                                                        fontSize: '18px'
                                                        // borderRadius: '5px',
                                                        // outline: 'none'

                                                    }} column sm={2} style={{ marginLeft: '200px' }}><b>Address</b></Form.Label>
                                                    <Col sm={6}>
                                                        <Form.Control readOnly plaintext style={{
                                                            border: '1px solid lightgrey',
                                                            padding: '10px 15px',
                                                            textTransform: 'capitalize',
                                                            borderRadius: '5px',
                                                            outline: 'none'
                                                        }} type="textarea" placeholder="Address" />
                                                    </Col>

                                                </Form.Group>

                                                <Form.Group as={Row}>

                                                    <Button style={{ marginLeft: "355px", height: '40px', display: 'inline-block', textAlign: 'center' }} variant="primary" >EDIT</Button>
                                                    <Button style={{ height: '40px', display: 'inline-block', textAlign: 'center' }} variant="success">UPDATE</Button>

                                                </Form.Group>
                                            </div>
                                        </div>
                                    </Form>
                                </Card.Text>

                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Aux>
        );
    }
}

export default ProfilePage;