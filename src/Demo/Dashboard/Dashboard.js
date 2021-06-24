import React from 'react';
import {Row, Col, Card, Table, Tabs, Tab} from 'react-bootstrap';
//import PieBasicChar from "../Charts/Nvd3Chart/PieBasicChart";
//import PieDonutChart from "../Charts/Nvd3Chart/PieDonutChart";
import Aux from "../../hoc/_Aux";
//import DEMO from "../../store/constant";
import Index from "../Charts/Nvd3Chart/index";
// import avatar1 from '../../assets/images/user/avatar-1.jpg';
// import avatar2 from '../../assets/images/user/avatar-2.jpg';
// import avatar3 from '../../assets/images/user/avatar-3.jpg';
import Admintable from './Admintable';

class Dashboard extends React.Component {
    render() {
       const tabContent = (
            <Aux>
                    <div className="media friendlist-box align-items-center justify-content-center m-b-20">
                    
                        <div className="media-body">
                            <i className="icon feather icon-hash text-c-purple"/>
                            <h6 className="m-0 d-inline text-c-purple">&nbsp;&nbsp;&nbsp;<b>Profile Photo</b></h6>
                        </div>
                        <div className="media-body">
                        <i className="icon feather icon-mail  text-c-purple"/>
                            <h6 className="m-0 d-inline text-c-purple">&nbsp;&nbsp;&nbsp;<b>Admin Name</b></h6>
                        </div>
                        
                        <div className="media-body">
                        <i className="icon feather icon-calendar text-c-purple"/>
                            <h6 className="m-0 d-inline text-c-purple">&nbsp;&nbsp;&nbsp;<b>Date Time</b></h6>
                        </div>
                        <div className="media-body">
                        <i className="icon feather icon-pie-chart text-c-purple"/>
                            <h6 className="m-0 d-inline text-c-purple">&nbsp;&nbsp;&nbsp;<b>Status</b></h6>
                        </div>
                 </div>
           </Aux>
       );

        return (
            <Aux>
                <Row>
                    <Col md={6} xl={3}>
                        <Card>
                            <Card.Body>
                                <h6 className='mb-4'>Total Booking</h6>
                                <div className="row d-flex align-items-center">
                                    <div className="col-9">
                                        <h3 className="f-w-300 d-flex align-items-center m-b-0"><i className="feather icon-arrow-up text-c-green f-30 m-r-5"/> $249.95</h3>
                                    </div>

                                    <div className="col-3 text-right">
                                        <p className="m-b-0">50%</p>
                                    </div>
                                </div>
                                <div className="progress m-t-30" style={{height: '7px'}}>
                                    <div className="progress-bar progress-c-theme" role="progressbar" style={{width: '25%'}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"/>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6} xl={3}>
                        <Card>
                            <Card.Body>
                                <h6 className='mb-4'>Todays bootking</h6>
                                <div className="row d-flex align-items-center">
                                    <div className="col-9">
                                        <h3 className="f-w-300 d-flex align-items-center m-b-0"><i className="feather icon-arrow-down text-c-red f-30 m-r-5"/> $2.942.32</h3>
                                    </div>

                                    <div className="col-3 text-right">
                                        <p className="m-b-0">36%</p>
                                    </div>
                                </div>
                                <div className="progress m-t-30" style={{height: '7px'}}>
                                    <div className="progress-bar progress-c-theme2" role="progressbar" style={{width: '25%'}} aria-valuenow="35" aria-valuemin="0" aria-valuemax="100"/>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6} xl={3}>
                        <Card>
                            <Card.Body>
                                <h6 className='mb-4'>Cancelled Order</h6>
                                <div className="row d-flex align-items-center">
                                    <div className="col-9">
                                        <h3 className="f-w-300 d-flex align-items-center m-b-0"><i className="feather icon-arrow-up text-c-green f-30 m-r-5"/> $8.638.32</h3>
                                    </div>

                                    <div className="col-3 text-right">
                                        <p className="m-b-0">70%</p>
                                    </div>
                                </div>
                                <div className="progress m-t-30" style={{height: '7px'}}>
                                    <div className="progress-bar progress-c-theme" role="progressbar" style={{width: '25%'}} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"/>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6} xl={3}>
                        <Card>
                            <Card.Body>
                                <h6 className='mb-4'>Today's Income</h6>
                                <div className="row d-flex align-items-center">
                                    <div className="col-9">
                                        <h3 className="f-w-300 d-flex align-items-center m-b-0"><i className="feather icon-arrow-up text-c-green f-30 m-r-5"/> $249.95</h3>
                                    </div>

                                    <div className="col-3 text-right">
                                        <p className="m-b-0">50%</p>
                                    </div>
                                </div>
                                <div className="progress m-t-30" style={{height: '7px'}}>
                                    <div className="progress-bar progress-c-theme" role="progressbar" style={{width: '25%'}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"/>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={12}>
                        <Card>
                            <Card.Body>
                                <Index/>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={12}>
                        <Card>
                            <Card.Header>
                                <Card.Title as='h5'>Admin Table</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Admintable/>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Aux>
        );
    }
}

export default Dashboard;