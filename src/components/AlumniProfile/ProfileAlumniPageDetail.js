import React, { Component } from 'react'
import SideNavBar from '../SideNavBar'
import TopNavBar from '../TopNavBar'
import Footer from '../Footer'

import PageAward from './ProfilePageDetail(separate)/ProfileAlumniPageAward'
import PageAwardEdit from './ProfilePageDetail(separate)/ProfileAlumniPageEditAward'
import PageAwardAdd from './ProfilePageDetail(separate)/ProfileAlumniPageAddAward'

import PageCareer from './ProfilePageDetail(separate)/ProfileAlumniPageCareer'
import PageCareerEdit from './ProfilePageDetail(separate)/ProfileAlumniPageEditCareer'
import PageCareerAdd from './ProfilePageDetail(separate)/ProfileAlumniPageAddCareer'

import PageGraduate from './ProfilePageDetail(separate)/ProfileAlumniPageGraduate'
import PageGraduateEdit from './ProfilePageDetail(separate)/ProfileAlumniPageEditGraduate'
import PageGraduateAdd from './ProfilePageDetail(separate)/ProfileAlumniPageAddGraduate'

import { Router, Route, Link, hashHistory } from 'react-router'
class ProfileAlumniPageDetail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            picture: '',
            name: 'พิทวัส',
            surname: 'พิเศษสัจจะ',
            tel: '0840000000',
            email: '21515@gmail.com',
            role: 'คณะเทคโนโลยีสารสนเทศ',
            address: 'ซอย 23 แขวง บางมด กรุงเทพมหานคร ประเทศไทย',
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
                                <h3>Alumni Profile :: View Profile</h3>
                            </div>
                        </div>
                        <div className="clearfix" />
                        <div className="row">
                            <div className="col-md-12 col-sm-12 col-xs-12">
                                <div className="x_panel">
                                    <div className="x_title">
                                        <h2>View Profile <small>{this.state.name} {this.state.surname}</small></h2>
                                        <div className="clearfix" />
                                    </div>
                                    <div className="x_content">
                                        <div className="col-md-3 col-sm-3 col-xs-12 profile_left">
                                            <div className="profile_img">
                                                <div id="crop-avatar">
                                                    {/* Current avatar */}
                                                    <img className="img-responsive avatar-view" src={require("../../styles/images/img.jpg")} alt="Avatar" title="Change the avatar" />
                                                </div>
                                            </div>
                                            <h3>{this.state.name} {this.state.surname}</h3>
                                            <ul className="list-unstyled user_data">
                                                <li><i className="fa fa-graduation-cap" /><strong> Faculty </strong>: {this.state.role}
                                                </li>
                                                <li><i className="fa fa-phone" /><strong> Tel </strong>: {this.state.tel}
                                                </li>
                                                <li><i className="fa fa-envelope" /><strong> E-mail </strong>: {this.state.email}
                                                </li>
                                                <li><i className="fa fa-building" /><strong> Address </strong>: {this.state.address}
                                                </li>
                                            </ul>
                                            <Link to='/' className="btn btn-success"> <i className="fa fa-user"></i> <i className="fa fa-comments-o" /> </Link>
                                            <Link to='/Alumni/Edit' className="btn btn-success"><i className="fa fa-edit m-right-xs" />Edit Profile</Link>
                                            <br />
                                        </div>
                                        <div className="col-md-9 col-sm-9 col-xs-12">
                                            <div className role="tabpanel" data-example-id="togglable-tabs">
                                                <ul id="myTab" className="nav nav-tabs bar_tabs" role="tablist">
                                                    <li role="presentation" className="active"><a href="#tab_content1" role="tab" id="home-tab" data-toggle="tab" aria-expanded="false">Graduate History</a>
                                                    </li>
                                                    <li role="presentation" className><a href="#tab_content2" role="tab" id="profile-tab" data-toggle="tab" aria-expanded="false">Career History</a>
                                                    </li>
                                                    <li role="presentation" className><a href="#tab_content3" role="tab" id="profile-tab2" data-toggle="tab" aria-expanded="false">Award History</a>
                                                    </li>
                                                </ul>
                                                <div id="myTabContent" className="tab-content">
                                                    <div role="tabpanel" className="tab-pane fade active in" id="tab_content1" aria-labelledby="profile-tab">

                                                        <PageGraduate />
                                                        {/*<PageGraduateAdd>*/}
                                                        {/*<PageGraduateEdit>*/}
                                                    </div>
                                                    <div role="tabpanel" className="tab-pane fade" id="tab_content2" aria-labelledby="profile-tab">
                                                        <PageCareer />
                                                        {/*<PageCareerAdd>*/}
                                                        {/*<PageCareerEdit>*/}
                                                    </div>
                                                    <div role="tabpanel" className="tab-pane fade" id="tab_content3" aria-labelledby="profile-tab">
                                                        <PageAward />
                                                        {/*<PageAwardAdd>*/}
                                                        {/*<PageAwardEdit>*/}
                                                    </div>
                                                </div>
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

export default ProfileAlumniPageDetail