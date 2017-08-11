import React, { Component } from 'react'
import Donater from './DonatesTableDonaterRec'
import { Link } from 'react-router'
import SideNavBar from './SideNavBar'
import TopNavBar from './TopNavBar'
import Footer from './Footer'
class DonatesPageDetail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            picture: '',
            project_name: '55 ปี แห่งการสถาปนา',
            project_description: '55 ปี แห่งการสถาปนา 55 ปี แห่งการสถาปน 55 ปี แห่งการสถาปนา 55 ปี แห่งการสถาปน',
            donate_ways: '1.บริจาคเป็น เช็ค(Cheque) หรือเงินสด หรือธนาณัติ สั่งจ่ายในนาม "มหาวิทยาลัยโนโลยีพระจอมเกล้าธนบุรี',
            expiry_date: '',
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
                                <h3>Donation :: Detail Page</h3>
                            </div>
                        </div>
                        <div className="clearfix" />
                        <br />
                        <div className="row">
                            <div className="col-md-12 col-sm-12 col-xs-12">
                                <div className="x_panel">
                                    <div className="x_title">
                                        <h2 className="prod_main_title">Donation : {this.state.project_name}</h2>
                                        <div className="clearfix" />
                                    </div>
                                    <div className="x_content">
                                        <div className="col-md-7 col-sm-7 col-xs-12">
                                            <div className="main-image">
                                                <img src="https://blog.eduzones.com/images/blog/jipatar/20150806-1438834489.23-3.jpg" alt="..." />
                                            </div>
                                        </div>
                                        <div className="col-md-5 col-sm-5 col-xs-12" style={{ border: '0px solid #e5e5e5' }}>
                                            <h3 className="prod_title">{this.state.project_name}</h3>
                                            <div className>
                                                {this.state.project_description}
                                            </div>
                                            <br />
                                            <h3 className="prod_title">Ways to donate</h3>
                                            <div className>
                                                {this.state.donate_ways}
                                            </div>
                                            <br />
                                            <div className>
                                                <Link to='/Donates/Edit' className="btn btn-info btn-lg">Edit</Link>
                                                <button type="button" className="btn btn-danger btn-lg">Delete</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="clearfix" />
                                    <div className="col-md-12 col-sm-12 col-xs-12">
                                        <div className="x_panel">
                                            <div className="x_title">
                                                <h2>Donater</h2>
                                                <div className="clearfix" />
                                                <br />
                                            </div>
                                            <div className="x_content">
                                                <Donater sizePerPage={5} />
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

export default DonatesPageDetail