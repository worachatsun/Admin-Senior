import React, { Component } from 'react'
import { Link } from 'react-router'
class ProfileAlumniPageCareer extends Component {
      constructor(props) {
        super(props)
        this.state = {
            career_title: 'ปตท.',
            career_text: 'พนักงานเติมน้ำมัน',
            career_date: '04/29/17',
        }
    }
    render() {
        return (
            <div>
                <ul className="messages">
                    <li>
                        <div className="message_date">
                            <h3 className="date text-info">{this.state.career_date}</h3>
                        </div>
                        <div className="message_wrapper">
                            <h4 className="heading">{this.state.career_title}</h4>
                            <blockquote className="message">{this.state.career_text}</blockquote>
                            <br />
                        </div>
                        <br />
                    </li>
                </ul>
            </div>
        )
    }
}
export default ProfileAlumniPageCareer