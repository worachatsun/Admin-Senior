import React, { Component } from 'react'
import ProfileAlumniTableRec from './ProfileAlumniTableRec'
import SideNavBar from '../SideNavBar'
import TopNavBar from '../TopNavBar'
import Footer from '../Footer'
class ProfileAlumniPageAll extends Component {
    render() {
        return (
            <div>
                <SideNavBar />
                <TopNavBar />
                <div className="right_col" role="main">
                    <div className>
                        <div className="page-title">
                            <div className="title_left">
                                <h3>Alumni Profile :: All Alumni</h3>
                            </div>

                        </div>
                        <div className="clearfix" />
                        <div className="row">
                            <div className="col-md-12 col-sm-12 col-xs-12">
                                <div className="x_panel">
                                    <div className="x_title">
                                        <h2>Alumni Table</h2>
                                        <div className="clearfix" />
                                    </div>
                                    <div className="x_content">
                                        <ProfileAlumniTableRec sizePerPage={10} />
                                    </div>
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

export default ProfileAlumniPageAll