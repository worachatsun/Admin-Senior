import React, { Component } from 'react'
import EventsTableJoinerRec from './EventsTableJoinerRec'
import { Link } from 'react-router'
import SideNavBar from './SideNavBar'
import TopNavBar from './TopNavBar'
import Footer from './Footer'
import Moment from 'react-moment'
class EventsPageDetail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            event_name: 'ราตรีบางมด 2558',
            event_text: 'ตัวแทนนักศึกษาชมรมศิษย์เก่า เชิญเข้าร่วมงาน “ ราตรีบางมด จัดขึ้นในวันอาทิตย์ที 1 กุมภาพันธ์ 2558 ณ สนามฟุตบอลของมหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรีงานราตรีบางมดจัดขึ้นในวันที่ 1 กุมภาพันธ์ ของทุกปี ซึ่งเป็นวันคล้ายวันสถาปนาของมหาวิทยาลัย',
            picture: '',
            person_limit: 1500,
            regis_date_begin: 1494523920000,
            regis_date_end: 1494523920000,
            event_date_begin: 1494523920000,
            event_date_end: 1494523920000,
            location: 'มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี ถนน ประชาอุทิศ แขวง บางมด กรุงเทพมหานคร ประเทศไทย',
            event_owner_name: 'Pitto',
            event_owner_surname: 'Pitdd',
            event_owner_tel: '0846590000',
            event_owner_email: '123@gmail.com',
            event_owner_facebook: 'pitjack123',
            event_owner_line: 'pitjacksss',
        }
    }
    render() {
        return (
            <div>
                <SideNavBar />
                <TopNavBar />
                <div className="right_col" role="main">
                    <div className>
                        <div className="page-title">
                            <div className="title_left">
                                <h3>Events :: Detail Page</h3>
                            </div>
                        </div>
                        <div className="clearfix" />
                        <br />
                        <div className="row">
                            <div className="col-md-12 col-sm-12 col-xs-12">
                                <div className="x_panel">
                                    <div className="x_title">
                                        <h2 className="prod_main_title">Events : {this.state.event_name}</h2>
                                        <div className="clearfix" />
                                    </div>
                                    <div className="x_content">
                                        <div className="col-md-7 col-sm-7 col-xs-12">
                                            <div className="main-image">
                                                <img src='https://blog.eduzones.com/images/blog/jipatar/20150129-1422521992.8644-8.jpg' alt="..." />
                                            </div>

                                        </div>
                                        <div className="col-md-5 col-sm-5 col-xs-12" style={{ border: '0px solid #e5e5e5' }}>
                                            <h3 className="prod_title">{this.state.event_name}</h3>
                                            <div className>
                                                {this.state.event_text}
                                            </div>
                                            <br />
                                            <div className>
                                                <h2>Person limit</h2>
                                                <p>{this.state.person_limit}</p>
                                            </div>
                                            <br />
                                            <div className>
                                                <h2>Registration Date</h2>
                                                <p>From :<br /> <Moment format="YYYY/MM/DD HH:mm">{this.state.regis_date_begin}</Moment></p>
                                                <p>To :<br /> <Moment format="YYYY/MM/DD HH:mm">{this.state.regis_date_end}</Moment></p>
                                            </div>
                                            <br />
                                            <div className>
                                                <h2>Event Date</h2>
                                                <p>From :<br /> <Moment format="YYYY/MM/DD HH:mm">{this.state.event_date_begin}</Moment></p>
                                                <p>To :<br /> <Moment format="YYYY/MM/DD HH:mm">{this.state.regis_date_end}</Moment></p>
                                            </div>
                                            <br />
                                            <div className>
                                                <h2>Location</h2>
                                                <p>{this.state.location}</p>
                                            </div>
                                            <br />
                                            <div className>
                                                <h2>Event owner</h2>
                                                <p>Name : {this.state.event_owner_name} </p>
                                                <p>Surname : {this.state.event_owner_surname}  </p>
                                                <p>Tel. : {this.state.event_owner_tel}  </p>
                                                <p>E-mail : {this.state.event_owner_email}  </p>
                                                <p>Facebook : {this.state.event_owner_facebook}  </p>
                                                <p>line : {this.state.event_owner_line}  </p>
                                            </div>
                                            <br />
                                            <div className>
                                                <Link to='/Events/Edit' className="btn btn-info btn-lg">Edit</Link>
                                                <button type="button" className="btn btn-danger btn-lg">Delete</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="clearfix" />
                                    <div className="col-md-12 col-sm-12 col-xs-12">
                                        <div className="x_panel">
                                            <div className="x_title">
                                                <h2>Event Joiner</h2>
                                                <div className="clearfix" />
                                                <br />
                                            </div>
                                            <div className="x_content">
                                                <EventsTableJoinerRec sizePerPage={5} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>

        )
    }
}

export default EventsPageDetail