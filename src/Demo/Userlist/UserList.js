import React from 'react';
import { Row, Col, Card, Table } from 'react-bootstrap';

import Aux from "../../hoc/_Aux";
import DEMO from "../../store/constant";

import avatar1 from '../../assets/images/user/avatar-1.jpg';
import avatar2 from '../../assets/images/user/avatar-2.jpg';
import avatar3 from '../../assets/images/user/avatar-3.jpg';

import { Link } from 'react-router-dom'
import Pagination from 'react-bootstrap/Pagination'
import { connect } from 'react-redux';
import * as useractions from '../../Actions/user-action';
class UserList extends React.Component {
    constructor(props) {
        super(props)
        this.state = { users: [], active: 1,maxpage:1, limit: 5, pageno: [1, 2, 3], open: false }
    }

    componentDidMount() {
        this.getUsers();
    }

    async changepage(value) {
        await this.setState({ active: value });
        await this.getUsers();

    }
    async getUsers() {
        await this.props.onGetUsers("page=" + this.state.active + "&limit=" + this.state.limit);
    }
    async updatepagination(current) {
        var max=1;
        max=this.props.totaluser/this.state.limit;
        console.log(max);
        this.setState({maxpage:max});
        if(current === 'initial')
        {
            let temparrr=[1,2,3];
            await this.setState({pageno: temparrr, active: 1 });
            await this.getUsers();
        }
        if(current === 'final')
        {
            let temp=max > Math.floor(this.props.totaluser/this.state.limit)?Math.floor(max)+1:Math.floor(max);
            let temparrr=[temp-2,temp-1,temp];
            await this.setState({pageno: temparrr, active: temp });
            await this.getUsers();
        }
        if (this.state.pageno[2] < max) {
            if (current === "next") {
                var temparr = [...this.state.pageno];
                for (let i = 0; i < temparr.length; i++) {
                    temparr[i] = temparr[i] + 1;
                }
                let tempactive = temparr[0];
                await this.setState({ pageno: temparr, active: tempactive });
                await this.getUsers();
            }
        }
        if (current === "prev") {
            if (this.state.pageno[0] !== 1) {
                var temparr = [...this.state.pageno];
                for (let i = 0; i < temparr.length; i++) {
                    temparr[i] = temparr[i] - 1;
                }
                let tempactive = temparr[0];
                await this.setState({ pageno: temparr, active: tempactive });
                await this.getUsers();
            }
        }
    }

    onDeleteUser(email) {
        this.props.onDelete(email, "page=" + this.state.active + "&limit=" + this.state.limit);
    }

    onBlockUser(email, status) {
        this.props.onBlock(email, status, "page=" + this.state.active + "&limit=" + this.state.limit);
    }
    onUpdateUser(id) {
        this.props.history.push("/updateuser/" + id);
    }

    render() {
        let items = this.state.pageno.map((value) => {
            return (<Pagination.Item key={value} onClick={() => { this.changepage(value) }} active={value === this.state.active}>
                {value}
            </Pagination.Item>)

        })
        let userList = this.props.users.map((user, i) => {
            return (<tr className="unread" key={i}>
                <td><img className="rounded-circle" style={{ width: '40px' }} src={avatar2} alt="activity-user" /></td>
                <td>
                    <h6 className="mb-1">{user.name}</h6>
                    <p className="m-0">{user.email}</p>
                </td>
                <td>
                    <h6 className="mb-1">{user.address}</h6>
                    <p className="m-0">{user.phonenumber}</p>

                </td>
                <td>
                    <h6 className="text-muted"><i className="fa fa-circle text-c-green f-10 m-r-15" />21 July 12:56</h6>
                </td>
                <td>
                    <Link to={"/profile/" + user._id}><span style={{width:'70px',display:'inline-block',textAlign:'center'}} className="label theme-bg2 text-white f-12">Update</span></Link>
                    <span style={{width:'70px',display:'inline-block',textAlign:'center'}} className="label theme-bg text-white f-12" onClick={() => { this.onBlockUser(user.email, user.status) }}>{user.status ? "Block" : "Unblock"}</span>
                    <span style={{width:'70px',display:'inline-block',textAlign:'center'}} className="label theme-bg3 text-white f-12" onClick={() => { this.onDeleteUser(user.email) }}>Delete</span>
                </td>
            </tr>)
        })
        return (
            <Aux>
                <Row>
                    <Col md={12} xl={12}>
                        <Card className='Recent-Users'>
                            <Card.Header>
                                <Card.Title as='h5'>Recent Users</Card.Title>
                            </Card.Header>
                            <Card.Body className='px-0 py-2'>
                                <Table responsive hover>
                                    <tbody>
                                        {userList}
                                    </tbody>
                                </Table>
                            </Card.Body>
                        </Card>
                            <div>
                                    <Pagination style={{display:'flex',width:'220px',margin:'auto'}}>
                                        <Pagination.First onClick={()=>{this.updatepagination("initial")}} />
                                        <Pagination.Prev onClick={() => { this.updatepagination("prev") }} />
                                        {items}
                                        <Pagination.Next onClick={() => { this.updatepagination("next") }} />
                                        <Pagination.Last onClick={()=>{this.updatepagination("final")}}/>
                                    </Pagination>
                            </div>
                    </Col>
                </Row>
            </Aux>
        );
    }
}
const mapStateToProps = (state) => {
   
    return {
        users: state.userReducer.users,
        totaluser: state.userReducer.totaluser
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onBlock: (email, status, filter) => dispatch(useractions.blockusers(email, status, filter)),
        onDelete: (email, filter) => dispatch(useractions.deleteusers(email, filter)),
        onGetUsers: (filter) => dispatch(useractions.fetchusers(filter))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
