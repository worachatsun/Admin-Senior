import React, { Component } from 'react'
import "froala-editor/js/froala_editor.pkgd.min.js"
import "froala-editor/css/froala_editor.pkgd.min.css"
import "froala-editor/css/froala_style.min.css"
import 'font-awesome/css/font-awesome.css'
import FroalaEditor from 'react-froala-wysiwyg'
import PlacesAutocomplete, { geocodeByAddress } from 'react-places-autocomplete'
import { Link } from 'react-router'
import SideNavBar from '../SideNavBar'
import TopNavBar from '../TopNavBar'
import Footer from '../Footer'
class ProfileAlumniPageEditProfile extends Component {
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
        this.onSubmitProfile = this.onSubmitProfile.bind(this)
    }

    onSubmitProfile(event) {
        event.preventDefault()
        this.props.EditProfile(this.state)
    }
    navigateBack() {
        this.goBack();
    }
    render() {
        const locationStyle = {
            autocompleteContainer: {
                position: 'inherit',
                top: '100%',
                backgroundColor: 'white',
                border: '1px solid #555555',
                width: '100%'
            },
        }
        return (
            <div>
                <SideNavBar />
                <TopNavBar />
                <div className="right_col" role="main">
                    <div className>
                        <div className="page-title">
                            <div className="title_left">
                                <h3>Alumni Profile :: Edit Profile</h3>
                            </div>
                        </div>
                        <div className="clearfix" />

                        <div className="row">
                            <div className="col-md-12 col-sm-12 col-xs-12">
                                <div className="x_panel">
                                    <div className="x_title">
                                        <h2>Edit Profile<small>พิทวัส พิเศษสัจจะ</small></h2>
                                        <div className="clearfix" />
                                    </div>
                                    <form onSubmit={this.onSubmitProfile} className="form-horizontal form-label-left">
                                        <div className="x_content">
                                            <div className="form-group">
                                                <label className="control-label col-md-3 col-sm-3 col-xs-12">Alumni Image Profile <span className="required">*</span></label>
                                                <div className="col-md-9 col-sm-9 col-xs-12">
                                                    <input type="file" accept=".jpg, .png, .jpeg|images/*" value={this.state.picture} onChange={(text) => this.setState({ picture: text.target.value })} className="form-control" id="main_image" required="required" />
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label className="control-label col-md-3 col-sm-3 col-xs-12">Select Faculty</label>
                                                <div className="col-md-9 col-sm-9 col-xs-12">
                                                    <select value={this.state.role} onChange={(text) => this.setState({ role: text.target.value })} className="form-control">
                                                        <option>คณะวิศวกรรมศาสตร์</option>
                                                        <option>คณะพลังงานและวัสดุ</option>
                                                        <option>คณะวิทยาศาสตร์</option>
                                                        <option>คณะครุศาสตร์อุตสาหกรรม</option>
                                                        <option>คณะทรัพยากรชีวภาพและเทคโนโลยี</option>
                                                        <option>คณะเทคโนโลยีสารสนเทศ</option>
                                                        <option>คณะสถาปัตยกรรมศาสตร์</option>
                                                        <option>คณะศิลปศาสตร์</option>
                                                        <option>บัณฑิตร่วมด้านพลังงานและสิ่งแวดล้อม</option>
                                                        <option>บัณฑิตวิทยาลัยการจัดการและนวัตกรรม</option>
                                                        <option>คณะสถาบันวิทยาการหุ่นยนต์ภาคสนาม (วทม.)</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="x_title">
                                                    <label>Alumni Profile<span className="required">*</span></label>
                                                    <div className="clearfix" />
                                                </div>
                                                <div className="col-md-6 col-sm-6 col-xs-12 form-group has-feedback">
                                                    <input type="text" className="form-control has-feedback-left" value={this.state.name} onChange={(text) => this.setState({ name: text.target.value })} id="name" placeholder="First Name" required="required" />
                                                    <span className="fa fa-user form-control-feedback left" aria-hidden="true" />
                                                </div>
                                                <div className="col-md-6 col-sm-6 col-xs-12 form-group has-feedback">
                                                    <input type="text" className="form-control" id="surname" value={this.state.surname} onChange={(text) => this.setState({ surname: text.target.value })} placeholder="Last Name" required="required" />
                                                    <span className="fa fa-user form-control-feedback right" aria-hidden="true" />
                                                </div>
                                                <div className="col-md-6 col-sm-6 col-xs-12 form-group has-feedback">
                                                    <input type="text" className="form-control has-feedback-left" value={this.state.email} onChange={(text) => this.setState({ email: text.target.value })} id="email" placeholder="Email" required="required" />
                                                    <span className="fa fa-envelope form-control-feedback left" aria-hidden="true" />
                                                </div>
                                                <div className="col-md-6 col-sm-6 col-xs-12 form-group has-feedback">
                                                    <input type="text" className="form-control" value={this.state.tel} onChange={(text) => this.setState({ tel: text.target.value })} id="phone" placeholder="Phone" required="required" />
                                                    <span className="fa fa-phone form-control-feedback right" aria-hidden="true" />
                                                </div>
                                            </div>
                                            <br />
                                            <div className="x_content">
                                                <div className="x_title">
                                                    <label>Location <span className="required">*</span></label>
                                                    <div className="clearfix" />
                                                </div>
                                                <div className="x_content" id="locationField">
                                                    <PlacesAutocomplete
                                                        value={this.state.address} onChange={(address) => this.setState({ address })} styles={locationStyle}
                                                    />
                                                </div>
                                            </div>

                                            <div className="x_title">
                                                <label>Asset</label>
                                                <div className="clearfix" />
                                            </div>
                                            <div id="editor">
                                                <FroalaEditor model={this.state.donate_ways} onModelChange={(text) => this.setState({ donate_ways: text })} />
                                            </div>
                                            <br /><br /><br />
                                            <div className="form-group">
                                                <div className="col-md-9 col-sm-9 col-xs-12 col-md-offset-3">
                                                    <Link to='/Alumni/Detail' className="btn btn-danger">Cancel</Link>
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
export default ProfileAlumniPageEditProfile