import React, { Component } from 'react'
import "froala-editor/js/froala_editor.pkgd.min.js"
import "froala-editor/css/froala_editor.pkgd.min.css"
import "froala-editor/css/froala_style.min.css"
import 'font-awesome/css/font-awesome.css'
import FroalaEditor from 'react-froala-wysiwyg'
import Datetime from 'react-bootstrap-datetimepicker'
import 'react-bootstrap-datetimepicker/css/bootstrap-datetimepicker.min.css';
import { Link } from 'react-router'
import SideNavBar from '../SideNavBar'
import TopNavBar from '../TopNavBar'
import Footer from '../Footer'
class NewsPageEdit extends Component {
    constructor(props) {
        super(props)
        this.state = {
            news_title: 'SIT จัดแข่งขันตอบปัญหาวิชาการคอมพิวเตอร์ และเทคโนโลยีสารสนเทศ “ICT Challenge 2016”',
            news_text: 'SIT จัดแข่งขันตอบปัญหาวิชาการคอมพิวเตอร์ และเทคโนโลยีสารสนเทศ “ICT Challenge 2016”',
            picture: '',
            category: 'คณะเทคโนโลยีสารสนเทศ',
            news_role: 'Alumni news',
            expiry_date: 0
        }

        this.onEditNews = this.onEditNews.bind(this)
    }

    onEditNews(event) {
        event.preventDefault()
        this.props.editNews(this.state)
    }
    navigateBack() {
        this.goBack();
    }

    render() {
        return (
            <div>
                <SideNavBar />
                <TopNavBar />
                <div className="right_col" role="main">
                    <div className>
                        <div className="page-title">
                            <div className="title_left">
                                <h3>News :: Edit News</h3>
                            </div>
                        </div>
                        <div className="clearfix" />

                        <div className="row">
                            <div className="col-md-12 col-sm-12 col-xs-12">
                                <div className="x_panel">
                                    <div className="x_title">
                                        <h2>Edit News<small>{this.state.news_title}</small></h2>
                                        <div className="clearfix" />
                                    </div>
                                    <form onSubmit={this.onEditNews} className="form-horizontal form-label-left">
                                        <div className="form-group">
                                            <label className="control-label col-md-3 col-sm-3 col-xs-12">News Cover Image <span className="required">*</span></label>
                                            <div className="col-md-9 col-sm-9 col-xs-12">
                                                <input type="file" accept=".jpg, .png, .jpeg, .tiff|images/*" className="form-control" id="main_image" required="required" />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label className="control-label col-md-3 col-sm-3 col-xs-12">News Title <span className="required">*</span></label>
                                            <div className="col-md-9 col-sm-9 col-xs-12">
                                                <input type="text" value={this.state.news_title} onChange={(text) => this.setState({ news_title: text.target.value })} className="form-control" id="news_title" placeholder="Title" required="required" />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label className="control-label col-md-3 col-sm-3 col-xs-12">Select Category News</label>
                                            <div className="col-md-9 col-sm-9 col-xs-12">
                                                <select value={this.state.news_role} onChange={(text) => this.setState({ news_role: text.target.value })} className="form-control" id="news_category">
                                                    <option>Alumni news</option>
                                                    <option>Event news</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label className="control-label col-md-3 col-sm-3 col-xs-12">Select Faculty</label>
                                            <div className="col-md-9 col-sm-9 col-xs-12">
                                                <select value={this.state.category} onChange={(text) => this.setState({ category: text.target.value })} className="form-control" id="news_role">
                                                    <option>ทั้งหมด</option>
                                                    <option>คณะวิศวกรรมศาสตร์</option>
                                                    <option>คณะพลังงานและวัสดุ</option>
                                                    <option>คณะวิทยาศาสตร์</option>
                                                    <option>คณะครุศาสตร์อุตสาหกรรม</option>
                                                    <option>คณะทรัพยากรชีวภาพและเทคโนโลยี</option>
                                                    <option>คณะเทคโนโลยีสารสนเทศ</option>
                                                    <option>คณะสถาปัตยกรรมศาสตร์</option>
                                                    <option>คณะศิลปศาสตร์</option>
                                                    <option>บัณฑิตร่วมด้านพลังงานและสิ่งแวดล้อม</option>
                                                    <option>บัณฑิตวิทยาลัยการจัดการและนวัตกรรม</option>
                                                    <option>คณะสถาบันวิทยาการหุ่นยนต์ภาคสนาม (วทม.)</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="x_title">
                                            <label>News Detail</label>
                                            <div className="clearfix"></div>
                                        </div>
                                        <div className="editor">
                                            <FroalaEditor model={this.state.news_text} onModelChange={(text) => this.setState({ news_text: text })} tag='textarea' />
                                        </div>
                                        <br />
                                        <div className="form-group">
                                            <label className="control-label col-md-3 col-sm-3 col-xs-12">Expiry Date </label>
                                            <div className="col-md-9 col-sm-9 col-xs-12">
                                                <Datetime  defaultText={'Choose Expiry Date'} onChange={(date) => this.setState({ expiry_date: date })} />
                                            </div>
                                        </div>
                                        <br></br>
                                        <div className="form-group">
                                            <div className="col-md-9 col-sm-9 col-xs-12 col-md-offset-3">
                                                <Link to='/News/Detail' className="btn btn-danger">Cancel</Link>
                                                <button type="reset" className="btn btn-primary">Reset</button>
                                                <button type="submit" className="btn btn-success">Submit</button>
                                            </div>
                                        </div>
                                    </form>
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
export default NewsPageEdit