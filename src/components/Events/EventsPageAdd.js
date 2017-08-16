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
import PlacesAutocomplete, { geocodeByAddress } from 'react-places-autocomplete'
import 'react-bootstrap-datetimepicker/css/bootstrap-datetimepicker.min.css';
import SideNavBar from '../SideNavBar'
import TopNavBar from '../TopNavBar'
import Footer from '../Footer'
import Moment from 'react-moment'
class EventsPageAdd extends Component {
    constructor(props) {
        super(props)
        this.state = {
            event_name: '',
            event_description: '',
            picture: '',
            person_limit: 0,
            regis_date_begin: 0,
            regis_date_end: 0,
            event_date_begin: 0,
            event_date_end: 0,
            location: 'Bangkok Thailand',
            event_owner_id: "id",
            event_coupon: "as",
            //event_owner_name: '',
            //event_owner_surname: '',
            //event_owner_tel: '',
           // event_owner_email: '',
           // event_owner_facebook: '',
           // event_owner_line: '',
        }
        this.onSubmitEvent = this.onSubmitEvent.bind(this)

    }

    onSubmitEvent(event) {
        event.preventDefault()
        this.props.createEvents(this.state)
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
                                <h3>Events :: Add Events</h3>
                            </div>
                        </div>
                        <div className="clearfix" />
                        <div className="row">
                            <div className="col-md-12 col-sm-12 col-xs-12">
                                <div className="x_panel">
                                    <div className="x_title">
                                        <h2>Add Events</h2>
                                        <div className="clearfix" />
                                    </div>
                                    <form onSubmit={this.onSubmitEvent} className="form-horizontal form-label-left">
                                        <div className="x_content">
                                            <div className="form-group">
                                                <label className="control-label col-md-3 col-sm-3 col-xs-12">Event Cover Image <span className="required">*</span></label>
                                                <div className="col-md-9 col-sm-9 col-xs-12">
                                                    <input type="file" accept=".jpg, .png, .jpeg, .tiff|images/*" className="form-control" value={this.state.picture} onChange={(text) => this.setState({ picture: text.target.value })} required="required" />
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label className="control-label col-md-3 col-sm-3 col-xs-12">Event Name <span className="required">*</span></label>
                                                <div className="col-md-9 col-sm-9 col-xs-12">
                                                    <input type="text" className="form-control" id="event_name" value={this.state.event_name} onChange={(text) => this.setState({ event_name: text.target.value })} placeholder="event name" required="required" />
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label className="control-label col-md-3 col-sm-3 col-xs-12">Persons Limit</label>
                                                <div className="col-md-9 col-sm-9 col-xs-12">
                                                    <input type="number" className="form-control" value={this.state.person_limit} onChange={(text) => this.setState({ person_limit: text.target.value })} id="person_limit" />
                                                </div>
                                            </div>
                                            <div className="x_title">
                                                <label>Events Detail </label>
                                                <div className="clearfix" />
                                            </div>
                                            <div id="editor">
                                                <FroalaEditor model={this.state.event_text} onModelChange={(text) => this.setState({ event_text: text })} />
                                            </div>
                                            <br />
                                            <div className="x_title">
                                                <label>Register Date</label>
                                                <div className="clearfix" />
                                            </div>
                                            <fieldset>
                                                <div className="control-group">
                                                    <div className="controls">
                                                        <div className="input-prepend input-group">
                                                            Start Register Date: <Datetime defaultText={'Start Register Date'} onChange={(date) => this.setState({ regis_date_begin: date})} />
                                                            End Register Date: <Datetime defaultText={'End Register Date'} onChange={(date) => this.setState({ regis_date_end: date })} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </fieldset>
                                            <div className="x_title">
                                                <label>Event Date</label>
                                                <div className="clearfix" />
                                            </div>
                                            <div className="form-horizontal">
                                                <fieldset>
                                                    <div className="control-group">
                                                        <div className="controls">
                                                            <div className="input-prepend input-group">
                                                                Start Event Date: <Datetime defaultText={'Start Event Date'} onChange={(date) => this.setState({ event_date_begin: date })} />
                                                                End Event Date: <Datetime defaultText={'End Event Date'} onChange={(date) => this.setState({ event_date_end: date })} />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </fieldset>
                                            </div>
                                            <div className="x_content">
                                                <div className="x_title">
                                                    <label>Event Location <span className="required">*</span></label>
                                                    <div className="clearfix" />
                                                </div>
                                                <div className="x_content" id="locationField">
                                                    <PlacesAutocomplete
                                                        value={this.state.location} onChange={(location) => this.setState({ location })} styles={locationStyle}
                                                    />
                                                </div>

                                            </div>
                                            <br />
                                            <div className="form-group">
                                                <div className="x_title">
                                                    <label>Event Owner <span className="required">*</span></label>
                                                    <div className="clearfix" />
                                                </div>
                                                <div className="col-md-6 col-sm-6 col-xs-12 form-group has-feedback">
                                                    <input type="text" value={this.state.event_owner_name} onChange={(text) => this.setState({ event_owner_name: text.target.value })} className="form-control has-feedback-left" id="owner_name" placeholder="First Name" required="required" />
                                                    <span className="fa fa-user form-control-feedback left" aria-hidden="true" />
                                                </div>
                                                <div className="col-md-6 col-sm-6 col-xs-12 form-group has-feedback">
                                                    <input type="text" value={this.state.event_owner_surname} onChange={(text) => this.setState({ event_owner_surname: text.target.value })} className="form-control" id="owner_surname" placeholder="Last Name" required="required" />
                                                    <span className="fa fa-user form-control-feedback right" aria-hidden="true" />
                                                </div>
                                                <div className="col-md-6 col-sm-6 col-xs-12 form-group has-feedback">
                                                    <input type="text" value={this.state.event_owner_email} onChange={(text) => this.setState({ event_owner_email: text.target.value })} className="form-control has-feedback-left" id="owner_email" placeholder="Email" required="required" />
                                                    <span className="fa fa-envelope form-control-feedback left" aria-hidden="true" />
                                                </div>
                                                <div className="col-md-6 col-sm-6 col-xs-12 form-group has-feedback">
                                                    <input type="text" value={this.state.event_owner_tel} onChange={(text) => this.setState({ event_owner_tel: text.target.value })} className="form-control" id="owner_phone" placeholder="Phone" required="required" />
                                                    <span className="fa fa-phone form-control-feedback right" aria-hidden="true" />
                                                </div>
                                                <div className="col-md-6 col-sm-6 col-xs-12 form-group has-feedback">
                                                    <input type="text" value={this.state.event_owner_facebook} onChange={(text) => this.setState({ event_owner_facebook: text.target.value })} className="form-control has-feedback-left" id="owner_facebook" placeholder="Facebook" required="required" />
                                                    <span className="fa fa-facebook form-control-feedback left" aria-hidden="true" />
                                                </div>
                                                <div className="col-md-6 col-sm-6 col-xs-12 form-group has-feedback">
                                                    <input type="text" value={this.state.event_owner_line} onChange={(text) => this.setState({ event_owner_line: text.target.value })} className="form-control" id="owner_line" placeholder="LineID" required="required" />
                                                    <span className="fa fa-comment form-control-feedback right" aria-hidden="true" />
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="col-md-9 col-sm-9 col-xs-12 col-md-offset-3">
                                                    <Link to='/Events/All' className="btn btn-danger">Cancel</Link>
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

export default connect(null, actions)(EventsPageAdd)