import React, { Component } from 'react';
import { Col, Row, Tabs, Tab, Card, Table } from 'react-bootstrap';

import DEMO from "../../store/constant";

import avatar1 from '../../assets/images/user/avatar-1.jpg';
import avatar2 from '../../assets/images/user/avatar-2.jpg';
import avatar3 from '../../assets/images/user/avatar-3.jpg';

import Aux from "../../hoc/_Aux";

function Orders() {

    const tabContent = (
        <Aux>
            <Row className="unread mt-2">
                <Col>
                    <h6>00001</h6>
                </Col>
                <Col xs={4}>
                    <h6 className="mb-1">Isabella Christensen</h6>
                    <p className="text-muted mb-3">Lorem Ipsum is simply dummy text of…</p>
                </Col>
                <Col>
                    <h6 style={{ marginLeft: '20px' }}>Ordered</h6>
                </Col>
                <Col>
                    <h6 className="text-muted"><i className="fa fa-circle text-c-green f-10 m-r-15" />11 MAY 12:56</h6>
                </Col>
                <Col style={{ textAlign: 'center' }}>
                    <a style={{ width: '70px', display: 'inline-block', textAlign: 'center' }} className="label theme-bg2 text-white f-12">COD</a>
                </Col>
            </Row>
            <Row className="unread mt-2">
                <Col>
                    <h6>00002</h6>
                </Col>
                <Col xs={4}>
                    <h6 className="mb-1">Mathilde Andersen</h6>
                    <p className="text-muted mb-3">Lorem Ipsum is simply dummy text of…</p>
                </Col>
                <Col>
                    <h6 style={{ marginLeft: '20px' }}>Completed</h6>
                </Col>
                <Col>
                    <h6 className="text-muted"><i className="fa fa-circle text-c-red f-10 m-r-15" />11 MAY 10:35</h6>
                </Col>
                <Col style={{ textAlign: 'center' }}>
                    <a style={{ width: '70px', display: 'inline-block', textAlign: 'center' }} className="label theme-bg text-white f-12">Online</a>
                </Col>
            </Row>
            <Row className="unread mt-2">
                <Col>
                    <h6>00001</h6>
                </Col>
                <Col xs={4}>
                    <h6 className="mb-1">Isabella Christensen</h6>
                    <p className="text-muted mb-3">Lorem Ipsum is simply dummy text of…</p>
                </Col>
                <Col>
                    <h6 style={{ marginLeft: '20px' }}>Delayed</h6>
                </Col>
                <Col>
                    <h6 className="text-muted"><i className="fa fa-circle text-c-green f-10 m-r-15" />11 MAY 12:56</h6>
                </Col>
                <Col style={{ textAlign: 'center' }}>
                    <a style={{ width: '70px', display: 'inline-block', textAlign: 'center' }} className="label theme-bg2 text-white f-12">COD</a>
                </Col>
            </Row>
            <Row className="unread mt-2">
                <Col>
                    <h6>00001</h6>
                </Col>
                <Col xs={4}>
                    <h6 className="mb-1">Isabella Christensen</h6>
                    <p className="text-muted mb-3">Lorem Ipsum is simply dummy text of…</p>
                </Col>
                <Col>
                    <h6 style={{ marginLeft: '20px' }}>Delayed</h6>
                </Col>
                <Col>
                    <h6 className="text-muted"><i className="fa fa-circle text-c-green f-10 m-r-15" />11 MAY 12:56</h6>
                </Col>
                <Col style={{ textAlign: 'center' }}>
                    <a style={{ width: '70px', display: 'inline-block', textAlign: 'center' }} className="label theme-bg2 text-white f-12">COD</a>
                </Col>
            </Row>
            <Row className="unread mt-2">
                <Col>
                    <h6>00001</h6>
                </Col>
                <Col xs={4}>
                    <h6 className="mb-1">Isabella Christensen</h6>
                    <p className="text-muted mb-3">Lorem Ipsum is simply dummy text of…</p>
                </Col>
                <Col>
                    <h6 style={{ marginLeft: '20px' }}>Shipped</h6>
                </Col>
                <Col>
                    <h6 className="text-muted"><i className="fa fa-circle text-c-green f-10 m-r-15" />11 MAY 12:56</h6>
                </Col>
                <Col style={{ textAlign: 'center' }}>
                    <a style={{ width: '70px', display: 'inline-block', textAlign: 'center' }} className="label theme-bg2 text-white f-12">COD</a>
                </Col>
            </Row>

        </Aux>
    );

    return (
        <Aux>
            <div>
                <div md={12} xl={12} className='m-b-30'>
                    <Tabs defaultActiveKey="All" id="unconCololled-tab-example">
                        <Tab eventKey="All" className="text-c-purple" title="All">

                            <Row className="media friendlist-box align-items-center justify-content-center mb-5">

                                <Col>
                                    <i className="icon feather icon-hash text-c-purple" />
                                    <h6 className="m-0 d-inline text-c-purple">&nbsp;<b>OrderID</b></h6>

                                </Col>
                                <Col xs={4}>
                                    <i className="icon feather icon-mail  text-c-purple" />
                                    <h6 className="m-0 d-inline text-c-purple">&nbsp;<b>Email</b></h6>

                                </Col>

                                <Col style={{ marginLeft: '20px' }} className="media-body">
                                    <i className="icon feather icon-pie-chart text-c-purple" />
                                    <h6 className="m-0 d-inline text-c-purple">&nbsp;<b>Status</b></h6>
                                </Col>
                                <Col>

                                    <i className="icon feather icon-calendar text-c-purple" />
                                    <h6 className="m-0 d-inline text-c-purple">&nbsp;<b>Date Time</b></h6>

                                </Col>
                                <Col>
                                    <i className="icon feather icon-credit-card text-c-purple" />


                                    <h6 className="m-0 d-inline text-c-purple">&nbsp;<b>Payment Type</b></h6>

                                </Col>

                            </Row>
                            {tabContent}
                        </Tab>
                        <Tab eventKey="New" title="New">
                            <Row className="media friendlist-box align-items-center justify-content-center mb-5">

                                <Col>
                                    <i className="icon feather icon-hash text-c-purple" />
                                    <h6 className="m-0 d-inline text-c-purple">&nbsp;<b>OrderID</b></h6>

                                </Col>
                                <Col xs={4}>
                                    <i className="icon feather icon-mail  text-c-purple" />
                                    <h6 className="m-0 d-inline text-c-purple">&nbsp;<b>Email</b></h6>

                                </Col>

                                <Col style={{ marginLeft: '20px' }} className="media-body">
                                    <i className="icon feather icon-pie-chart text-c-purple" />
                                    <h6 className="m-0 d-inline text-c-purple">&nbsp;<b>Status</b></h6>
                                </Col>
                                <Col>

                                    <i className="icon feather icon-calendar text-c-purple" />
                                    <h6 className="m-0 d-inline text-c-purple">&nbsp;<b>Date Time</b></h6>

                                </Col>
                                <Col>
                                    <i className="icon feather icon-credit-card text-c-purple" />


                                    <h6 className="m-0 d-inline text-c-purple">&nbsp;<b>Payment Type</b></h6>

                                </Col>

                            </Row>
                            {tabContent}
                        </Tab>
                        <Tab eventKey="Packed" title="Packed">
                            <Row className="media friendlist-box align-items-center justify-content-center mb-5">

                                <Col>
                                    <i className="icon feather icon-hash text-c-purple" />
                                    <h6 className="m-0 d-inline text-c-purple">&nbsp;<b>OrderID</b></h6>

                                </Col>
                                <Col xs={4}>
                                    <i className="icon feather icon-mail  text-c-purple" />
                                    <h6 className="m-0 d-inline text-c-purple">&nbsp;<b>Email</b></h6>

                                </Col>

                                <Col style={{ marginLeft: '20px' }} className="media-body">
                                    <i className="icon feather icon-pie-chart text-c-purple" />
                                    <h6 className="m-0 d-inline text-c-purple">&nbsp;<b>Status</b></h6>
                                </Col>
                                <Col>

                                    <i className="icon feather icon-calendar text-c-purple" />
                                    <h6 className="m-0 d-inline text-c-purple">&nbsp;<b>Date Time</b></h6>

                                </Col>
                                <Col>
                                    <i className="icon feather icon-credit-card text-c-purple" />


                                    <h6 className="m-0 d-inline text-c-purple">&nbsp;<b>Payment Type</b></h6>

                                </Col>

                            </Row>
                            {tabContent}
                        </Tab>
                        <Tab eventKey="Shipped" title="Shipped">
                            <Row className="media friendlist-box align-items-center justify-content-center mb-5">

                                <Col>
                                    <i className="icon feather icon-hash text-c-purple" />
                                    <h6 className="m-0 d-inline text-c-purple">&nbsp;<b>OrderID</b></h6>

                                </Col>
                                <Col xs={4}>
                                    <i className="icon feather icon-mail  text-c-purple" />
                                    <h6 className="m-0 d-inline text-c-purple">&nbsp;<b>Email</b></h6>

                                </Col>

                                <Col style={{ marginLeft: '20px' }} className="media-body">
                                    <i className="icon feather icon-pie-chart text-c-purple" />
                                    <h6 className="m-0 d-inline text-c-purple">&nbsp;<b>Status</b></h6>
                                </Col>
                                <Col>

                                    <i className="icon feather icon-calendar text-c-purple" />
                                    <h6 className="m-0 d-inline text-c-purple">&nbsp;<b>Date Time</b></h6>

                                </Col>
                                <Col>
                                    <i className="icon feather icon-credit-card text-c-purple" />


                                    <h6 className="m-0 d-inline text-c-purple">&nbsp;<b>Payment Type</b></h6>

                                </Col>

                            </Row>
                            {tabContent}
                        </Tab>
                        <Tab eventKey="Completed" title="Completed">
                            <Row className="media friendlist-box align-items-center justify-content-center mb-5">

                                <Col>
                                    <i className="icon feather icon-hash text-c-purple" />
                                    <h6 className="m-0 d-inline text-c-purple">&nbsp;<b>OrderID</b></h6>

                                </Col>
                                <Col xs={4}>
                                    <i className="icon feather icon-mail  text-c-purple" />
                                    <h6 className="m-0 d-inline text-c-purple">&nbsp;<b>Email</b></h6>

                                </Col>

                                <Col style={{ marginLeft: '20px' }} className="media-body">
                                    <i className="icon feather icon-pie-chart text-c-purple" />
                                    <h6 className="m-0 d-inline text-c-purple">&nbsp;<b>Status</b></h6>
                                </Col>
                                <Col>

                                    <i className="icon feather icon-calendar text-c-purple" />
                                    <h6 className="m-0 d-inline text-c-purple">&nbsp;<b>Date Time</b></h6>

                                </Col>
                                <Col>
                                    <i className="icon feather icon-credit-card text-c-purple" />


                                    <h6 className="m-0 d-inline text-c-purple">&nbsp;<b>Payment Type</b></h6>

                                </Col>

                            </Row>
                            {tabContent}
                        </Tab>
                        <Tab eventKey="Delayed" title="Delayed">
                            <Row className="media friendlist-box align-items-center justify-content-center mb-5">

                                <Col>
                                    <i className="icon feather icon-hash text-c-purple" />
                                    <h6 className="m-0 d-inline text-c-purple">&nbsp;<b>OrderID</b></h6>

                                </Col>
                                <Col xs={4}>
                                    <i className="icon feather icon-mail  text-c-purple" />
                                    <h6 className="m-0 d-inline text-c-purple">&nbsp;<b>Email</b></h6>

                                </Col>

                                <Col style={{ marginLeft: '20px' }} className="media-body">
                                    <i className="icon feather icon-pie-chart text-c-purple" />
                                    <h6 className="m-0 d-inline text-c-purple">&nbsp;<b>Status</b></h6>
                                </Col>
                                <Col>

                                    <i className="icon feather icon-calendar text-c-purple" />
                                    <h6 className="m-0 d-inline text-c-purple">&nbsp;<b>Date Time</b></h6>

                                </Col>
                                <Col>
                                    <i className="icon feather icon-credit-card text-c-purple" />


                                    <h6 className="m-0 d-inline text-c-purple">&nbsp;<b>Payment Type</b></h6>

                                </Col>

                            </Row>
                            {tabContent}
                        </Tab>
                        <Tab eventKey="Cancelled" title="Cancelled">
                            <Row className="media friendlist-box align-items-center justify-content-center mb-5">

                                <Col>
                                    <i className="icon feather icon-hash text-c-purple" />
                                    <h6 className="m-0 d-inline text-c-purple">&nbsp;<b>OrderID</b></h6>

                                </Col>
                                <Col xs={4}>
                                    <i className="icon feather icon-mail  text-c-purple" />
                                    <h6 className="m-0 d-inline text-c-purple">&nbsp;<b>Email</b></h6>

                                </Col>

                                <Col style={{ marginLeft: '20px' }} className="media-body">
                                    <i className="icon feather icon-pie-chart text-c-purple" />
                                    <h6 className="m-0 d-inline text-c-purple">&nbsp;<b>Status</b></h6>
                                </Col>
                                <Col>

                                    <i className="icon feather icon-calendar text-c-purple" />
                                    <h6 className="m-0 d-inline text-c-purple">&nbsp;<b>Date Time</b></h6>

                                </Col>
                                <Col>
                                    <i className="icon feather icon-credit-card text-c-purple" />


                                    <h6 className="m-0 d-inline text-c-purple">&nbsp;<b>Payment Type</b></h6>

                                </Col>

                            </Row>
                            {tabContent}
                        </Tab>
                    </Tabs>
                </div>
            </div>
        </Aux>
    );
}

export default Orders;