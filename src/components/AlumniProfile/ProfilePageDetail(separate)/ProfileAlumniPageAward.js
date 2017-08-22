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
                
                        </div>
                        <br />
                    </li>
                </ul>
            </div>
        )
    }
}
export default ProfileAlumniPageAward