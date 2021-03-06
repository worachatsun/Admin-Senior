import React, { Component } from 'react';
import { Link } from 'react-router'
class ResetPassword extends Component {
    render() {
        return (
            <div className="login_wrapper">
                <div id="reset" className="login_form">
                    <section className="login_content">
                        <form>
                            <h1>Reset Password</h1>
                            <div>
                                <input type="email" className="form-control" placeholder="Email" required="" />
                            </div>

                            <div>
                                <Link to='/resetSuccessful' className="btn btn-default submit">Submit</Link>
                            </div>

                            <div className="clearfix"></div>
                            <br />
                            <div className="separator">
                                <br />
                                <div>
                                    <h2><i className="fa fa-cloud"></i> Alumni KMUTT</h2>
                                </div>
                            </div>
                        </form>
                    </section>
                </div>
            </div>
        );
    }
}

export default ResetPassword;