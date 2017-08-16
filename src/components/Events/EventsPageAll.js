import React, { Component } from 'react'
import EventsTableMainRec from './EventsTableMainRec'
import { Link } from 'react-router'
import SideNavBar from '../SideNavBar'
import TopNavBar from '../TopNavBar'
import Footer from '../Footer'
class EventsPageAll extends Component {
    render() {
        return (
            <div>
                <SideNavBar />
                <TopNavBar />
                <div className="right_col" role="main">
                    <div className>
                        <div className="page-title">
                            <div className="title_left">
                                <h3>Events :: All Events</h3>
                            </div>
                            <div className="title_right">
                                <div className="col-md-5 col-sm-5 col-xs-12 form-group pull-right top_search">
                                    <div className="input-group">
                                        <span className="input-group-btn">
                                            <Link to='/Events/Add' className="btn btn-default btn-lg"><i className="fa fa-plus" /> Add Events</Link>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="clearfix" />
                        <div className="row">
                            <div className="col-md-12 col-sm-12 col-xs-12">
                                <div className="x_panel">
                                    <div className="x_title">
                                        <h2>Events Table</h2>
                                        <div className="clearfix" />
                                    </div>
                                    <div className="x_content">
                                        <EventsTableMainRec sizePerPage={10} />
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

export default EventsPageAll