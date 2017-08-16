import React, { Component } from 'react'
import "froala-editor/js/froala_editor.pkgd.min.js"
import "froala-editor/css/froala_editor.pkgd.min.css"
import "froala-editor/css/froala_style.min.css"
import 'font-awesome/css/font-awesome.css'
import FroalaEditor from 'react-froala-wysiwyg'
import Datetime from 'react-bootstrap-datetimepicker'
import 'react-bootstrap-datetimepicker/css/bootstrap-datetimepicker.min.css';
class ProfileAlumniPageAddGraduate extends Component {
    constructor(props) {
        super(props)
        this.state = {
            graduate_facualty: '',
            graduate_department: '',
            graduate_date: '',
        }
        this.onSubmitGraduate = this.onSubmitGraduate.bind(this)

    }

    onSubmitGraduate(event) {
        event.preventDefault()
        this.props.createGraduate(this.state)
    }
    navigateBack() {
        this.goBack();
    }
    render() {
        return (
            <div>
                <form onSubmit={this.onSubmitGraduate}>
                    <div className="x_title">
                        <h3>Add Graduated</h3>
                        <div className="clearfix" />
                    </div>
                    <div className="form-group">
                        <label className="control-label col-md-3 col-sm-3 col-xs-12">Select Faculty</label>
                        <div className>
                            <select className="form-control" value={this.state.graduate_facualty} onChange={(text) => this.setState({ graduate_facualty: text.target.value })}  >
                                <option>คณะวิศวกรรมศาสตร์</option>
                                <option>คณะพลังงานและวัสดุ</option>
                                <option>คณะวิทยาศาสตร์</option>
                                <option>คณะครุศาสตร์อุตสาหกรรม</option>
                                <option>คณะทรัพยากรชีวภาพและเทคโนโลยี</option>
                                <option>คณะเทคโนโลยีสารสนเทศ</option>
                                <option>คณะสถาปัตยกรรมศาสตร์</option>
                                <option>คณะศิลปศาสตร์</option>
                                <option>คณะสถาบันวิทยาการหุ่นยนต์ภาคสนาม (วทม.)</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="control-label col-md-3 col-sm-3 col-xs-12">Select Department</label>
                        <div className>
                            <select className="select2_group form-control" value={this.state.graduate_department} onChange={(text) => this.setState({ graduate_department: text.target.value })} >
                                <option>ไม่มี</option>
                                <optgroup label="คณะวิศวกรรมศาสตร์">
                                    <option>ภาควิชาวิศวกรรมไฟฟ้า</option>
                                    <option>ภาควิชาวิศวกรรมคอมพิวเตอร์</option>
                                    <option>ภาควิชาวิศวกรรมอิเล็กทรอนิกส์และโทรคมนาคม</option>
                                    <option>ภาควิชาวิศวกรรมระบบควบคุมและเครื่องมือวัด</option>
                                    <option>ภาควิชาวิศวกรรมเครื่องกล</option>
                                    <option>ภาควิชาวิศวกรรมโยธา</option>
                                    <option>ภาควิชาวิศวกรรมสิ่งแวดล้อม</option>
                                    <option>ภาควิชาวิศวกรรมอุตสาหการ</option>
                                    <option>ภาควิชาวิศวกรรมเครื่องมือและวัสดุ</option>
                                    <option>ภาควิชาวิศวกรรมเคมี</option>
                                    <option>ภาควิชาวิศวกรรมอาหาร</option>
                                    <option>หลักสูตรวิศวกรรมชีวภาพ</option>
                                    <option>หลักสูตรวาริชวิศวกรรม</option>
                                </optgroup>
                                <optgroup label="คณะพลังงานและวัสดุ">
                                    <option>สายวิชาเทคโนโลยีพลังงาน</option>
                                    <option>สายวิชาเทคโนโลยีการจัดการพลังงาน</option>
                                    <option>สายวิชาเทคโนโลยีวัสดุ</option>
                                    <option>สายวิชาเทคโนโลยีสิ่งแวดล้อม</option>
                                    <option>สายวิชาเทคโนโลยีอุณหภาพ</option>
                                </optgroup>
                                <optgroup label="คณะครุศาสตร์อุตสาหกรรม">
                                    <option>ภาควิชาครุศาสตร์โยธา</option>
                                    <option>ภาควิชาครุศาสตร์ไฟฟ้า</option>
                                    <option>ภาควิชาครุศาสตร์เครื่องกล</option>
                                    <option>ภาควิชาครุศาสตร์อุตสาหการ</option>
                                    <option>ภาควิชาเทคโนโลยีและสื่อสารการศึกษา</option>
                                    <option>สาขาวิชาคอมพิวเตอร์และเทคโนโลยีสารสนเทศ</option>
                                    <option>ภาควิชาเทคโนโลยีการพิมพ์และบรรจุภัณฑ์</option>
                                    <option>โครงการร่วมบริหารหลักสูตรฯ (มีเดีย)</option>
                                </optgroup>
                                <optgroup label="คณะวิทยาศาสตร์">
                                    <option>ภาควิชาคณิตศาสตร์</option>
                                    <option>ภาควิชาเคมี</option>
                                    <option>ภาควิชาจุลชีววิทยา</option>
                                    <option>ภาควิชาฟิสิกส์</option>
                                </optgroup>
                                <optgroup label="คณะเทคโนโลยีสารสนเทศ">
                                    <option>ภาควิชาเทคโนโลยีสารสนเทศ</option>
                                    <option>ภาควิชาวิทยาศาสตร์คอมพิวเตอร์</option>
                                </optgroup>
                                <optgroup label="คณะศิลปศาสตร์">
                                    <option>ภาควิชาศิลปศาสตร์</option>
                                </optgroup>
                                <optgroup label="คณะทรัพยากรชีวภาพและเทคโนโลยี">
                                    <option>สายวิชาเทคโนโลยีชีวภาพ</option>
                                    <option>สายวิชาเทคโนโลยีชีวเคมี</option>
                                    <option>สายวิชาเทคโนโลยีหลังการเก็บเกี่ยว</option>
                                    <option>สายวิชาการจัดการทรัพยากรชีวภาพ</option>
                                    <option>หลักสูตรชีวสารสนเทศและชีววิทยาระบบ</option>
                                </optgroup>
                                <optgroup label="คณะสถาปัตยกรรมศาสตร์และการออกแบบ">
                                    <option>ภาควิชาสถาปัตยกรรมศาสตร์และการออกแบบ</option>
                                </optgroup>
                                <optgroup label="คณะสถาบันวิทยาการหุ่นยนต์ภาคสนาม (วทม.)">
                                    <option>สาขาวิชาวิศวกรรมหุ่นยนต์และระบบอัตโนมัติ (ป.ตรี)</option>
                                    <option>สาขาวิชาวิทยาการหุ่นยนต์และระบบอัตโนมัติ (ป.โท)</option>
                                    <option>สาขาวิชาธุรกิจเทคโนโลยี (ป.โท)</option>
                                    <option>สาขาวิชาวิทยาการหุ่นยนต์และระบบอัตโนมัติ (ป.เอก)</option>
                                </optgroup>
                            </select>
                        </div>
                    </div>
                    <div className="form-group">
                            <label>  Graduated Date : </label><Datetime mode="date" defaultText={this.state.graduate_date} onDatetimeChange={(date) => this.setState({ graduate_date: date.target.Datetime })} />
                    </div>
                    <div className="form-group">
                        <div className="col-md-9 col-sm-9 col-xs-12 col-md-offset-3">
                            <button onClick={this.navigateBack} className="btn btn-danger">Cancel</button>
                            <button type="reset" className="btn btn-primary">Reset</button>
                            <button type="submit" className="btn btn-success">Add</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}
export default ProfileAlumniPageAddGraduate