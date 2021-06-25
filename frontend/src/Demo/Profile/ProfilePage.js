import React, { Component } from 'react';
import { Row, Col, Card, Form, Button, Table } from 'react-bootstrap';

import Aux from "../../hoc/_Aux";
import DEMO from "../../store/constant";
import avatar1 from '../../assets/images/user/avatar-1.jpg';
import avatar2 from '../../assets/images/user/avatar-2.jpg';
import avatar3 from '../../assets/images/user/avatar-3.jpg';

class ProfilePage extends Component {
    render() {
        return (
            <Aux>
                <Row>
                    <Col md={4} xl={4}>
                        <Card className='card-event'>
                            <Card.Body>
                                <Form.Group as={Row} className="mb-3" style={{ width: '100%' }} >

                                    <div style={{ margin: 'auto' }} className="media friendlist-box align-items-center justify-content-center m-b-20">
                                        <div className="m-r-10 photo-table">
                                            <img className="rounded-circle" style={{ width: '220px', height: "220px", margin: 'auto' }} src={avatar2} alt="activity-user" />
                                        </div>
                                    </div>

                                </Form.Group>
                                {/* <div style={{ width: "60%",marginTop:'50px',margin:'auto',height:"50px" }}>
                                    
                                    <div className="col-auto" style={{ margin: '5px auto',width:"20px",height:'20px', display: 'inline-block' }}>
                                        <h6><i class="fa fa-facebook f-30" aria-hidden="true"></i>hello</h6>
                                    </div>
                                    <div className="col-auto"  style={{margin: '5px auto', display: 'inline-block' }}>
                                        <i class="fa fa-youtube f-30" aria-hidden="true"></i>
                                    </div>
                                    <div className="col-auto"  style={{margin: '5px auto', display: 'inline-block' }}>
                                        <i class="fa fa-github f-30" aria-hidden="true"></i>
                                    </div>
                                    <div className="col-auto"  style={{margin: '5px auto', display: 'inline-block' }}>
                                        <i class="fa fa-instagram f-30" aria-hidden="true"></i>
                                    </div>
                                    <div className="col-auto" style={{ margin: '5px auto', display: 'inline-block' }}>
                                        <i  class="fa fa-twitter f-30" aria-hidden="true"></i>
                                    </div>
                                    <div className="col-auto"  style={{margin: '5px auto', display: 'inline-block' }}>
                                        <i class="fa fa-linkedin-in f-30" aria-hidden="true"></i>
                                    </div>
                                </div> */}
                                
                            </Card.Body>
                            {/* <Row sm={12} xl={12} md={12}  style={{marginTop:"20px"}}>
                                    <Col sm={2} xl={2} md={2}></Col>
                                    <Col sm={2} xl={2} md={2}><i class="fa fa-facebook f-30" aria-hidden="true"></i></Col>
                                    <Col sm={2} xl={2} md={2}><i class="fa fa-twitter f-30" aria-hidden="true"></i></Col>
                                    <Col sm={2} xl={2} md={2}><i class="fa fa-github f-30" aria-hidden="true"></i></Col>
                                    <Col sm={2} xl={2} md={2}><i class="fa fa-instagram f-30" aria-hidden="true"></i></Col>
                                    <Col sm={2} xl={2} md={2}></Col>
                                </Row> */}
                        </Card>

                    </Col>
                    <Col md={8} xl={8}>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h5">User Details
                                </Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Card.Text>
                                    <Form>
                                        <Form.Group as={Row} className="mb-3" >
                                            <Form.Label style={{
                                                // border: '1px solid lightgrey',
                                                padding: '10px 15px',
                                                textTransform: 'capitalize',
                                                fontSize: '14px'
                                                // borderRadius: '5px',
                                                // outline: 'none'

                                            }} column sm={4}><b>Name</b></Form.Label>
                                            <Col sm={8}>
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
                                                fontSize: '14px'
                                                // borderRadius: '5px',
                                                // outline: 'none'

                                            }} column sm={4} ><b>Email</b></Form.Label>
                                            <Col sm={8}>

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
                                                fontSize: '14px'
                                                // borderRadius: '5px',
                                                // outline: 'none'

                                            }} column sm={4} ><b>Password</b></Form.Label>
                                            <Col sm={8}>

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
                                                fontSize: '14px'
                                                // borderRadius: '5px',
                                                // outline: 'none'

                                            }} column sm={4} ><b>Confirm Password</b></Form.Label>
                                            <Col sm={8}>

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
                                                fontSize: '14px'
                                                // borderRadius: '5px',
                                                // outline: 'none'

                                            }} column sm={4} ><b>Contact</b></Form.Label>
                                            <Col sm={8}>
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
                                                fontSize: '14px'
                                                // borderRadius: '5px',
                                                // outline: 'none'

                                            }} column sm={4} ><b>Address</b></Form.Label>
                                            <Col sm={8}>
                                                <Form.Control readOnly plaintext style={{
                                                    border: '1px solid lightgrey',
                                                    padding: '10px 15px',
                                                    textTransform: 'capitalize',
                                                    borderRadius: '5px',
                                                    outline: 'none'
                                                }} type="textarea" placeholder="Address" />
                                            </Col>

                                        </Form.Group>

                                        <Form.Group as={Row} sm={12} style={{ width: "100%", textAlign: 'center' }}>
                                            <div style={{ width: "100%", marginTop: '20px' }}>
                                                <Button style={{ width: '100px', height: "40px", textAlign: 'center' }} variant="primary" >EDIT</Button>
                                                <Button style={{ width: '100px', height: "40px", textAlign: 'center' }} variant="success">UPDATE</Button>
                                            </div>
                                        </Form.Group>
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