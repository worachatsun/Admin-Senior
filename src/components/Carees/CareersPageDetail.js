import React, { Component } from 'react'
import { Link } from 'react-router'
import CareerTableJoiner from './CareersTableJoinerRec'
import SideNavBar from '../SideNavBar'
import TopNavBar from '../TopNavBar'
import Footer from '../Footer'
class CareersPageDetail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      picture: '',
      career_name: 'รับสมัครพนักงานเดิมน้ำมัน',
      career_description: 'บริษัท ปตท.จำกัด (มหาชน) เป็นบริษัทพลังงานแห่งชาติ ประกอบธุรกิจก๊าซธรรมชาติครบวงจร รวมถึง ธุรกิจน้ำมัน ธุรกิจการค้าระหว่างประเทศ',
      qualification: '1. อายุ 18 ปีขึ้นไป 2. เพศชาย/หญิง 3. รักงานบริการ ต้องการความก้วหน้า 4. เคยผ่านงานด้านการเติมน้ำมันจะพิจารณาเป็นพิเศษ',
      capacity: 100,
      company: 'บริษัท ปตท.จำกัด (มหาชน)',
      salary_min: 12500,
      salary_max: 15000,
      information: 'บริการหน้าลาน ประจำปั๊ม ปตท.',
    }

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
                <h3>Career :: Detail Page</h3>
              </div>
            </div>
            <div className="clearfix" />
            <br />
            <div className="row">
              <div className="col-md-12 col-sm-12 col-xs-12">
                <div className="x_panel">
                  <div className="x_title">
                    <h2 className="prod_main_title">Career Opportunity : {this.state.career_name}</h2>
                    <div className="clearfix" />
                  </div>
                  <div className="x_content">
                    <div className="col-md-7 col-sm-7 col-xs-12">
                      <div className="main-image">
                        <img src="http://www.pttplc.com/th/Products-Services/PublishingImages/Graphics/layProductsServices-04-services-PTTLifeStation/img-product-lifestation.png" alt="..." />
                      </div>
                    </div>
                    <div className="col-md-5 col-sm-5 col-xs-12" style={{ border: '0px solid #e5e5e5' }}>
                      <h3 className="prod_title">{this.state.career_name}</h3>
                      <div className>
                        {this.state.career_description}
                      </div>
                      <br />
                      <div className>
                        <h2>Qualification</h2>
                        <p>{this.state.qualification}</p>
                      </div>
                      <br />
                      <div className>
                        <h2>Capacity</h2>
                        <p>{this.state.capacity}</p>
                      </div>
                      <br />
                      <div className>
                        <h2>Company</h2>
                        <p>{this.state.company}</p>
                      </div>
                      <br />
                      <div className>
                        <h2>Salary</h2>
                        <p>{this.state.salary_min} - {this.state.salary_max}  บาท</p>
                      </div>
                      <br />
                      <div className>
                        <h2>Infomation</h2>
                        <p>{this.state.information}</p>

                      </div>
                      <br />
                      <div className>
                        <Link to='/Careers/Edit' className="btn btn-info btn-lg">Edit</Link>
                        <button type="button" className="btn btn-danger btn-lg">Delete</button>
                      </div>
                    </div>
                  </div>
                  <div className="clearfix" />
                  <div className="col-md-12 col-sm-12 col-xs-12">
                    <div className="x_panel">
                      <div className="x_title">
                        <h2>Career Joiner</h2>
                        <div className="clearfix" />
                        <br />
                      </div>
                      <div className="x_content">
                        <CareerTableJoiner sizePerPage={5} />
                      </div>
                    </div>
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
export default CareersPageDetail