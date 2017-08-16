import React, { Component } from 'react';
import { Router, Route, Link, hashHistory } from 'react-router'
import SideNavBar from './SideNavBar'
import TopNavBar from './TopNavBar'
import Footer from './Footer'
class Dashboard extends Component {
    render() {
        return (
            <div>
                <SideNavBar />
                <TopNavBar />
                <div className="right_col" role="main">
                    <div className="row top_tiles">
                        <div className="animated flipInY col-lg-3 col-md-3 col-sm-6 col-xs-12">
                            <Link to='/News/All'>
                            <div className="tile-stats">
                                <div className="icon"><i className="fa fa-newspaper-o"></i></div>
                                <div className="count">15000</div>
                                <h3>News</h3>
                                <p>ดูข่าวที่แสดงอยู่ทั้งหมด</p>
                            </div>
                            </Link>
                        </div>
                        <div className="animated flipInY col-lg-3 col-md-3 col-sm-6 col-xs-12">
                            <Link to='/Events/All'>
                            <div className="tile-stats">
                                <div className="icon"><i className="fa fa-calendar-o"></i></div>
                                <div className="count">1500</div>
                                <h3>Events</h3>
                                <p>ดูกิจกรรมที่แสดงอยู่ทั้งหมด</p>
                            </div>
                            </Link>
                        </div>
                        <div className="animated flipInY col-lg-3 col-md-3 col-sm-6 col-xs-12">
                            <Link to='/Donates/All'>
                            <div className="tile-stats">
                                <div className="icon"><i className="fa fa-heart"></i></div>
                                <div className="count">190</div>
                                <h3>Donation</h3>
                                <p>ดูการบริจาคที่แสดงอยู่ทั้งหมด</p>
                            </div>
                            </Link>
                        </div>
                        <div className="animated flipInY col-lg-3 col-md-3 col-sm-6 col-xs-12">
                            <Link to='/Careers/All'>
                            <div className="tile-stats">
                                <div className="icon"><i className="fa fa-briefcase"></i></div>
                                <div className="count">100</div>
                                <h3>Career Opportunity</h3>
                                <p>ดูประกาศรับสมัครงานที่แสดงอยู่ทั้งหมด</p>
                            </div>
                            </Link>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default Dashboard;