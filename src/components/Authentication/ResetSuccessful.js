import React, { Component } from 'react';
import { Link } from 'react-router'
class ResetSuccessful extends Component {
    render() {
        return (
            <div className="login_wrapper">
                <div id="reset" className="login_form">
                    <section className="login_content">
                        <form>
                            <h1>Reset Password</h1>
                            <div>
                                <p>Sent reset password successful,</p>
                                <p>Please check your email.</p>
                            </div>

                            <div>
                                <Link className="btn btn-default submit" to='/'>Go to Login</Link>
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

export default ResetSuccessful;