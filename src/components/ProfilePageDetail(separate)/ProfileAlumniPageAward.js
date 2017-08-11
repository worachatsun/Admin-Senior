import React, { Component } from 'react'
import { Link } from 'react-router'
class ProfileAlumniPageAward extends Component {
    constructor(props) {
        super(props)
        this.state = {
            award_title: 'IT3K 2017',
            award_text: 'ได้ที่ 1 E-sport',
            award_date: '03/29/17',
        }
    }
    render() {
        return (
            <div>
                <ul className="messages">
                    <li>
                        <div className="message_date">
                            <h3 className="date text-info">{this.state.award_date}</h3>
                        </div>
                        <div className="message_wrapper">
                            <h4 className="heading">{this.state.award_title}</h4>
                            <blockquote className="message">{this.state.award_text}</blockquote>
                            <br />
                            <Link to='' className="btn btn-info"><i className="fa fa-edit m-right-xs" />Edit</Link>
                        </div>
                        <br />
                    </li>
                </ul>
                <div className="col-md-5 col-sm-5 col-xs-12 form-group pull-right ">
                    <div className="input-group">
                        <span className="input-group-btn">
                            <Link to='' className="btn btn-default btn-lg"><i className="fa fa-plus" /> Add Award</Link>
                        </span>
                    </div>
                </div>
            </div>
        )
    }
}
export default ProfileAlumniPageAward