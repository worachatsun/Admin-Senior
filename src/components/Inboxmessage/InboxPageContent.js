import React, { Component } from 'react'
import '../../styles/css/chats/re.css'
import '../../styles/css/chats/chat.css'

import SideNavBar from '../SideNavBar'
import TopNavBar from '../TopNavBar'
import Footer from '../Footer'
import $ from 'jquery'

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
                                    <div className="x_title">
                                        <h2>Inbox Message</h2>
                                        <div className="clearfix" />
                                    </div>
                                    <div className="x_content">
                                        <div className="wrapper-chat">
                                            <div className="chatcontent">
                                                <div className="left">
                                                    <div className="top">
                                                        <input type="text" placeholder="Find Person to Talk.." />
                                                        <a href="javascript:;" className="search"></a>
                                                    </div>
                                                    <ul className="people" id="style-1">
                                                        <li className="person" data-chat="person1">
                                                            <img src="http://s13.postimg.org/ih41k9tqr/img1.jpg" alt="" />
                                                            <span className="name">Thomas Bangalter</span>
                                                            <span className="time">2:09 PM</span>
                                                            <span className="preview">I was wondering...</span>
                                                        </li>
                                                        <li className="person" data-chat="person2">
                                                            <img src="http://s3.postimg.org/yf86x7z1r/img2.jpg" alt="" />
                                                            <span className="name">Dog Woofson</span>
                                                            <span className="time">1:44 PM</span>
                                                            <span className="preview">I've forgotten how it felt before</span>
                                                        </li>
                                                        <li className="person" data-chat="person3">
                                                            <img src="http://s3.postimg.org/h9q4sm433/img3.jpg" alt="" />
                                                            <span className="name">Louis CK</span>
                                                            <span className="time">2:09 PM</span>
                                                            <span className="preview">But we’re probably gonna need a new carpet.</span>
                                                        </li>
                                                        <li className="person" data-chat="person4">
                                                            <img src="http://s3.postimg.org/quect8isv/img4.jpg" alt="" />
                                                            <span className="name">Bo Jackson</span>
                                                            <span className="time">2:09 PM</span>
                                                            <span className="preview">It’s not that bad...</span>
                                                        </li>
                                                        <li className="person" data-chat="person5">
                                                            <img src="http://s16.postimg.org/ete1l89z5/img5.jpg" alt="" />
                                                            <span className="name">Michael Jordan</span>
                                                            <span className="time">2:09 PM</span>
                                                            <span className="preview">Wasup for the third time like is you bling bitch</span>
                                                        </li>
                                                        <li className="person" data-chat="person6">
                                                            <img src="http://s30.postimg.org/kwi7e42rh/img6.jpg" alt="" />
                                                            <span className="name">Drake</span>
                                                            <span className="time">2:09 PM</span>
                                                            <span className="preview">howdoyoudoaspace</span>
                                                        </li>
                                                        <li className="person" data-chat="person7">
                                                            <img src="http://s30.postimg.org/kwi7e42rh/img6.jpg" alt="" />
                                                            <span className="name">Drake</span>
                                                            <span className="time">2:09 PM</span>
                                                            <span className="preview">howdoyoudoaspace</span>
                                                        </li>
                                                        <li className="person" data-chat="person6">
                                                            <img src="http://s30.postimg.org/kwi7e42rh/img6.jpg" alt="" />
                                                            <span className="name">Drake</span>
                                                            <span className="time">2:09 PM</span>
                                                            <span className="preview">howdoyoudoaspace</span>
                                                        </li>
                                                        <li className="person" data-chat="person7">
                                                            <img src="http://s30.postimg.org/kwi7e42rh/img6.jpg" alt="" />
                                                            <span className="name">Drake</span>
                                                            <span className="time">2:09 PM</span>
                                                            <span className="preview">howdoyoudoaspace</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="right">
                                                    <div className="top"><span>To: <span className="name">Dog Woofson</span></span>
                                                    </div>
                                                    <div className="chat" data-chat="person1">
                                                        <div className="conversation-start">
                                                            <span>Today, 6:48 AM</span>
                                                        </div>
                                                        <div className="bubble you">
                                                            Hello,
                                                    </div>
                                                        <div className="bubble you">
                                                            it's me.
                                                    </div>
                                                        <div className="bubble you">
                                                            I was wondering...
                                                    </div>

                                                    </div>
                                                    <div className="chat" data-chat="person2">
                                                        <div     id="style-1">
                                                            <div className="conversation-start">
                                                                <span>Today, 5:38 PM</span>
                                                            </div>
                                                            <div className="bubble you">
                                                                Hello, can you hear me?
                                                        </div>
                                                            <div className="bubble you">
                                                                I'm in California dreaming
                                                        </div>
                                                            <div className="bubble me">
                                                                ... about who we used to be.
                                                        </div>
                                                            <div className="bubble me">
                                                                Are you serious?
                                                        </div>
                                                            <div className="bubble you">
                                                                When we were younger and free...
                                                        </div>
                                                            <div className="bubble you">
                                                                I've forgotten how it felt before
                                                        </div>
                                                            <div className="bubble you">
                                                                Hello, can you hear me?
                                                        </div>
                                                            <div className="bubble you">
                                                                I'm in California dreaming
                                                        </div>
                                                            <div className="bubble me">
                                                                ... about who we used to be.
                                                        </div>
                                                            <div className="bubble me">
                                                                Are you serious?
                                                        </div>
                                                            <div className="bubble you">
                                                                When we were younger and free...
                                                        </div>
                                                            <div className="bubble you">
                                                                I've forgotten how it felt before
                                                        </div>

                                                        </div>
                                                    </div>
                                                    <div className="chat" data-chat="person3">
                                                        <div className="conversation-start">
                                                            <span>Today, 3:38 AM</span>
                                                        </div>
                                                        <div className="bubble you">
                                                            Hey human!
                                                    </div>
                                                        <div className="bubble you">
                                                            Umm... Someone took a shit in the hallway.
                                                    </div>
                                                        <div className="bubble me">
                                                            ... what.
                                                    </div>
                                                        <div className="bubble me">
                                                            Are you serious?
                                                    </div>
                                                        <div className="bubble you">
                                                            I mean...
                                                    </div>
                                                        <div className="bubble you">
                                                            It’s not that bad...
                                                    </div>
                                                        <div className="bubble you">
                                                            But we’re probably gonna need a new carpet.
                                                    </div>
                                                    </div>
                                                    <div className="chat" data-chat="person4">
                                                        <div className="conversation-start">
                                                            <span>Yesterday, 4:20 PM</span>
                                                        </div>
                                                        <div className="bubble me">
                                                            Hey human!
                                                    </div>
                                                        <div className="bubble me">
                                                            Umm... Someone took a shit in the hallway.
                                                    </div>
                                                        <div className="bubble you">
                                                            ... what.
                                                    </div>
                                                        <div className="bubble you">
                                                            Are you serious?
                                                    </div>
                                                        <div className="bubble me">
                                                            I mean...
                                                    </div>
                                                        <div className="bubble me">
                                                            It’s not that bad...
                                                    </div>
                                                    </div>
                                                    <div className="chat" data-chat="person5">
                                                        <div className="conversation-start">
                                                            <span>Today, 6:28 AM</span>
                                                        </div>
                                                        <div className="bubble you">
                                                            Wasup
                                                    </div>
                                                        <div className="bubble you">
                                                            Wasup
                                                    </div>
                                                        <div className="bubble you">
                                                            Wasup for the third time like is <br />you bling bitch
                                                    </div>

                                                    </div>
                                                    <div className="chat" data-chat="person6">
                                                        <div className="conversation-start">
                                                            <span>Monday, 1:27 PM</span>
                                                        </div>
                                                        <div className="bubble you">
                                                            So, how's your new phone?
                                                    </div>
                                                        <div className="bubble you">
                                                            You finally have a smartphone :D
                                                    </div>
                                                        <div className="bubble me">
                                                            Drake?
                                                    </div>
                                                        <div className="bubble me">
                                                            Why aren't you answering?
                                                    </div>
                                                        <div className="bubble you">
                                                            howdoyoudoaspace
                                                    </div>
                                                    </div>
                                                    <div className="chat" data-chat="person7">
                                                        <div className="conversation-start">
                                                            <span>Monday, 1:27 PM</span>
                                                        </div>
                                                        <div className="bubble you">
                                                            So, how's your new phone?
                                                    </div>
                                                        <div className="bubble you">
                                                            You finally have a smartphone :D
                                                    </div>
                                                        <div className="bubble me">
                                                            Drake?
                                                    </div>
                                                        <div className="bubble me">
                                                            Why aren't you answering?
                                                    </div>
                                                        <div className="bubble you">
                                                            howdoyoudoaspace
                                                    </div>
                                                    </div>
                                                    <div className="write">
                                                        <a className="write-link attach" />
                                                        <input type="file" id="upload" name="upload" style={{ visibility: 'hidden', width: 1, height: 1 }} multiple />
                                                        <input type="text" />
                                                        <a href="javascript:;" className="write-link send" />
                                                    </div>
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