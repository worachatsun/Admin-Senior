import React, { Component } from 'react'
import * as actions from '../actions'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import SideNavBar from './SideNavBar'
import TopNavBar from './TopNavBar'
import Footer from './Footer'
import axios from 'axios'
class NewsPageDetail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            news_title: 'SIT จัดแข่งขันตอบปัญหาวิชาการคอมพิวเตอร์ และเทคโนโลยีสารสนเทศ “ICT Challenge 2016”',
            news_text: 'SIT จัดแข่งขันตอบปัญหาวิชาการคอมพิวเตอร์ และเทคโนโลยีสารสนเทศ “ICT Challenge 2016” เมื่อวันจันทร์ที่ 7 พฤศจิกายน 2559 ที่ผ่านมา ณ อาคารเรียนรวม 2 และอาคารคณะเทคโนโลยีสารสนเทศ',
            picture: '',
            category: 'ทั้งหมด',
            news_role: 'Information news',
            expiry_date: ''
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
                                <h3>News :: Detail Page</h3>
                            </div>
                        </div>
                        <div className="clearfix" />
                        <br />
                        <div className="row">
                            <div className="col-md-12 col-sm-12 col-xs-12">
                                <div className="x_panel">
                                    <div className="x_title">
                                        <h2 className="news_main_title" id="news_title">{this.state.news_title}</h2>
                                        <div className="clearfix" />
                                    </div>
                                    <div className="x_content">
                                        <div className="col-md-7 col-sm-7 col-xs-12">
                                            <div className="main-image">
                                                <img src='https://www4.sit.kmutt.ac.th/files/story_pictures/IMG_0027.jpg' alt="..." />
                                            </div>
                                        </div>
                                        <div className="col-md-5 col-sm-5 col-xs-12" style={{ border: '0px solid #e5e5e5' }}>
                                            <h3 className="prod_title">{this.state.news_title}</h3>
                                            <div className>
                                                {this.state.news_text}
                                            </div>
                                            <br />
                                            <div className>
                                                <h2>Role</h2>
                                                <p>{this.state.news_role}</p>
                                            </div>
                                            <br />
                                            <div className>
                                                <h2>Category</h2>
                                                <p>{this.state.category}</p>
                                            </div>
                                            <br />
                                            <div className>
                                                <Link to='/News/edit' className="btn btn-info btn-lg">Edit</Link>
                                                <button type="button" className="btn btn-danger btn-lg">Delete</button>
                                            </div>
                                        </div>
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

export default NewsPageDetail