import React, { Component } from 'react'
import { Link } from 'react-router'
class ProfileAlumniPageGraduate extends Component {
    constructor(props) {
        super(props)
         this.state = {
            graduate_facualty: 'คณะเทคโนโลยีสารสนเทศ',
            graduate_department: 'ภาควิชาเทคโนโลยีสารสนเทศ',
            graduate_date: '04/29/17',
        }
    }
    render() {
        return (
            <div>
                <ul className="messages">
                    <li>
                        <div className="message_date">
                            <h3 className="date text-info">{this.state.graduate_date}</h3>
                        </div>
                        <div className="message_wrapper">
                            <h4 className="heading">{this.state.graduate_facualty}</h4>
                            <blockquote className="message">{this.state.graduate_department}</blockquote>
                            <br />
                            <Link to='/' className="btn btn-info"><i className="fa fa-edit m-right-xs" />Edit</Link>
                        </div>
                        <br />
                    </li>
                </ul>
                <div className="col-md-5 col-sm-5 col-xs-12 form-group pull-right ">
                    <div className="input-group">
                        <span className="input-group-btn">
                            <Link to='/'  className="btn btn-default btn-lg"><i className="fa fa-plus" /> Add Graduate</Link>
                        </span>
                    </div>
                </div>
            </div>
        )
    }
}
export default ProfileAlumniPageGraduate