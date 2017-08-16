import React, { Component } from 'react'
import "froala-editor/js/froala_editor.pkgd.min.js"
import "froala-editor/css/froala_editor.pkgd.min.css"
import "froala-editor/css/froala_style.min.css"
import 'font-awesome/css/font-awesome.css'
import FroalaEditor from 'react-froala-wysiwyg'
import Datetime from 'react-bootstrap-datetimepicker'
import 'react-bootstrap-datetimepicker/css/bootstrap-datetimepicker.min.css';
class ProfileAlumniPageEditAward extends Component {
     constructor(props) {
        super(props)
        this.state = {
            award_title: '',
            award_text: '',
            award_date: '',
        }
        this.onSubmitAward = this.onSubmitAward.bind(this)
    
    }

    onSubmitAward(event) {
        event.preventDefault()
        this.props.editAward(this.state)
    }
    navigateBack() {
        this.goBack();
    }
    render() {
        return (
            <div>
                <form onSubmit={this.onSubmitAward}>
                    <div className="x_title">
                        <label>Edit Award</label>
                        <div className="clearfix" />
                    </div>
                    <div className="form-group">
                        <label className="control-label col-md-3 col-sm-3 col-xs-12">Award Title <span className="required">*</span></label>
                        <div className="col-md-9 col-sm-9 col-xs-12">
                            <input type="text" className="form-control" value={this.state.award_title} onChange={(text) => this.setState({ award_title: text.target.value })} id="Award_title" placeholder="Title" required="required" />
                        </div>
                    </div>
                    <div className="form-group">
                         <label className="control-label col-md-3 col-sm-3 col-xs-12">Descrption <span className="required">*</span></label>
                        <div id="editor">
                            <FroalaEditor model={this.state.award_text} onModelChange={(text) => this.setState({ event_text: text })} />
                        </div>
                    </div>
                    <div className="form-group">
                            <label>  Award Date : </label>  <Datetime mode="date" defaultText={this.state.award_date} onDatetimeChange={(date) => this.setState({ award_date: date.target.Datetime })} />
                    </div>
                    <div className="form-group">
                        <div className="col-md-9 col-sm-9 col-xs-12 col-md-offset-3">
                            <button className="btn btn-danger">Delete</button>
                            <button type="reset" className="btn btn-primary">Reset</button>
                            <button type="submit" className="btn btn-success">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}
export default ProfileAlumniPageEditAward