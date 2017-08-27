import React, { Component } from 'react'
import SideNavBar from '../SideNavBar'
import TopNavBar from '../TopNavBar'
import Footer from '../Footer'
import '../../styles/css/chats/conversation.css'
import { Link } from 'react-router';

class InboxPageContent extends Component {
  render() {
    return (
      <div>
        <SideNavBar />
        <TopNavBar />
        <div className="right_col" role="main">
          <div>
            <div className="page-title">
              <div className="title_left">
                <h3>Inbox Message</h3>
              </div>
            </div>
            <div className="clearfix" />
            <div className="row">
              <div className="col-md-12 col-sm-12 col-xs-12">
                <div className="x_panel">

                  <div className="chat-conversation">
                    <div className="header">
                      <Link to='/Inbox' className="link">
                        <div style={{ padding: 16 }}>
                          <svg fill="currentColor" height={24} width={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{ transition: 'fill 0.3s ease' }}><path d="M0 0h24v24H0z" fill="none" /><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
                          </svg>
                        </div>
                        <div className="chat-title">
                          <h2>Pitawat Pisatsudjja</h2>
                        </div>
                      </Link>
                    </div>
                    <div className="content-chat">
                      <div className="chat-container">
                        <div className="chat-bg">
                          <div className="chat-box">
                            <div className="chat-box-ul">

                              <li className="line-bubble">
                                <div className="chat-wrap-right">
                                  <div className="chat-bubble-right">
                                    <div>
                                      <span className="chat-bubble-desc">
                                        <span>สวัสดีค่ะ คุณรู้ไหมกล้องรักคุณ</span>
                                      </span>
                                      <span className="chat-bubble-time">
                                        20:45
                                     </span>
                                    </div>
                                  </div>
                                </div>
                              </li>
                              <li className="line-bubble">
                                <div className="chat-wrap-left">
                                  <div className="chat-bubble-left">
                                    <div>
                                      <span className="chat-bubble-desc">
                                        <span>รู้ครับผม ผมก็รักกล้องครับ</span>
                                      </span>
                                      <span className="chat-bubble-time">
                                        20:48
                                     </span>
                                    </div>
                                  </div>
                                </div>
                              </li>         
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className="send" >
                            <form className="send-form">
                              <button className="form-icon"><svg fill="#888" height={24} width={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none" /><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" /></svg></button>
                              <input type="text" placeholder="Send a Messsage" className="send-text" />
                              <button className="form-icon"><svg fill="#CCC" height={24} width={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{ transition: 'fill 0.3s ease' }}><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" /><path d="M0 0h24v24H0z" fill="none" /></svg></button>
                            </form>
                          </div >
                        </div>
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

