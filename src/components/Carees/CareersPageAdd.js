import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../actions'
import { Link } from 'react-router'
import "froala-editor/js/froala_editor.pkgd.min.js"
import "froala-editor/css/froala_editor.pkgd.min.css"
import "froala-editor/css/froala_style.min.css"
import 'font-awesome/css/font-awesome.css'
import FroalaEditor from 'react-froala-wysiwyg'
import Datetime from 'react-bootstrap-datetimepicker'
import 'react-bootstrap-datetimepicker/css/bootstrap-datetimepicker.min.css';
import SideNavBar from '../SideNavBar'
import TopNavBar from '../TopNavBar'
import Footer from '../Footer'
class CareersPageAdd extends Component {
    constructor(props) {
        super(props)
        this.state = {
            picture: '',
            career_name: '',
            career_description: '',
            qualification: '',
            capacity: 0,
            company: '',
            salary_min: 0,
            salary_max: 0,
            information: '',
            expiry_date: ''
        }
        this.onSubmitCareer = this.onSubmitCareer.bind(this)

    }

    onSubmitCareer(event) {
        event.preventDefault()
        this.props.createCareers(this.state)
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
                                <h3>Career Opportunity :: Add Career</h3>
                            </div>
                        </div>
                        <div className="clearfix" />
                        <div className="row">
                            <div className="col-md-12 col-sm-12 col-xs-12">
                                <div className="x_panel">
                                    <div className="x_title">
                                        <h3>Add Career</h3>
                                        <div className="clearfix" />
                                    </div>
                                    <form onSubmit={this.onSubmitCareer} className="form-horizontal form-label-left">
                                        <div className="x_content">
                                            <div className="form-group">
                                                <label className="control-label col-md-3 col-sm-3 col-xs-12">Career Cover Image <span className="required">*</span></label>
                                                <div className="col-md-9 col-sm-9 col-xs-12">
                                                    <input type="file" accept=".jpg, .png, .jpeg, .tiff|images/*" value={this.state.picture} onChange={(text) => this.setState({ picture: text.target.value })} className="form-control" id="main_image" required="required" />
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label className="control-label col-md-3 col-sm-3 col-xs-12">Career Name <span className="required">*</span></label>
                                                <div className="col-md-9 col-sm-9 col-xs-12">
                                                    <input type="text" className="form-control" value={this.state.career_name} onChange={(text) => this.setState({ career_name: text.target.value })} id="career_name" required="required" placeholder="Title" />
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label className="control-label col-md-3 col-sm-3 col-xs-12">Capacity</label>
                                                <div className="col-md-9 col-sm-9 col-xs-12">
                                                    <input type="number" className="form-control" value={this.state.capacity} onChange={(text) => this.setState({ capacity: text.target.value })} id="capacity" />
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label className="control-label col-md-3 col-sm-3 col-xs-12">Company Name</label>
                                                <div className="col-md-9 col-sm-9 col-xs-12">
                                                    <input type="text" className="form-control" value={this.state.company} onChange={(text) => this.setState({ company: text.target.value })}  placeholder="company name" />
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label className="control-label col-md-3 col-sm-3 col-xs-12">Salary</label>
                                                <div className="col-md-9 col-sm-9 col-xs-12">
                                                    <input type="number" className="form-control" value={this.state.salary_min} onChange={(text) => this.setState({ salary_min: text.target.value })} id="salary_min" placeholder="min salary" />
                                                    <input type="number" className="form-control" value={this.state.salary_max} onChange={(text) => this.setState({ salary_max: text.target.value })} id="salary_max" placeholder="max salary" />
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="x_title">
                                                    <label>Career Description</label>
                                                    <div className="clearfix" />
                                                </div>
                                                <div id="editor">
                                                    <FroalaEditor model={this.state.career_description} onModelChange={(text) => this.setState({ career_description: text })} />
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="x_title">
                                                    <label>Qualification</label>
                                                    <div className="clearfix" />
                                                </div>
                                                <div id="editor">
                                                    <FroalaEditor model={this.state.qualification} onModelChange={(text) => this.setState({ qualification: text })} />
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="x_title">
                                                    <label>Information</label>
                                                    <div className="clearfix" />
                                                </div>
                                                <div id="editor">
                                                    <FroalaEditor model={this.state.information} onModelChange={(text) => this.setState({ information: text })} />
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label className="control-label col-md-3 col-sm-3 col-xs-12">Expiry Date </label>
                                                <div className="col-md-9 col-sm-9 col-xs-12">
                                                    <Datetime defaultText={'Choose Careers Expire Date'} onDatetimeChange={(date) => this.setState({ expiry_date: date })} />
                                                </div>
                                            </div>
                                            <br />
                                            <div className="form-group">
                                                <div className="col-md-9 col-sm-9 col-xs-12 col-md-offset-3">
                                                    <Link to='/Careers/All' className="btn btn-danger">Cancel</Link>
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
export default connect(null, actions)(CareersPageAdd)