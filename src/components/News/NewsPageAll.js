import React, { Component } from 'react'
import { Router, Route, Link, hashHistory } from 'react-router'
import NewsTable from './NewsTableRec'
import SideNavBar from '../SideNavBar'
import TopNavBar from '../TopNavBar'
import Footer from '../Footer'
class NewsPageAll extends Component {
    render() {
        return (
            <div>
                <SideNavBar />
                <TopNavBar />
                <div className="right_col" role="main">
                    <div className>
                        <div className="page-title">
                            <div className="title_left">
                                <h3>News :: All news</h3>
                            </div>
                            <div className="title_right">
                                <div className="col-md-5 col-sm-5 col-xs-12 form-group pull-right top_search">
                                    <div className="input-group">
                                        <span className="input-group-btn">
                                            <Link to='/News/Add' className="btn btn-default btn-lg"><i className="fa fa-plus" /> Add News</Link>
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
                                        <h2>News Table</h2>
                                        <div className="clearfix" />
                                    </div>
                                    <div className="x_content">
                                        <NewsTable sizePerPage={10} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default NewsPageAll
