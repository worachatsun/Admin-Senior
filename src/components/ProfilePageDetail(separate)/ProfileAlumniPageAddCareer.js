import React, { Component } from 'react'
import "froala-editor/js/froala_editor.pkgd.min.js"
import "froala-editor/css/froala_editor.pkgd.min.css"
import "froala-editor/css/froala_style.min.css"
import 'font-awesome/css/font-awesome.css'
import FroalaEditor from 'react-froala-wysiwyg'
import Datetime from 'react-bootstrap-datetimepicker'
import 'react-bootstrap-datetimepicker/css/bootstrap-datetimepicker.min.css';

class ProfileAlumniPageAddCareer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            career_title: '',
            career_text: '',
            career_date: '',
        }
        this.onSubmitCareer = this.onSubmitCareer.bind(this)

    }

    onSubmitCareer(event) {
        event.preventDefault()
        this.props.createCareer(this.state)
    }
    navigateBack() {
        this.goBack();
    }
    render() {
        return (
            <div>
                <form onSubmit={this.onSubmitCareer}>
                    <div className="x_title">
                        <label>Add Career</label>
                        <div className="clearfix" />
                    </div>
                    <div className="form-group">
                        <label className="control-label col-md-3 col-sm-3 col-xs-12">Career Title <span className="required">*</span></label>
                        <div className="col-md-9 col-sm-9 col-xs-12">
                            <input type="text" className="form-control" value={this.state.career_title} onChange={(text) => this.setState({ career_title: text.target.value })}  placeholder="Title" required="required" />
                        </div>
                    </div>
                    <div className="form-group">
                         <label className="control-label col-md-3 col-sm-3 col-xs-12">Descrption <span className="required">*</span></label>
                        <div id="editor">
                            <FroalaEditor model={this.state.career_text} onModelChange={(text) => this.setState({ career_text: text })} />
                        </div>
                    </div>
                    <div className="form-group">
                            <label>  Career Date : </label><Datetime mode="date" defaultText={this.state.career_date} onDatetimeChange={(date) => this.setState({ career_date: date.target.Datetime })} />
                    </div>
                    <div className="form-group">
                        <div className="col-md-9 col-sm-9 col-xs-12 col-md-offset-3">
                            <a href="newsdetail.html" className="btn btn-danger">Cancel</a>
                            <button type="reset" className="btn btn-primary">Reset</button>
                            <button type="submit" className="btn btn-success">Add</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}
export default ProfileAlumniPageAddCareer