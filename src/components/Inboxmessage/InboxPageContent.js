import React, { Component } from 'react'
import SideNavBar from '../SideNavBar'
import TopNavBar from '../TopNavBar'
import Footer from '../Footer'
import '../../styles/css/chats/chat.css'
import { Link } from 'react-router';

class InboxPageContent extends Component {
    render() {

        return (
            <div>
                <SideNavBar />
                <TopNavBar />
                <div className="right_col" role="main">
                    <div className>
                        <div className="page-title">
                            <div className="title_left">
                                <h3>Inbox Message</h3>
                            </div>
                        </div>
                        <div className="clearfix" />
                        <div className="row">
                            <div className="col-md-12 col-sm-12 col-xs-12">
                                <div className="x_panel">
                                    <div className="chat-list">
                                        <div className="header">
                                            <h2 className="chat-title">Chats</h2>
                                            <div><input type="text" placeholder="search..." className="search-form" /></div>
                                            <div className="search-icon"><svg fill="currentColor" height={24} viewBox="0 0 24 24" width={24} xmlns="http://www.w3.org/2000/svg"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" /><path d="M0 0h24v24H0z" fill="none" /></svg></div>
                                            
                                        </div>
                                        <div className="chat-wrap-all">
                                            <div className="chat-list-member">
                                                <li className="chat-member">
                                                    <Link to='/Inbox/conversation' className="link">
                                                        <img src={require("../../styles/images/img.jpg")} alt className="img-member" />
                                                        <div className="chat">
                                                            <div className="title">
                                                                Pitawat Pisatsudjja
                                                    </div>
                                                            <div className="desc">
                                                                <span style={{ color: 'rgb(33, 150, 243)' }}>me: </span>chat si chatttt
                                                    </div>
                                                        </div>
                                                    </Link>
                                                </li>
                                                <li className="chat-member">
                                                    <Link to='/Inbox/conversation' className="link">
                                                        <img src={require("../../styles/images/img.jpg")} alt className="img-member" />
                                                        <div className="chat">
                                                            <div className="title">
                                                                Pitawat Pisatsudjja
                                                    </div>
                                                            <div className="desc">
                                                                <span style={{ color: 'rgb(33, 150, 243)' }}>me: </span>chat si chatttt
                                                    </div>
                                                        </div>
                                                    </Link>
                                                </li>
                                                <li className="chat-member">
                                                    <Link to='/Inbox/conversation' className="link">
                                                        <img src={require("../../styles/images/img.jpg")} alt className="img-member" />
                                                        <div className="chat">
                                                            <div className="title">
                                                                Pitawat Pisatsudjja
                                                    </div>
                                                            <div className="desc">
                                                                <span style={{ color: 'rgb(33, 150, 243)' }}>me: </span>chat si chatttt
                                                    </div>
                                                        </div>
                                                    </Link>
                                                </li>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default InboxPageContent