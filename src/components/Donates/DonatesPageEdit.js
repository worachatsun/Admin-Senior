import React, { Component } from 'react'
import "froala-editor/js/froala_editor.pkgd.min.js"
import "froala-editor/css/froala_editor.pkgd.min.css"
import "froala-editor/css/froala_style.min.css"
import 'font-awesome/css/font-awesome.css'
import { Link } from 'react-router'
import FroalaEditor from 'react-froala-wysiwyg'
import Datetime from 'react-bootstrap-datetimepicker'
import 'react-bootstrap-datetimepicker/css/bootstrap-datetimepicker.min.css';
import SideNavBar from '../SideNavBar'
import TopNavBar from '../TopNavBar'
import Footer from '../Footer'
class DonatesPageEdit extends Component {
    constructor(props) {
        super(props)
        this.state = {
            picture: '',
            project_name: '55 ปี แห่งการสถาปนา',
            project_description: '55 ปี แห่งการสถาปนา 55 ปี แห่งการสถาปน 55 ปี แห่งการสถาปนา 55 ปี แห่งการสถาปน',
            donate_ways: '1.บริจาคเป็น เช็ค(Cheque) หรือเงินสด หรือธนาณัติ สั่งจ่ายในนาม "มหาวิทยาลัยโนโลยีพระจอมเกล้าธนบุรี',
            expiry_date: '',
        }
        this.onSubmitDonate = this.onSubmitDonate.bind(this)

    }

    onSubmitDonate(event) {
        event.preventDefault()
        this.props.EditDonate(this.state)
    }
    navigateBack() {
        this.goBack();
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
                                <h3>Donation :: Edit Donate</h3>
                            </div>
                        </div>
                        <div className="clearfix" />
                        <div className="row">
                            <div className="col-md-12 col-sm-12 col-xs-12">
                                <div className="x_panel">
                                    <div className="x_title">
                                        <h3>Edit Donate</h3><small>{this.setState.project_name}</small>
                                        <div className="clearfix" />
                                    </div>
                                    <form onSubmit={this.onSubmitDonate} className="form-horizontal form-label-left">
                                        <div className="x_content">
                                            <div className="form-group">
                                                <label className="control-label col-md-3 col-sm-3 col-xs-12">Donate Cover Image <span className="required">*</span></label>
                                                <div className="col-md-9 col-sm-9 col-xs-12">
                                                    <input type="file" accept=".jpg, .png, .jpeg, .tiff|images/*" value={this.state.picture} onChange={(text) => this.setState({ picture: text.target.value })} className="form-control" id="main_image" required="required" />
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label className="control-label col-md-3 col-sm-3 col-xs-12">Project Donate Name <span className="required">*</span></label>
                                                <div className="col-md-9 col-sm-9 col-xs-12">
                                                    <input type="text" className="form-control" value={this.state.project_name} onChange={(text) => this.setState({ project_name: text.target.value })} id="news_title" placeholder="Title" required="required" />
                                                </div>
                                            </div>
                                            <div className="x_title">
                                                <label>Donate Description </label>
                                                <div className="clearfix" />
                                            </div>
                                            <div id="editor">
                                                <FroalaEditor model={this.state.project_description} onModelChange={(text) => this.setState({ project_description: text })} />
                                            </div>
                                            <br />
                                            <div className="x_title">
                                                <label>Ways to Donate</label>
                                                <div className="clearfix" />
                                            </div>
                                            <div id="editor">
                                                <FroalaEditor model={this.state.donate_ways} onModelChange={(text) => this.setState({ donate_ways: text })} />
                                            </div>
                                            <br />
                                            <div className="form-group">
                                                <label className="control-label col-md-3 col-sm-3 col-xs-12">Expiry Date </label>
                                                <div className="col-md-9 col-sm-9 col-xs-12">
                                                <Datetime  defaultText={'Choose Expiry Date'} onChange={(date) => this.setState({ expiry_date: date })} />
                                            </div>
                                            </div>
                                            <br />
                                            <div className="form-group">
                                                <div className="col-md-9 col-sm-9 col-xs-12 col-md-offset-3">
                                                    <Link to='/Donates/Detail' className="btn btn-danger">Cancel</Link>
                                                    <button type="reset" className="btn btn-primary">Reset</button>
                                                    <button type="submit" className="btn btn-success">Submit</button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
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

export default DonatesPageEdit