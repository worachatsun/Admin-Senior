import React, { Component } from 'react'
import {Router , Route , Link , hashHistory } from 'react-router'

class SideNavBar extends Component {
    render() {
        return (
                <div className="col-md-3 left_col">
                    <div className="left_col scroll-view">
                        <div className="navbar nav_title" style={{ border: 0 }}>
                            <Link to="/Dashboard" className="site_title"><i className="fa fa-cloud"></i> <span>Alumni_KMUTT</span></Link>
                        </div>

                        <div className="clearfix"></div>

                        <div className="profile clearfix">
                            <div className="profile_pic">
                                <img src={require("../styles/images/img.jpg")} alt="..." className="img-circle profile_img" />
                            </div>
                            <div className="profile_info">
                                <span>Welcome,</span>
                                <h2>Admin_Pitty</h2>
                            </div>
                        </div>
                        <br />
                        <div id="sidebar-menu" className="main_menu_side hidden-print main_menu">
                            <div className="menu_section">
                                <h3>Live On</h3>
                                <ul className="nav side-menu">
                                    <li><Link to='/Dashboard'><i className="fa fa-line-chart"></i> Dashboard </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="menu_section">
                                <h3>Manage</h3>
                                <ul className="nav side-menu">
                                    <li><Link to='/News/All'><i className="fa fa-newspaper-o"></i> News </Link>
                                    </li>
                                    <li><Link to='/Events/All'><i className="fa fa-calendar-o"></i> Events </Link>
                                    </li>
                                    <li><Link to='/Donates/All'><i className="fa fa-heart"></i> Donate </Link>
                                    </li>
                                    <li><Link to='/Careers/All'><i className="fa fa-briefcase"></i> Career Opportunity </Link>
                                    </li>
                                    <li><Link to='/Alumni/All'><i className="fa fa-user"></i> Alumni Profile </Link>
                                    </li>
                                    <li><Link to="/Inbox"><i className="fa fa-comments"></i> Inbox Message </Link>
                                    </li>
                                </ul>
                            </div>

                        </div>
                        <div className="sidebar-footer hidden-small">
                            <Link to='/' data-toggle="tooltip" data-placement="top" title="Logout" >
                                <span className="glyphicon glyphicon-off" aria-hidden="true"></span>
                            </Link>
                        </div>
                    </div>
                </div>
        )
    }
}

export default SideNavBar