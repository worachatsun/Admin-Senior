import React, { Component } from 'react';
import { Link } from 'react-router'
import * as actions from '../../actions'
import { connect } from 'react-redux'
class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            admin_id: '',
            password: '',
            errors: {},
            loading: false
        }

        this.onSignIn = this.onSignIn.bind(this)
    }

    onSignIn() {
        let { admin_id, password, errors } = this.state
        if (!admin_id) {
            errors.admin_id = "Please enter a admin id"
        }
        if (!password) {
            errors.password = "Please enter a password."
        }
        this.setState({
            loading: true
        })
        this.props.loginAdmin(admin_id, password).then(() => {
            this.setState({
                loading: false
            })
        })
    }
    render() {
        return (
            <div className="login_wrapper">
                <div className="login_form">
                    <section className="login_content">
                        <form onSubmit={this.onSignIn}>
                            <h1>Administrator</h1>
                            <div>
                                <input type="text" className="form-control" placeholder="Username" required="" />
                            </div>
                            <div>
                                <input type="password" className="form-control" placeholder="Password" required="" />
                            </div>
                            <Link className="reset_pass" to='/reset'>Lost your password?</Link>
                            <div>
                                <Link  className="btn btn-default submit" to='/regis'>Register</Link>
                                <Link className="btn btn-default submit" type='submit' to='/Dashboard'>Sign in</Link>
                            </div>
                            <div className="clearfix"></div>
                            <br /><br />
                            <div>
                                <h2><i className="fa fa-cloud"></i> Alumni KMUTT</h2>
                            </div>
                        </form>
                    </section>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return { a: state }
}

export default connect(mapStateToProps, actions)(Login);